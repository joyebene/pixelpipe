"use client";

import React, { useState } from 'react';
import { Rocket, Globe, AlertCircle, CheckCircle, Clock, ExternalLink, GitBranch } from 'lucide-react';
import { mockDeployments } from '../shared/mockData';

interface DeploymentManagerProps {
  repositoryId: string;
}

const DeploymentManager: React.FC<DeploymentManagerProps> = ({ repositoryId }) => {
  const [selectedEnvironment, setSelectedEnvironment] = useState<'all' | 'production' | 'preview'>('all');

  const filteredDeployments = mockDeployments.filter(deployment => 
    selectedEnvironment === 'all' || deployment.environment === selectedEnvironment
  );

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'failed':
        return <AlertCircle className="w-4 h-4 text-red-600" />;
      case 'building':
        return <Clock className="w-4 h-4 text-yellow-600 animate-spin" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-slate-500" />;
      default:
        return <Clock className="w-4 h-4 text-slate-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'failed':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'building':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'pending':
        return 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300';
      default:
        return 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300';
    }
  };

  const getEnvironmentIcon = (environment: string) => {
    return environment === 'production' ? (
      <Globe className="w-4 h-4 text-blue-600" />
    ) : (
      <Rocket className="w-4 h-4 text-purple-600" />
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Deployments</h2>
          <p className="text-slate-600 dark:text-slate-400">Monitor and manage application deployments</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
          Deploy Now
        </button>
      </div>

      {/* Environment Filters */}
      <div className="flex items-center gap-2">
        {(['all', 'production', 'preview'] as const).map((env) => (
          <button
            key={env}
            onClick={() => setSelectedEnvironment(env)}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
              selectedEnvironment === env
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            {env.charAt(0).toUpperCase() + env.slice(1)}
          </button>
        ))}
      </div>

      {/* Deployment Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">2</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Successful</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg">
              <Clock className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">1</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Building</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg">
              <AlertCircle className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">1</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Failed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Deployments List */}
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
        <div className="p-4 border-b border-slate-200 dark:border-slate-700">
          <h3 className="font-semibold text-slate-900 dark:text-white">Recent Deployments</h3>
        </div>
        
        {filteredDeployments.length === 0 ? (
          <div className="p-8 text-center">
            <Rocket className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">No deployments</h3>
            <p className="text-slate-600 dark:text-slate-400">
              No deployments found for the selected environment.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-slate-200 dark:divide-slate-700">
            {filteredDeployments.map((deployment) => (
              <div key={deployment.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      {getEnvironmentIcon(deployment.environment)}
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-slate-900 dark:text-white capitalize">
                            {deployment.environment}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(deployment.status)}`}>
                            {deployment.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-sm text-slate-600 dark:text-slate-400">
                          <GitBranch className="w-3 h-3" />
                          <span className="font-mono bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-xs">
                            {deployment.branch}
                          </span>
                          <span>•</span>
                          <span>{deployment.deployedAt}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      {getStatusIcon(deployment.status)}
                    </div>
                    
                    {deployment.url && deployment.status === 'success' && (
                      <a
                        href={deployment.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Visit
                      </a>
                    )}
                    
                    <button className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 px-3 py-1 rounded border border-slate-200 dark:border-slate-600 text-sm">
                      View Logs
                    </button>
                  </div>
                </div>
                
                {deployment.status === 'building' && (
                  <div className="mt-3 ml-6">
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Building... This may take a few minutes
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Deployment Settings */}
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Deployment Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
            <div>
              <div className="font-medium text-slate-900 dark:text-white">Auto-deploy from main</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Automatically deploy to production when changes are pushed to main branch
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
            <div>
              <div className="font-medium text-slate-900 dark:text-white">Preview deployments</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Create preview deployments for pull requests
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeploymentManager;