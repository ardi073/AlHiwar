import { useState, useRef, useEffect } from 'react';
import { AudioRecorder } from './audioRecorder';
import { AudioPlayer } from './audioPlayer';
import { WebSocketClient } from './wsClient';

export interface FeedbackData {
  id: string;
  originalText: string;
  correctedText: string | null;
  explanation: string;
  CEFR_Level: string;
  isError: boolean;
}

export function useAudioChat() {
  const [status, setStatus] = useState<string>('Disconnected');
  const [volume, setVolume] = useState<number>(0);
  const [feedbacks, setFeedbacks] = useState<FeedbackData[]>([]);
  
  const recorderRef = useRef<AudioRecorder | null>(null);
  const playerRef = useRef<AudioPlayer | null>(null);
  const wsRef = useRef<WebSocketClient | null>(null);
  
  const startSession = async () => {
    try {
      if (status === 'Live' || status === 'Connecting') return;
      
      playerRef.current = new AudioPlayer();
      
      wsRef.current = new WebSocketClient('ws://localhost:3001', (base64) => {
        playerRef.current?.playChunk(base64);
      }, (s) => setStatus(s));
      
      wsRef.current.connect();
      
      recorderRef.current = new AudioRecorder((base64) => {
        wsRef.current?.sendAudio(base64);
      });
      
      await recorderRef.current.start();
      
    } catch (err) {
      console.error('Failed to start session', err);
      setStatus('Disconnected');
    }
  };
  
  const stopSession = () => {
    recorderRef.current?.stop();
    wsRef.current?.disconnect();
    playerRef.current?.stop();
    
    recorderRef.current = null;
    wsRef.current = null;
    playerRef.current = null;
    
    setStatus('Disconnected');
    setVolume(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current && status === 'Live') {
        setVolume(playerRef.current.getVolume());
      }
    }, 50);
    return () => clearInterval(interval);
  }, [status]);

  // Simulasi STT (Speech-To-Text) mengirim data secara periodik ke Backend
  useEffect(() => {
    let mockInterval: NodeJS.Timeout;
    
    if (status === 'Live') {
      const dummyPhrases = [
        "Hello, how are you today?",
        "I has a dog and a cat.", // Intentional grammar error
        "The weather is very gooder today.", // Intentional grammar error
        "She have a beautiful house." // Intentional grammar error
      ];
      
      let phraseIndex = 0;
      
      // Simulate speaking every 8 seconds
      mockInterval = setInterval(async () => {
        const text = dummyPhrases[phraseIndex % dummyPhrases.length];
        phraseIndex++;
        
        try {
          const res = await fetch('/api/feedback', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text })
          });
          
          if (res.ok) {
            const data = await res.json();
            setFeedbacks(prev => [{ ...data, id: Date.now().toString() }, ...prev]);
          }
        } catch (err) {
          console.error("Failed to fetch feedback", err);
        }
      }, 8000); // 8 seconds
    }
    
    return () => {
      if (mockInterval) clearInterval(mockInterval);
    };
  }, [status]);

  return {
    status,
    volume,
    feedbacks,
    startSession,
    stopSession
  };
}
