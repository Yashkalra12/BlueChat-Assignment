import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      <input
        type="text"
        placeholder="Search conversations"
        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}