"use client";

import React, { useState } from 'react';
import { GitBranch, Shield, Plus, GitCompare, Clock, User } from 'lucide-react';
import { mockBranches } from '../shared/mockData';

interface BranchManagerProps {
  repositoryId: string;
}

const BranchManager: React.FC<BranchManagerProps> = ({ repositoryId }) => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newBranchName, setNewBranchName] = useState('');
  const [userRole] = useState<'owner' | 'admin' | 'contributor' | 'viewer'>('admin'); // Mock role

  const handleCreateBranch = () => {
    // TODO: Backend integration - Create new branch
    console.log('Creating branch:', newBranchName);
    setNewBranchName('');
    setShowCreateForm(false);
  };

  const canMerge = userRole === 'owner' || userRole === 'admin';

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Branches</h2>
          <p className="text-slate-600 dark:text-slate-400">Manage repository branches and protection rules</p>
        </div>
        <button
          onClick={() => setShowCreateForm(true)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Plus className="w-4 h-4" />
          New Branch
        </button>
      </div>

      {/* Create Branch Form */}
      {showCreateForm && (
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Create New Branch</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Branch Name
              </label>
              <input
                type="text"
                value={newBranchName}
                onChange={(e) => setNewBranchName(e.target.value)}
                placeholder="feature/new-feature"
                className="w-full px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
              />
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleCreateBranch}
                disabled={!newBranchName.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Create Branch
              </button>
              <button
                onClick={() => setShowCreateForm(false)}
                className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Branches List */}
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
        <div className="p-4 border-b border-slate-200 dark:border-slate-700">
          <h3 className="font-semibold text-slate-900 dark:text-white">All Branches ({mockBranches.length})</h3>
        </div>
        <div className="divide-y divide-slate-200 dark:divide-slate-700">
          {mockBranches.map((branch) => (
            <div key={branch.name} className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <GitBranch className="w-4 h-4 text-slate-500" />
                    <span className="font-medium text-slate-900 dark:text-white">{branch.name}</span>
                    {branch.isProtected && (
                      <div className="flex items-center gap-1 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 px-2 py-1 rounded text-xs">
                        <Shield className="w-3 h-3" />
                        Protected
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 px-3 py-1 rounded border border-slate-200 dark:border-slate-600 text-sm">
                    <GitCompare className="w-3 h-3" />
                    Compare
                  </button>
                  {canMerge && !branch.isProtected && (
                    <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors">
                      Merge
                    </button>
                  )}
                </div>
              </div>
              
              {/* Last Commit Info */}
              <div className="mt-3 pl-6">
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  <span className="font-mono text-xs bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">
                    {branch.lastCommit.hash}
                  </span>
                  <span className="ml-2">{branch.lastCommit.message}</span>
                </div>
                <div className="flex items-center gap-4 mt-2 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {branch.lastCommit.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {branch.lastCommit.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Branch Protection Rules */}
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Branch Protection Rules</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
            <div>
              <div className="font-medium text-slate-900 dark:text-white">main</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Require pull request reviews • Dismiss stale reviews • Require status checks
              </div>
            </div>
            <div className="flex items-center gap-1 text-green-600 dark:text-green-400 text-sm">
              <Shield className="w-4 h-4" />
              Protected
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchManager;