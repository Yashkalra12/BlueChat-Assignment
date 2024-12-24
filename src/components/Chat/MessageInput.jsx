import React from 'react';
import { Paperclip, Smile, Send } from 'lucide-react';

export default function MessageInput() {
  return (
    <div className="flex items-center space-x-2">
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <Paperclip className="h-5 w-5 text-gray-500" />
      </button>
      <input
        type="text"
        placeholder="Type your message..."
        className="flex-1 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <Smile className="h-5 w-5 text-gray-500" />
      </button>
      <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
        <Send className="h-5 w-5" />
      </button>
    </div>
  );
}