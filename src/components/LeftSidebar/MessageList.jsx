import React from 'react';

const messages = [
  {
    id: 1,
    name: 'Dr Nirmla',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    preview: 'Hi, I need help with my recent order...',
    time: '2m ago',
    unread: true,
  },
];

export default function MessageList() {
  return (
    <div className="overflow-y-auto">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`p-4 hover:bg-gray-50 cursor-pointer ${
            message.unread ? 'bg-blue-50' : ''
          }`}
        >
          <div className="flex space-x-3">
            <img
              src={message.avatar}
              alt={message.name}
              className="h-10 w-10 rounded-full"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">{message.name}</p>
                <p className="text-xs text-gray-500">{message.time}</p>
              </div>
              <p className="text-sm text-gray-500 truncate">{message.preview}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}