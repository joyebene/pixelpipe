"use client";

import React, { useState } from 'react';
import { GitBranch, Settings, Code, GitPullRequest, Rocket, ChevronDown } from 'lucide-react';
import { mockRepositories, mockBranches } from '../shared/mockData';
import CodeBrowser from '../code/CodeBrowser';
import BranchManager from '../branches/BranchManager';
import PullRequestList from '../pull-requests/PullRequestList';
import DeploymentManager from '../deployments/DeploymentManager';

interface RepositoryDetailProps {
  repositoryId: string;
}

const RepositoryDetail: React.FC<RepositoryDetailProps> = ({ repositoryId }) => {
  const [activeTab, setActiveTab] = useState('code');
  const [activeBranch, setActiveBranch] = useState('main');
  
  const repository = mockRepositories.find(repo => repo.id === repositoryId);
  
  
  if (!repository) {
    return <div>Repository not found</div>;
  }

  const tabs = [
    { id: 'code', label: 'Code', icon: Code },
    { id: 'branches', label: 'Branches', icon: GitBranch },
    { id: 'pull-requests', label: 'Pull Requests', icon: GitPullRequest },
    { id: 'deployments', label: 'Deployments', icon: Rocket },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{repository.name}</h1>
          <p className="text-slate-600 dark:text-slate-400">{repository.description}</p>
        </div>
        
        {/* Branch Switcher */}
        <div className="relative">
          <button className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            <GitBranch className="w-4 h-4" />
            <span className="text-sm font-medium">{activeBranch}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-slate-200 dark:border-slate-700">
        <nav className="flex space-x-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="min-h-150">
        {activeTab === 'code' && <CodeBrowser repositoryId={repositoryId} branch={activeBranch} />}
        {activeTab === 'branches' && <BranchManager repositoryId={repositoryId} />}
        {activeTab === 'pull-requests' && <PullRequestList repositoryId={repositoryId} />}
        {activeTab === 'deployments' && <DeploymentManager repositoryId={repositoryId} />}
        {activeTab === 'settings' && (
          <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Repository Settings</h3>
            <p className="text-slate-600 dark:text-slate-400">Settings panel - Backend integration needed</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RepositoryDetail;