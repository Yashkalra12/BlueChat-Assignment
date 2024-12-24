import React from 'react';

const messages = [
  {
    id: 1,
    sender: 'user',
    content: 'Hi, I need help with my recent order #12345',
    time: '10:30 AM',
  },
  {
    id: 2,
    sender: 'support',
    content: 'Hello! I\'d be happy to help you with your order. Could you please provide more details about your issue?',
    time: '10:31 AM',
  },
];

export default function MessageThread() {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${
            message.sender === 'user' ? 'justify-end' : 'justify-start'
          }`}
        >
          <div
            className={`max-w-[70%] rounded-lg p-3 ${
              message.sender === 'user'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-900'
            }`}
          >
            <p>{message.content}</p>
            <p className="text-xs mt-1 opacity-70">{message.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}