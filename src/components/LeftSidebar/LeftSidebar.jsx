import React from 'react';
import SearchBar from './SearchBar';
import MessageFilters from './MessageFilters';
import MessageList from './MessageList';

export default function LeftSidebar() {
  return (
    <div className="w-80 border-r border-gray-200 h-full bg-white">
      <div className="p-4">
        <SearchBar />
        <MessageFilters />
      </div>
      <MessageList />
    </div>
  );
}