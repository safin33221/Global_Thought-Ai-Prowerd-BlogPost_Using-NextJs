'use client';

import { useState } from 'react';
import { useCurrentUserDetails } from '@/Hook/useCurrentUserDetails';
import DashboardAside from './components/DashboardAside';
import { Menu } from 'lucide-react';
import clsx from 'clsx';
import GlobalThought from '../components/GlobalThought';
import ThemeToggle from '@/components/ThemeToggle';
import DashboardAsideSkeleton from './components/DashboardAsideSkeleton';

export default function Layout({ children }: { children: React.ReactNode }) {
  const {  isPending } = useCurrentUserDetails();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);



  return (
    <div className="flex h-screen overflow-hidden relative">
      {/* Sidebar */}
      <div
        className={clsx(
          'fixed top-0 left-0 z-50 h-full w-80 bg-card shadow-lg transition-transform duration-300 ease-in-out',
          {
            '-translate-x-full': !isSidebarOpen,
            'translate-x-0': isSidebarOpen,
            'md:translate-x-0': true,
            'md:relative md:block': true,
          }
        )}
      >
        {/* Close Button (Mobile only) */}
        <div className="flex md:hidden justify-end p-2">

          <button onClick={() => setIsSidebarOpen(false)} className="text-xl font-bold">
            ❌
          </button>
        </div>
        {
          isPending ? (
            <DashboardAsideSkeleton />
          ) : (
            <DashboardAside onClose={() => setIsSidebarOpen(false)} />
          )
        }
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed  inset-0 z-40 bg-black/80 opacity-90 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main content area */}
      <div className="flex-1 w-full ">
        {/* Topbar with mobile menu button */}
        <div className="p-4 md:hidden bg-card  shadow">
          <div className='flex justify-between'>
            <div className='flex items-center'>
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="text-gray-700 focus:outline-none"
              >
                <Menu className="w-6 h-6" />
              </button>
              <ThemeToggle />
            </div>
            <GlobalThought />
          </div>
        </div>

        <main className="p-4 overflow-y-auto h-[calc(100vh-64px)] md:h-screen mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
