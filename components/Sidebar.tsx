'use client';

import { X } from 'lucide-react';

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
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-blue-800 via-blue-700 to-blue-900 text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        {/* Header with logo */}
        <div className="px-4 py-5 border-b border-blue-900 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
              <span className="text-[10px] font-semibold text-blue-900 text-center leading-tight">
                LA
              </span>
            </div>
            <div className="leading-tight">
              <div className="text-xs font-semibold tracking-wide uppercase">
                Legislative Assembly
              </div>
              <div className="text-xs text-blue-100">
                N.C.T. of Delhi
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden text-blue-100 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* New chat button */}
        <div className="px-4 pt-4 pb-2 border-b border-blue-900">
          <button className="w-full text-left px-4 py-3 rounded-none bg-blue-700 hover:bg-blue-600 text-sm font-medium tracking-wide">
            + New Chat
          </button>
        </div>

        {/* Chat history section */}
        <nav className="px-4 pt-4 text-sm">
          <div className="text-blue-100 font-semibold mb-4">Chat History</div>
          <div className="text-xs text-blue-200 opacity-70">
            Recent conversations will appear here.
          </div>
        </nav>
      </div>
    </>
  );
}

