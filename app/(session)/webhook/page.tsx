"use client";

import { DashboardLayout } from '@/components/shared';
import Button from '@/components/shared/Button';
import React from 'react';

const WebhookPage = () => {

  return (
    <DashboardLayout>
      <div className=" mb-8">
        <div className='flex items-center justify-between'>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Webhook Inspector</h1>
          <Button size="md" className='w-50 bg-green-600 hover:bg-gray-500 transition-all duration-300 text-sm md:text-base'>
            Create Endpoint
          </Button>

        </div>
        <p className="text-slate-600">Capture and inspect HTTP requests in real-time</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 mb-6 shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm sm:text-base font-semibold text-slate-900">Your Endpoint</h3>
          <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] sm:text-xs font-medium rounded">Active</span>
        </div>
        <div className="bg-slate-900 rounded-lg p-4 font-mono text-xs sm:text-sm text-green-400">
          https://hook.pixelpipe.dev/xyz123abc
        </div>
        <button className="mt-3 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-xs sm:text-sm font-medium transition">
          Copy Endpoint
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-md">
        <div className="p-6 border-b border-slate-200">
          <h3 className="font-semibold text-slate-900">Request History (24)</h3>
        </div>
        <div className="divide-y divide-slate-200">
          {[1, 2, 3].map(i => (
            <div key={i} className="p-4 hover:bg-slate-50 transition cursor-pointer">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded">POST</span>
                  <span className="text-sm text-slate-900 font-medium">/hook/xyz123abc</span>
                </div>
                <span className="text-xs text-slate-500">2 min ago</span>
              </div>
              <div className="text-xs text-slate-500">Content-Type: application/json • 256 bytes</div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default WebhookPage;
