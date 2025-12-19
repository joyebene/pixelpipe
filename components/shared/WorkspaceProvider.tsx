"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface WorkspaceContextType {
  currentWorkspace: string;
  setCurrentWorkspace: (workspace: string) => void;
  isTeamWorkspace: boolean;
}

const WorkspaceContext = createContext<WorkspaceContextType | undefined>(undefined);

export const useWorkspace = () => {
  const context = useContext(WorkspaceContext);
  if (!context) {
    throw new Error('useWorkspace must be used within a WorkspaceProvider');
  }
  return context;
};

interface WorkspaceProviderProps {
  children: ReactNode;
}

export const WorkspaceProvider = ({ children }: WorkspaceProviderProps) => {
  const [currentWorkspace, setCurrentWorkspace] = useState('Personal');
  const isTeamWorkspace = currentWorkspace !== 'Personal';

  return (
    <WorkspaceContext.Provider value={{
      currentWorkspace,
      setCurrentWorkspace,
      isTeamWorkspace,
    }}>
      {children}
    </WorkspaceContext.Provider>
  );
};