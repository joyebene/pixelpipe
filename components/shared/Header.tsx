"use client";

import React, { useState, useCallback, useMemo } from 'react';
import { User, Settings, LogOut, ChevronDown, Plus, Users, Shield, Database } from 'lucide-react';
import { useWorkspace } from './WorkspaceProvider';
import { TbArrowsSplit } from 'react-icons/tb';
import { RxHamburgerMenu } from 'react-icons/rx';


interface HeaderProps {
  onMenuClick: () => void;
}

const Header = React.memo(({ onMenuClick }: HeaderProps) => {
  const [showWorkspaceMenu, setShowWorkspaceMenu] = useState(false);
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { currentWorkspace, setCurrentWorkspace } = useWorkspace();

  const workspaces = useMemo(() => [
    { id: 'personal', name: 'Personal', type: 'personal' },
    { id: 'team1', name: 'Team Alpha', type: 'team' },
    { id: 'team2', name: 'Dev Squad', type: 'team' },
  ], []);

  const toggleWorkspaceMenu = useCallback(() => {
    setShowWorkspaceMenu(prev => !prev);
  }, []);

  const handleWorkspaceChange = useCallback((workspace: string) => {
    setCurrentWorkspace(workspace);
    setShowWorkspaceMenu(false);
  }, [setCurrentWorkspace]);

  const toggleSettingsMenu = useCallback(() => {
    setShowSettingsMenu(prev => !prev);
  }, []);

  const toggleUserMenu = useCallback(() => {
    setShowUserMenu(prev => !prev);
  }, []);

  return (
    <header className="bg-white dark:bg-slate-900 border-b border-slate-300 dark:border-slate-700 px-6 py-5 sm:py-6 w-full fixed z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"><TbArrowsSplit size="22" color='lightgreen' /></div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">PixelPipe</h1>
        </div>

        {/* right side menu */}
        <div className="flex items-center gap-1 sm:gap-3 md:gap-6 justify-end w-full">
          <div className="relative">
            <button
              onClick={toggleWorkspaceMenu}
              className="flex items-center gap-2 px-3 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors border border-slate-200 dark:border-slate-700 shadow-sm"
            >
              <span className="text-xs md:text-sm font-medium">{currentWorkspace}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {showWorkspaceMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg z-50">
                {workspaces.map((workspace) => (
                  <button
                    key={workspace.id}
                    onClick={() => handleWorkspaceChange(workspace.name)}
                    className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors ${currentWorkspace === workspace.name ? 'text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-300'
                      }`}
                  >
                    <span>{workspace.name}</span>
                    {workspace.type === 'team' && <span className="text-xs bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded">Team</span>}
                  </button>
                ))}
                <div className="border-t border-slate-200 dark:border-slate-700 mt-1 pt-1">
                  <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                    <Plus className="w-4 h-4" />
                    Create team
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={toggleSettingsMenu}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors hidden sm:block"
            >
              {<Settings className="w-5 h-5" />}
            </button>
            {showSettingsMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg z-50">
                <div className="p-2">
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors">
                    <Users className="w-4 h-4" />
                    <span>Team Members</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors">
                    <Shield className="w-4 h-4" />
                    <span>Secret Vault</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors">
                    <Database className="w-4 h-4" />
                    <span>Team Database</span>
                  </button>
                  <div className="border-t border-slate-200 dark:border-slate-700 my-2"></div>
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors">
                    <Settings className="w-4 h-4" />
                    <span>General Settings</span>
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={toggleUserMenu}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors hidden sm:block"
            >
              {<User className="w-5 h-5" />}
            </button>
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg z-50">
                <div className="p-2">
                  <div className="px-3 py-2 text-sm text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700 mb-2">
                    <div className="font-medium">John Doe</div>
                    <div className="text-xs">john@example.com</div>
                  </div>
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors">
                    <User className="w-4 h-4" />
                    <span>Profile</span>
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className='hidden sm:block'>
            <button type='button' className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-2 border border-slate-200 text-sm shadow-sm                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ">
            {<LogOut className="w-5 h-5" color='red' />} Log out
          </button>
          </div>
          
          <button onClick={onMenuClick} className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors sm:hidden" aria-label='Open menu'>
            {<RxHamburgerMenu className="w-8 h-8" />}
          </button>
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;    