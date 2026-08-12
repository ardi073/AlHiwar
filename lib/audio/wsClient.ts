export class WebSocketClient {
  private ws: WebSocket | null = null;
  private onAudioCallback: ((base64: string) => void) | null = null;
  private onStatusCallback: ((status: string) => void) | null = null;

  constructor(
    private url: string,
    onAudio: (base64: string) => void,
    onStatus: (status: string) => void
  ) {
    this.onAudioCallback = onAudio;
    this.onStatusCallback = onStatus;
  }

  connect() {
    this.onStatusCallback?.('Connecting');
    try {
      this.ws = new WebSocket(this.url);
      
      this.ws.onopen = () => {
        this.onStatusCallback?.('Live');
      };
      
      this.ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (data.type === 'audio_output' && data.data) {
            this.onAudioCallback?.(data.data);
          }
        } catch (e) {
          console.error('WS parsing error', e);
        }
      };
      
      this.ws.onclose = () => {
        this.onStatusCallback?.('Disconnected');
      };
      
      this.ws.onerror = (e) => {
        console.error('WebSocket Error', e);
        this.onStatusCallback?.('Disconnected');
      };
    } catch (e) {
      console.error('Failed to create WebSocket', e);
      this.onStatusCallback?.('Disconnected');
    }
  }

  sendAudio(base64: string) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify({
        type: 'realtime_input',
        media_chunks: [{
          mime_type: 'audio/pcm;rate=16000',
          data: base64
        }]
      }));
    }
  }

  disconnect() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }
}
