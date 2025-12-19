"use client";

import React from 'react';
import { DashboardLayout } from '../../../../components/shared';
import Button from '@/components/shared/Button';

const SecretVaultPage = () => {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Secret Vault</h1>
        <p className="text-slate-600 mb-8">Securely store and manage your team&apos;s secrets.</p>

        <div className="bg-white rounded-xl border border-slate-200 p-4 md:p-6 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">Secrets</h2>
            <Button className='bg-slate-800 hover:bg-gray-600 transition-all duration-300 text-sm sm:text-base w-34 sm:w-40'>Add Secret</Button>
          </div>
          <div className="space-y-4">
            {/* Placeholder for secrets */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr className='text-xs sm:text-sm'>
                    <th scope="col" className="px-6 py-3 text-left font-medium text-slate-500 uppercase tracking-wider">Name</th>
                    <th scope="col" className="px-6 py-3 text-left font-medium text-slate-500 uppercase tracking-wider">Last Updated</th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  {/* Placeholder for table rows */}
                  <tr className='text-[13px] sm:test-sm'>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-900">STRIPE_API_KEY</td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-500">1 week ago</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SecretVaultPage;