import React from 'react';

export default function UserNotes() {
  return (
    <div>
      <h3 className="text-sm font-medium text-gray-500 mb-2">Notes</h3>
      <textarea
        className="w-full h-24 p-2 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Add a note..."
      />
    </div>
  );
}