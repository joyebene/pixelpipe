"use client";

import React from 'react';
import { DashboardLayout } from '../../../components/shared';
import RepositoryDashboard from '../../../components/repositories/dashboard/RepositoryDashboard';

const RepositoriesPage = () => {
  return (
    <DashboardLayout>
      <RepositoryDashboard />
    </DashboardLayout>
  );
};

export default RepositoriesPage;