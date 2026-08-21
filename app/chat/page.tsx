"use client";
import Header from '@/components/Header';
import MainDisplay from '@/components/MainDisplay';
import FeedbackPanel from '@/components/FeedbackPanel';
import ActionBar from '@/components/ActionBar';
import { useAudioChat } from '@/lib/audio/useAudioChat';

export default function ChatPage() {
  const { status, volume, feedbacks, startSession, stopSession } = useAudioChat();

  return (
    <div className="flex h-screen w-full bg-slate-50 text-slate-900 overflow-hidden relative font-sans">
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative h-full">
        <Header />
        
        {/* Main Display takes full height, Header and ActionBar float above it */}
        <div className="flex-1 flex w-full h-full">
          <MainDisplay volume={volume} status={status} />
        </div>

        <ActionBar 
          status={status} 
          onToggleMic={status === 'Live' ? stopSession : startSession} 
        />
      </div>

      {/* Right Sidebar for Feedback (Desktop only) */}
      <FeedbackPanel feedbacks={feedbacks} />
      
    </div>
  );
}
