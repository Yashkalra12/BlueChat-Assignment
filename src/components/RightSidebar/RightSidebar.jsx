import React from 'react';
import UserProfile from './UserProfile';
import QuickActions from './QuickActions';
import UserMetrics from './UserMetrics';
import UserTags from './UserTags';
import UserNotes from './UserNotes';

export default function RightSidebar() {
  return (
    <div className="w-80 border-l border-gray-200 bg-white p-4 overflow-y-auto">
      <UserProfile />
      <QuickActions />
      <div className="space-y-6">
        <UserMetrics />
        <UserTags />
        <UserNotes />
      </div>
    </div>
  );
}