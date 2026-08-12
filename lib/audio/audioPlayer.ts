export class AudioPlayer {
  private context: AudioContext;
  private analyser: AnalyserNode;
  private nextTime: number = 0;

  constructor() {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    this.context = new AudioContextClass({ sampleRate: 16000 });
    this.analyser = this.context.createAnalyser();
    this.analyser.fftSize = 256;
    this.analyser.connect(this.context.destination);
    this.nextTime = this.context.currentTime;
  }

  // base64 is 16kHz PCM Int16
  playChunk(base64: string) {
    try {
      const binary = window.atob(base64);
      const len = binary.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
          bytes[i] = binary.charCodeAt(i);
      }
      
      const int16Array = new Int16Array(bytes.buffer);
      const float32Array = new Float32Array(int16Array.length);
      for (let i = 0; i < int16Array.length; i++) {
          float32Array[i] = int16Array[i] / (int16Array[i] >= 0 ? 32767 : 32768);
      }

      const audioBuffer = this.context.createBuffer(1, float32Array.length, 16000);
      audioBuffer.getChannelData(0).set(float32Array);

      const source = this.context.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(this.analyser);
      
      // Gapless playback scheduling
      if (this.nextTime < this.context.currentTime) {
          this.nextTime = this.context.currentTime + 0.05; // tiny buffer
      }
      
      source.start(this.nextTime);
      this.nextTime += audioBuffer.duration;
    } catch (e) {
      console.error('Error playing chunk', e);
    }
  }

  getVolume(): number {
    if (this.context.state === 'suspended') {
      return 0;
    }
    const dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(dataArray);
    let sum = 0;
    for (let i = 0; i < dataArray.length; i++) {
      sum += dataArray[i];
    }
    return sum / dataArray.length;
  }
  
  stop() {
    if (this.context.state !== 'closed') {
      this.context.close();
    }
  }
}
