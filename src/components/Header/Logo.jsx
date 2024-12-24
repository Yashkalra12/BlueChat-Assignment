import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-4">
      <MessageSquare className="h-6 w-6 text-blue-600" />
      <h1 className="text-xl font-semibold text-gray-900">BlueChat</h1>
      <span className="text-sm text-gray-500">via Messenger</span>
    </div>
  );
}