import React from 'react';

export default function UserTags() {
  return (
    <div>
      <h3 className="text-sm font-medium text-gray-500 mb-2">Tags</h3>
      <div className="flex flex-wrap gap-2">
        <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
          VIP Customer
        </span>
        <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-sm">
          Active
        </span>
      </div>
    </div>
  );
}