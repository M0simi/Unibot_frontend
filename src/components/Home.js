import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { LogOut } from 'lucide-react';

const Home = ({ onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 font-cairo">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-64">
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3 space-x-reverse">
              <h1 className="text-2xl font-bold text-gray-900 font-cairo">مرحباً في Unibot</h1>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 space-x-reverse px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition duration-200 font-cairo"
            >
              <LogOut className="h-5 w-5" />
              <span className="font-medium">خروج</span>
            </button>
          </div>
        </header>
        <main className="flex-1 overflow-hidden bg-gray-50">
          <Chat />
        </main>
      </div>
      <button
        className="fixed top-5 right-5 z-50 p-3 bg-white rounded-xl shadow-lg lg:hidden hover:shadow-xl transition-shadow"
        onClick={() => setSidebarOpen(true)}
        aria-label="فتح الشريط الجانبي"
      >
        <svg className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  );
};

export default Home;
