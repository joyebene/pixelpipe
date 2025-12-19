"use client";

import React, { useState } from 'react';
import { GitPullRequest, MessageSquare, GitCommit, Clock, User, CheckCircle, XCircle } from 'lucide-react';
import { mockPullRequests } from '../shared/mockData';

interface PullRequestListProps {
  repositoryId: string;
}

const PullRequestList: React.FC<PullRequestListProps> = ({ repositoryId }) => {
  const [filter, setFilter] = useState<'all' | 'open' | 'merged' | 'closed'>('open');

  const filteredPRs = mockPullRequests.filter(pr => 
    filter === 'all' || pr.status === filter
  );

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'open':
        return <GitPullRequest className="w-4 h-4 text-green-600" />;
      case 'merged':
        return <CheckCircle className="w-4 h-4 text-purple-600" />;
      case 'closed':
        return <XCircle className="w-4 h-4 text-red-600" />;
      default:
        return <GitPullRequest className="w-4 h-4 text-slate-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'merged':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      case 'closed':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default:
        return 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Pull Requests</h2>
          <p className="text-slate-600 dark:text-slate-400">Review and manage code changes</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
          New Pull Request
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2">
        {(['all', 'open', 'merged', 'closed'] as const).map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
              filter === status
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Pull Requests List */}
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
        {filteredPRs.length === 0 ? (
          <div className="p-8 text-center">
            <GitPullRequest className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">No pull requests</h3>
            <p className="text-slate-600 dark:text-slate-400">
              {filter === 'open' ? 'No open pull requests found.' : `No ${filter} pull requests found.`}
            </p>
          </div>
        ) : (
          <div className="divide-y divide-slate-200 dark:divide-slate-700">
            {filteredPRs.map((pr) => (
              <div key={pr.id} className="p-6 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    {getStatusIcon(pr.status)}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-medium text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
                        {pr.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(pr.status)}`}>
                        {pr.status}
                      </span>
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-400 mb-3">
                      {pr.description}
                    </p>
                    
                    <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {pr.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {pr.createdAt}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitCommit className="w-4 h-4" />
                        {pr.commits} commits
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mt-3">
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        <span className="font-mono bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-xs">
                          {pr.sourceBranch}
                        </span>
                        <span className="mx-2">→</span>
                        <span className="font-mono bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-xs">
                          {pr.targetBranch}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 px-3 py-1 rounded border border-slate-200 dark:border-slate-600 text-sm">
                      <MessageSquare className="w-3 h-3" />
                      Review
                    </button>
                    {pr.status === 'open' && (
                      <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors">
                        Merge
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PullRequestList;