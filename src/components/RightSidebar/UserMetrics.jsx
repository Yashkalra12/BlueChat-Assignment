import React from 'react';

export default function UserMetrics() {
  return (
    <div>
      <h3 className="text-sm font-medium text-gray-500 mb-2">Metrics</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-500">Total Revenue</p>
          <p className="text-lg font-semibold">₹10,000</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-500">Web Visits</p>
          <p className="text-lg font-semibold">23</p>
        </div>
      </div>
    </div>
  );
}