'use client';

import { ChatMessage as ChatMessageType } from '@/types';
import { User, Bot } from 'lucide-react';

interface ChatMessageProps {
  message: ChatMessageType;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div
      className={`w-full flex mb-6 px-6 md:px-16 ${
        isUser ? 'justify-start' : 'justify-end'
      }`}
    >
      <div
        className={`max-w-3xl w-full md:w-3/4 lg:w-2/3 bg-white/95 text-gray-900 rounded-[32px] shadow-lg px-8 py-6`}
      >
        <div className="text-xs font-semibold text-gray-500 mb-2">
          {isUser ? 'You' : 'Delhi Assembly AI'}
        </div>
        <div className="text-sm md:text-base whitespace-pre-wrap leading-relaxed">
          {message.content}
        </div>
      </div>
    </div>
  );
}

