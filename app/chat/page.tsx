"use client";
import Header from '@/components/Header';
import MainDisplay from '@/components/MainDisplay';
import FeedbackPanel from '@/components/FeedbackPanel';
import ActionBar from '@/components/ActionBar';
import { useAudioChat } from '@/lib/audio/useAudioChat';

export default function ChatPage() {
  const { status, volume, feedbacks, startSession, stopSession } = useAudioChat();

  return (
    <div className="flex flex-col h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white overflow-hidden">
      <Header />
      
      <div className="flex flex-1 overflow-hidden relative">
        <MainDisplay volume={volume} status={status} />
        <FeedbackPanel feedbacks={feedbacks} />
      </div>

      <ActionBar 
        status={status} 
        onToggleMic={status === 'Live' ? stopSession : startSession} 
      />
    </div>
  );
}
