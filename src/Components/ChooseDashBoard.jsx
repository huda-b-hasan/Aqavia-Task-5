import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ChooseDashBoard()  {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 dark:bg-gray-900">
      <div className="w-full max-w-4xl text-center">
        <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          Welcome to the Portal
        </h1>
        <p className="mb-10 text-lg text-gray-600 dark:text-gray-400">
          Please choose your destination to log into your dashboard.
        </p>

        {/* Responsive Grid Container */}
        <div className="grid gap-6 sm:grid-cols-2">
          
          {/* Admin Option Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-800">
            <div className="mb-6 text-left">
              <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 dark:bg-indigo-900/50 dark:text-indigo-400">
                Management
              </span>
              <h2 className="mt-3 text-xl font-bold text-gray-900 dark:text-white">Admin Portal</h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Access system settings, manage users, review site analytics, and control global configurations.
              </p>
            </div>
            <button
              onClick={() => navigate('/admin')}
              className="w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
            >
              Go to Admin Dashboard
            </button>
          </div>

          {/* User Option Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-800">
            <div className="mb-6 text-left">
              <span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-700/10 dark:bg-emerald-900/50 dark:text-emerald-400">
                Client Workspace
              </span>
              <h2 className="mt-3 text-xl font-bold text-gray-900 dark:text-white">User Portal</h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                View your personal profile, check your active project status, and view your custom account feed.
              </p>
            </div>
            <button
              onClick={() => navigate('/user')}
              className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition-colors"
            >
              Go to User Dashboard
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

