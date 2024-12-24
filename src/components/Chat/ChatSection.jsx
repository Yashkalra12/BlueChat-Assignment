import React from 'react';
import MessageThread from './MessageThread';
import QuickReplies from './QuickReplies';
import MessageInput from './MessageInput';

export default function ChatSection() {
  return (
    <div className="flex-1 flex flex-col h-full">
      <MessageThread />
      <div className="p-4 border-t border-gray-200">
        <QuickReplies />
        <MessageInput />
      </div>
    </div>
  );
}