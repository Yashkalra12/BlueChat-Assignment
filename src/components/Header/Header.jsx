import React from 'react';
import Logo from './Logo';
import UserMenu from './UserMenu';

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4">
      <Logo />
      <UserMenu />
    </header>
  );
}