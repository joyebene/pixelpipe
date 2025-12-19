"use client";

import React from 'react';
import { DashboardLayout } from '../../../../components/shared';
import Button from '@/components/shared/Button';

const TeamMembersPage = () => {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Team Overview</h1>
        <p className="text-slate-600 mb-8">Manage your team members and their roles.</p>

        <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">Members</h2>
            <Button size='md' className='bg-slate-800 hover:bg-gray-600 transition-all duration-300 text-sm sm:text-base w-40'>
              Invite Member
            </Button>
          </div>


          <div className="space-y-4 mt-4 sm:mt-8">
            {/* Placeholder for team members */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr className='text-xs sm:text-sm'>
                    <th scope="col" className="px-6 py-3 text-left font-medium text-slate-700 uppercase tracking-wider">Name</th>
                    <th scope="col" className="px-6 py-3 text-left font-medium text-slate-700 uppercase tracking-wider">Role</th>
                    <th scope="col" className="px-6 py-3 text-left font-medium text-slate-700 uppercase tracking-wider">Last Active</th>
                    <th scope="col" className="px-6 py-3 text-left  text-slate-700 font-medium uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  {/* Placeholder for table rows */}
                  <tr className='text-[13px] sm:test-sm'>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-900">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full font-medium bg-slate-200"></div>
                            <p>John Doe</p>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-600">Admin</td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-600">2 hours ago</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">View</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 mt-8 shadow-md">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">Group Info</h2>
          <div className="space-y-2 text-sm md:text-base">
            <p><span className="font-semibold text-[15px] md:text-[17px]">Group Name:</span> Pixel Pipe Team</p>
            <p><span className="font-semibold text-[15px] md:text-[17px]">Created:</span> January 1, 2024</p>
            <p><span className="font-semibold text-[15px] md:text-[17px]">Admins:</span> John Doe</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-4 md:p-6 mt-8 shadow-md">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">Rules</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm md:text-base">
            <li>Be respectful to all members.</li>
            <li>No sharing of sensitive information outside the team.</li>
            <li>All code pushed to shared repositories must be reviewed.</li>
            <li>Keep the environment variables and secrets up to date.</li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TeamMembersPage;