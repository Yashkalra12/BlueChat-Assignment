import React from 'react';
import Header from './components/Header/Header';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import ChatSection from './components/Chat/ChatSection';
import RightSidebar from './components/RightSidebar/RightSidebar';

function App() {
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="flex-1 flex overflow-hidden">
        <LeftSidebar />
        <ChatSection />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;