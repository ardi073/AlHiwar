const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 3001 });

console.log('Mock WebSocket Server running on ws://localhost:3001');

wss.on('connection', function connection(ws) {
  console.log('Client connected!');
  
  ws.send(JSON.stringify({ type: 'server-status', message: 'Connected to Mock Server' }));

  ws.on('message', function message(data) {
    try {
      const parsed = JSON.parse(data);
      
      if (parsed.type === 'realtime_input' && parsed.media_chunks) {
        // Echo back the audio for testing purposes
        // In a real app, this goes to Gemini/OpenAI API
        const chunk = parsed.media_chunks[0];
        
        // Let's just echo it back as server output
        ws.send(JSON.stringify({
          type: 'audio_output',
          data: chunk.data, // base64 pcm 16kHz
        }));
      }
    } catch (e) {
      console.error('Error parsing message', e);
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected.');
  });
});
