'use client';

import { ChatMessage as ChatMessageType } from '@/types';
import { User, Bot } from 'lucide-react';

interface ChatMessageProps {
  message: ChatMessageType;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex gap-4 p-4 ${isUser ? 'bg-gray-50' : 'bg-white'}`}>
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
        isUser ? 'bg-blue-500' : 'bg-gray-700'
      }`}>
        {isUser ? (
          <User className="w-5 h-5 text-white" />
        ) : (
          <Bot className="w-5 h-5 text-white" />
        )}
      </div>
      <div className="flex-1">
        <div className="font-semibold text-sm mb-1">
          {isUser ? 'You' : 'Delhi Assembly AI'}
        </div>
        <div className="text-gray-800 whitespace-pre-wrap">
          {message.content}
        </div>
        <div className="text-xs text-gray-500 mt-2">
          {message.timestamp.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}

