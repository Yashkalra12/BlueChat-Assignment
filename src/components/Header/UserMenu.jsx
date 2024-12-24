import React from 'react';
import { ChevronDown, Bell } from 'lucide-react';

export default function UserMenu() {
  return (
    <div className="flex items-center space-x-4">
      <Bell className="h-5 w-5 text-gray-500" />
      <div className="flex items-center space-x-2 cursor-pointer">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Profile"
          className="h-8 w-8 rounded-full"
        />
        <ChevronDown className="h-4 w-4 text-gray-500" />
      </div>
    </div>
  );
}