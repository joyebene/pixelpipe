
import React from 'react';
import { DashboardLayout } from '../../../../components/shared';
import RepositoryDashboard from '@/components/repositories/dashboard/RepositoryDashboard';


const TeamPage = () => {
  return (
    <DashboardLayout>
      <RepositoryDashboard />
    </DashboardLayout>
  );
};

export default TeamPage;