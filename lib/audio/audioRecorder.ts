export class AudioRecorder {
  private context: AudioContext | null = null;
  private stream: MediaStream | null = null;
  private workletNode: AudioWorkletNode | null = null;
  private onDataCallback: ((base64: string) => void) | null = null;

  constructor(onData: (base64: string) => void) {
    this.onDataCallback = onData;
  }

  async start() {
    this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    
    // Explicitly cast to Window to access AudioContext which might be prefixed in old browsers
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    this.context = new AudioContextClass({ sampleRate: 16000 });
    
    // Create AudioWorklet via Blob to avoid serving a separate static file
    const workletCode = `
      class PCMProcessor extends AudioWorkletProcessor {
        process(inputs, outputs, parameters) {
          const input = inputs[0];
          if (input && input.length > 0) {
            const channelData = input[0];
            // Convert Float32Array to Int16Array
            const pcm16 = new Int16Array(channelData.length);
            for (let i = 0; i < channelData.length; i++) {
              let s = Math.max(-1, Math.min(1, channelData[i]));
              pcm16[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
            }
            this.port.postMessage(pcm16.buffer);
          }
          return true;
        }
      }
      registerProcessor('pcm-processor', PCMProcessor);
    `;
    
    const blob = new Blob([workletCode], { type: 'application/javascript' });
    const url = URL.createObjectURL(blob);
    
    await this.context.audioWorklet.addModule(url);
    URL.revokeObjectURL(url);
    
    const source = this.context.createMediaStreamSource(this.stream);
    this.workletNode = new AudioWorkletNode(this.context, 'pcm-processor');
    
    this.workletNode.port.onmessage = (event) => {
      if (this.onDataCallback) {
        // Convert ArrayBuffer to Base64
        const buffer = event.data;
        let binary = '';
        const bytes = new Uint8Array(buffer);
        const len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        const base64 = window.btoa(binary);
        this.onDataCallback(base64);
      }
    };
    
    source.connect(this.workletNode);
    // Don't connect to destination to avoid feedback loop
  }

  stop() {
    if (this.workletNode) {
      this.workletNode.disconnect();
      this.workletNode = null;
    }
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
      this.stream = null;
    }
    if (this.context) {
      this.context.close();
      this.context = null;
    }
  }
}
