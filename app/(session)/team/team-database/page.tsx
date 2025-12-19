"use client";

import React from 'react';
import { DashboardLayout } from '../../../../components/shared';
import MetricCard from '@/components/shared/MetricBox';

const TeamDatabasePage = () => {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Team Database</h1>
        <p className="text-slate-600 mb-8">Manage your team&apos;s shared database.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 py-4 sm:py-6 rounded-xl border-slate-200">
          <MetricCard
            label="Total Records"
            value="2,543"
            subText="↑ 5% this week"
            trend="up"
          />
          <MetricCard
            label="Active Connections"
            value="3"
            subText="From 2 locations"
            trend="neutral"
          />
          <MetricCard
            label="Queries Performed"
            value="15,201"
            subText="↓ 2% this week"
            trend="down"
          />
          <MetricCard
            label="Storage Used"
            value="78%"
            subText="2.2 GB remaining"
            trend="neutral"
          />
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 shadow-md">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4">Database Entries</h2>
          <div className="space-y-4">
            {/* Placeholder for table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr className='text-xs sm:text-sm'>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Value</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Last Updated</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  {/* Placeholder for table rows */}
                  <tr className='text-[13px] sm:test-sm'>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-500">1</td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-900">API_KEY</td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-500">**********</td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-500">2 hours ago</td>
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

export default TeamDatabasePage;