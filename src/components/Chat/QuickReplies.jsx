import React from 'react';

const quickReplies = [
  'I understand your concern',
  'Let me check that for you',
  'Is there anything else I can help you with?',
];

export default function QuickReplies() {
  return (
    <div className="flex space-x-2 mb-4">
      {quickReplies.map((reply, index) => (
        <button
          key={index}
          className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200"
        >
          {reply}
        </button>
      ))}
    </div>
  );
}