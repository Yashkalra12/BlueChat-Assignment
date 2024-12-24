import React from 'react';

export default function UserProfile() {
  return (
    <div className="text-center mb-6">
      <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="User Profile"
        className="w-20 h-20 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold">Dr Nirmla</h2>
      <p className="text-gray-500">drnirmala@india.com</p>
      <p className="text-gray-500">+91 (923) 123-4567</p>
    </div>
  );
}