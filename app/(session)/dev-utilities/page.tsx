"use client";

import React from 'react';
import { Code } from 'lucide-react';
import { DashboardLayout } from '@/components/shared';

const DevUtilitiesPage = () => {
  const utilities = ['JSON Formatter', 'JWT Decoder', 'Base64 Encoder', 'Hash Generator', 'Regex Tester', 'Color Converter'];

  return (
    <DashboardLayout>
      <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Developer Utilities</h1>
      <p className="text-slate-600 mb-8">Quick tools for everyday development tasks</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {utilities.map((util, i) => (
          <div key={i} className="bg-white rounded-xl border border-slate-200 p-6 hover:border-slate-300 transition cursor-pointer shadow-md">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
              <Code className="w-5 h-5 text-orange-600" />
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-slate-900">{util}</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Quick and simple utility tool</p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default DevUtilitiesPage;
