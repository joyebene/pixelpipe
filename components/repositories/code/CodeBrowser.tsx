"use client";

import React, { useState } from 'react';
import { File, Folder, FolderOpen, History, Edit3, Eye } from 'lucide-react';
import { mockFileTree } from '../shared/mockData';

interface CodeBrowserProps {
  repositoryId: string;
  branch: string;
}

interface FileNode {
  name: string;
  type: 'file' | 'folder';
  children?: FileNode[];
}

const CodeBrowser: React.FC<CodeBrowserProps> = ({ repositoryId, branch }) => {
  const [selectedFile, setSelectedFile] = useState<string | null>('README.md');
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['src']));
  const [viewMode, setViewMode] = useState<'view' | 'edit'>('view');

  const toggleFolder = (folderPath: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(folderPath)) {
      newExpanded.delete(folderPath);
    } else {
      newExpanded.add(folderPath);
    }
    setExpandedFolders(newExpanded);
  };

  const renderFileTree = (nodes: FileNode[], path = '') => {
    return nodes.map((node) => {
      const fullPath = path ? `${path}/${node.name}` : node.name;
      const isExpanded = expandedFolders.has(fullPath);
      
      return (
        <div key={fullPath}>
          <div
            className={`flex items-center gap-2 px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer rounded ${
              selectedFile === fullPath ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : ''
            }`}
            style={{ paddingLeft: `${(path.split('/').length) * 16 + 8}px` }}
            onClick={() => {
              if (node.type === 'folder') {
                toggleFolder(fullPath);
              } else {
                setSelectedFile(fullPath);
              }
            }}
          >
            {node.type === 'folder' ? (
              isExpanded ? <FolderOpen className="w-4 h-4" /> : <Folder className="w-4 h-4" />
            ) : (
              <File className="w-4 h-4" />
            )}
            <span className="text-sm">{node.name}</span>
          </div>
          {node.type === 'folder' && isExpanded && node.children && (
            <div>
              {renderFileTree(node.children, fullPath)}
            </div>
          )}
        </div>
      );
    });
  };

  const mockFileContent = `# PixelPipe Frontend

A modern developer tools platform built with Next.js and TypeScript.

## Features

- Team-based repository management
- Code browser with syntax highlighting
- Branch management and protection
- Pull request workflows
- Deployment management
- Role-based access control

## Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React Icons

## Backend Integration

This is a UI-only implementation. Backend integration points are marked with comments throughout the codebase.`;

  return (
    <div className="grid grid-cols-12 gap-6 h-150">
      {/* File Tree Sidebar */}
      <div className="col-span-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
        <div className="p-4 border-b border-slate-200 dark:border-slate-700">
          <h3 className="font-semibold text-slate-900 dark:text-white">Files</h3>
        </div>
        <div className="p-2 overflow-y-auto max-h-130">
          {renderFileTree(mockFileTree)}
        </div>
      </div>

      {/* File Viewer/Editor */}
      <div className="col-span-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-2">
            <File className="w-4 h-4" />
            <span className="font-medium text-slate-900 dark:text-white">{selectedFile || 'Select a file'}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('view')}
              className={`p-2 rounded ${viewMode === 'view' ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
            >
              {<Eye className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setViewMode('edit')}
              className={`p-2 rounded ${viewMode === 'edit' ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
            >
              {<Edit3 className="w-4 h-4" />}
            </button>
          </div>
        </div>
        <div className="p-4 overflow-y-auto max-h-130">
          {selectedFile ? (
            viewMode === 'edit' ? (
              <textarea
               aria-label='text-area'
                className="w-full h-full min-h-100 p-4 border border-slate-200 dark:border-slate-600 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-mono text-sm resize-none"
                defaultValue={mockFileContent}
              />
            ) : (
              <pre className="text-sm text-slate-900 dark:text-white font-mono whitespace-pre-wrap">
                {mockFileContent}
              </pre>
            )
          ) : (
            <div className="flex items-center justify-center h-full text-slate-500 dark:text-slate-400">
              Select a file to view its contents
            </div>
          )}
        </div>
      </div>

      {/* Commit History Panel */}
      <div className="col-span-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
        <div className="p-4 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-2">
            <History className="w-4 h-4" />
            <h3 className="font-semibold text-slate-900 dark:text-white">Recent Commits</h3>
          </div>
        </div>
        <div className="p-4 space-y-3 overflow-y-auto max-h-130">
          {[
            { hash: 'a1b2c3d', message: 'feat: add repository dashboard', author: 'john.doe', time: '2h ago' },
            { hash: 'e4f5g6h', message: 'fix: authentication flow', author: 'jane.smith', time: '1d ago' },
            { hash: 'i7j8k9l', message: 'style: update button components', author: 'mike.wilson', time: '2d ago' },
          ].map((commit) => (
            <div key={commit.hash} className="border-l-2 border-blue-200 dark:border-blue-800 pl-3">
              <div className="text-sm font-medium text-slate-900 dark:text-white truncate">
                {commit.message}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {commit.author} • {commit.time}
              </div>
              <div className="text-xs text-slate-400 dark:text-slate-500 font-mono">
                {commit.hash}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodeBrowser;