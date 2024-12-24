import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function QuickActions() {
  return (
    <div className="flex space-x-2 mb-6">
      <button className="flex-1 flex items-center justify-center space-x-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        <Phone className="h-4 w-4" />
        <span>Call</span>
      </button>
      <button className="flex-1 flex items-center justify-center space-x-2 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
        <Mail className="h-4 w-4" />
        <span>Email</span>
      </button>
    </div>
  );
}