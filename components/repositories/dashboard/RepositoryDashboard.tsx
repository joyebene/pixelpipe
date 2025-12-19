"use client";

import React, { useState, useMemo, memo } from 'react';
import { Plus, GitBranch, Clock, Lock, Users, Search } from 'lucide-react';
import { mockRepositories, mockTeams } from '../shared/mockData';
import Link from 'next/link';
import Button from '@/components/shared/Button';

const RepositoryDashboard = memo(() => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('all');

  const filteredRepos = useMemo(() =>
    mockRepositories.filter(repo =>
      repo.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedTeam === 'all' || repo.visibility === 'team-only')
    ), [searchTerm, selectedTeam]
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Repositories</h1>
          <p className="text-slate-600 dark:text-slate-400">Manage your team&apos;s code repositories</p>
        </div>
        <Button className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white transition-colors text-sm w-50">
          <Plus className="w-4 h-4" />
          New Repo<span className='hidden sm:block m-0 p-0'>sitory</span>
        </Button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="flex-1 relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search repositories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 shadow-xs"
          />
        </div>
        <select
          aria-label='select-option'
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
          className="px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs"
        >
          <option value="all">All Teams</option>
          {mockTeams.map(team => (
            <option key={team.id} value={team.id}>{team.name}</option>
          ))}
        </select>
      </div>

      {/* Repository Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRepos.map((repo) => (
          <Link
            key={repo.id}
            href={`/repositories/${repo.id}`}
            className="block bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6 hover:border-blue-300 dark:hover:border-blue-600 transition-colors group shadow-md"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {repo.name}
              </h3>
              <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">
                <Lock className="w-3 h-3" />
                {repo.visibility}
              </div>
            </div>

            {repo.description && (
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                {repo.description}
              </p>
            )}

            <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1">
                <GitBranch className="w-4 h-4" />
                {repo.defaultBranch}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {repo.lastUpdated}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredRepos.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">No repositories found</h3>
          <p className="text-slate-600 dark:text-slate-400">Try adjusting your search or create a new repository.</p>
        </div>
      )}
    </div>
  );
});

RepositoryDashboard.displayName = 'RepositoryDashboard';

export default RepositoryDashboard;