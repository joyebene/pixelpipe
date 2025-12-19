"use client";

import React from 'react';
import { DashboardLayout } from '../../../../components/shared';
import RepositoryDetail from '../../../../components/repositories/detail/RepositoryDetail';
import { useParams } from 'next/navigation';

const RepositoryDetailPage = () => {
  const {id} = useParams<{id: string}>();
  
  return (
    <DashboardLayout>
      <RepositoryDetail repositoryId={id} />
    </DashboardLayout>
  );
};

export default RepositoryDetailPage;