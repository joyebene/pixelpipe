"use client";

import React from 'react';
import { DashboardLayout } from '../../../components/shared';
import MetricCard from '@/components/shared/MetricBox';
import RecentActivity from '@/components/shared/RecentActivity';
import { activities } from '@/libs/data';




const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Dashboard</h1>
        <p className="text-slate-600 mb-8 ">Welcome back! Here&apos;s what&apos;s happening with your tools.</p>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 py-4 sm:py-6 rounded-xl border-slate-200">
          
            <MetricCard
              label="Images Shared"
              value="147"
              subText="↑ 12% this week"
              trend="up"
            />

            <MetricCard
              label="Active Inboxes"
              value="5"
              subText="2 emails received"
              trend="neutral"
            />

            <MetricCard
              label="Webhook Hits"
              value="1.2K"
              subText="↑ 23% this week"
              trend="up"
            />

            <MetricCard
              label="Team Members"
              value="1"
              subText="Upgrade to add more"
              trend="neutral"
            />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-md">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Recent Activity</h2>
            <div className="space-y-4">
             <RecentActivity activities={activities} />
            </div>
          </div>
        </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
