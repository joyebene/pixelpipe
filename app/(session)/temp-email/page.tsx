"use client";

import React from 'react';
import { Mail, Link2, Clock } from 'lucide-react';
import { DashboardLayout } from '@/components/shared';
import Button from '@/components/shared/Button';

const TempEmailPage = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <div className='flex items-center justify-between'>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Temporary Email</h1>
           <Button size="md" className='w-50 bg-purple-600 hover:bg-gray-500 transition-all duration-300 text-sm sm:text-base'>
            Create New Inbox
          </Button>
          
        </div>
          <p className="text-slate-600">Generate disposable inboxes for testing</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 shadow-md">
          <h3 className="font-semibold text-slate-900 mb-4">Active Inboxes</h3>
          <div className="space-y-3">
            <div className="p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="font-mono text-xs sm:text-sm text-slate-900">test@temp.pixelpipe.dev</div>
                <button type='button' className="text-slate-500 hover:text-slate-700">
                  {<Link2 className="w-4 h-4" />}
                </button>
              </div>
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3" />
                  3 emails
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  Expires in 2 days
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-4 md:p-6 shadow-md">
          <h3 className="font-semibold text-slate-900 mb-4">Recent Emails</h3>
          <div className="space-y-3">
            <div className="p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition cursor-pointer">
              <div className="font-medium text-slate-900 text-sm mb-1">Welcome Email</div>
              <div className="text-xs text-slate-500">from: noreply@service.com</div>
            </div>
            <div className="p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition cursor-pointer">
              <div className="font-medium text-slate-900 text-sm mb-1">Password Reset</div>
              <div className="text-xs text-slate-500">from: security@app.com</div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TempEmailPage;
