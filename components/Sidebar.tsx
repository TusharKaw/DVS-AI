'use client';

import { useState } from 'react';
import { Menu, X, Home, Info } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="p-4 border-b border-gray-700 flex items-center justify-between">
          <h2 className="text-xl font-bold">Delhi Assembly</h2>
          <button
            onClick={onClose}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 cursor-pointer">
              <Home className="w-5 h-5" />
              <span>Home</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 cursor-pointer">
              <Info className="w-5 h-5" />
              <span>About</span>
            </div>
          </div>
        </nav>

        <div className="absolute bottom-4 left-4 right-4 p-4 bg-gray-800 rounded-lg">
          <div className="text-sm text-gray-400 mb-2">Quick Info</div>
          <div className="text-xs text-gray-300">
            Ask questions about MLAs, their constituencies, achievements, and assembly speeches.
          </div>
        </div>
      </div>
    </>
  );
}

