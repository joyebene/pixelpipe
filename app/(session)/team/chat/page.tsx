"use client";

import React from 'react';
import { DashboardLayout } from '../../../../components/shared';

const ChatPage = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col h-[calc(100vh-120px)]">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Team Chat</h1>
        <p className="text-slate-600 mb-8">Communicate with your team in real-time.</p>

        <div className="grow bg-white rounded-xl border border-slate-200 flex flex-col shadow-md">
          <div className="p-6 grow overflow-y-auto">
            {/* Chat messages will go here */}
            <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-200 shrink-0"></div>
                <div>
                    <p className="font-bold text-sm">John Doe</p>
                    <div className="bg-slate-100 p-3 rounded-lg mt-1 text-sm">
                        <p>Hey everyone, just wanted to check in.</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="p-6 border-t border-slate-200">
            <div className="relative">
                <input type="text" placeholder="Type a message..." className="w-full p-3 pr-12 border border-slate-300 rounded-lg"/>
                <button type='button' className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700">
                    {<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>}
                </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ChatPage;