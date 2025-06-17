'use client'

import React from 'react'

const DashboardAsideSkeleton = () => {
  return (
    <aside className="min-h-screen w-72 md:w-64 md:p-4 mx-5 animate-pulse">
      {/* Top user section */}
      <div>
        <div className="flex justify-between items-center">
          <div>
            <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
        <div className="border my-7"></div>

        {/* Menu links */}
        <div className="space-y-2">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="flex items-center gap-3 px-4 py-2">
              <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full" />
              <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
          ))}
        </div>
      </div>

      <div className="border my-5"></div>

      {/* Bottom settings section */}
      <div>
        <div className="items-center hidden md:flex mx-auto justify-center mb-3">
          <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded-full" />
        </div>
        <div className="space-y-2">
          {[...Array(3)].map((_, idx) => (
            <div key={idx} className="flex items-center gap-3 px-4 py-2">
              <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full" />
              <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default DashboardAsideSkeleton
