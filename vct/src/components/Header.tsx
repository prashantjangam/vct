import React from 'react';
import { Activity } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Activity size={28} className="text-indigo-600 mr-2" />
            <h1 className="text-xl font-bold text-gray-900">UserFlow</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              Journeys
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              Analytics
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              Reports
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              Settings
            </a>
          </nav>
          <div className="flex items-center">
            <div className="bg-gray-100 text-gray-800 rounded-full w-8 h-8 flex items-center justify-center">
              <span className="text-sm font-medium">JS</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;