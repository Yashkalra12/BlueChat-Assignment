import React from 'react';

export default function MessageFilters() {
  return (
    <div className="flex space-x-2 mt-4">
      <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
        All
      </button>
      <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-full text-sm font-medium">
        Unread
      </button>
      <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-full text-sm font-medium">
        Oldest
      </button>
    </div>
  );
}