// Mock data for repositories feature - Replace with actual API calls later

export interface Team {
  id: string;
  name: string;
  avatar: string;
  role: 'owner' | 'admin' | 'contributor' | 'viewer';
}

export interface Repository {
  id: string;
  name: string;
  defaultBranch: string;
  lastUpdated: string;
  visibility: 'team-only' | 'public' | 'private';
  description?: string;
}

export interface Branch {
  name: string;
  isProtected: boolean;
  lastCommit: {
    hash: string;
    message: string;
    author: string;
    date: string;
  };
}

export interface PullRequest {
  id: string;
  title: string;
  description: string;
  sourceBranch: string;
  targetBranch: string;
  status: 'open' | 'merged' | 'closed';
  author: string;
  createdAt: string;
  commits: number;
}

export interface Deployment {
  id: string;
  branch: string;
  environment: 'production' | 'preview';
  status: 'pending' | 'building' | 'success' | 'failed';
  deployedAt: string;
  url?: string;
}

export const mockTeams: readonly Team[] = Object.freeze([
  Object.freeze({ id: '1', name: 'Engineering Team', avatar: 'E', role: 'admin' as const }),
  Object.freeze({ id: '2', name: 'Design Team', avatar: 'D', role: 'contributor' as const }),
  Object.freeze({ id: '3', name: 'Marketing Team', avatar: 'M', role: 'viewer' as const }),
]);

export const mockRepositories: readonly Repository[] = Object.freeze([
  Object.freeze({
    id: '1',
    name: 'pixel-pipe-frontend',
    defaultBranch: 'main',
    lastUpdated: '2 hours ago',
    visibility: 'team-only' as const,
    description: 'Frontend application for PixelPipe platform'
  }),
  Object.freeze({
    id: '2',
    name: 'pixel-pipe-api',
    defaultBranch: 'main',
    lastUpdated: '1 day ago',
    visibility: 'team-only' as const,
    description: 'Backend API services'
  }),
  Object.freeze({
    id: '3',
    name: 'shared-components',
    defaultBranch: 'main',
    lastUpdated: '3 days ago',
    visibility: 'team-only' as const,
    description: 'Reusable UI components library'
  })
]);

export const mockBranches: Branch[] = [
  {
    name: 'main',
    isProtected: true,
    lastCommit: {
      hash: 'a1b2c3d',
      message: 'feat: add repository dashboard',
      author: 'john.doe',
      date: '2 hours ago'
    }
  },
  {
    name: 'feature/auth-system',
    isProtected: false,
    lastCommit: {
      hash: 'e4f5g6h',
      message: 'fix: authentication flow',
      author: 'jane.smith',
      date: '1 day ago'
    }
  },
  {
    name: 'feature/ui-improvements',
    isProtected: false,
    lastCommit: {
      hash: 'i7j8k9l',
      message: 'style: update button components',
      author: 'mike.wilson',
      date: '2 days ago'
    }
  }
];

export const mockPullRequests: PullRequest[] = [
  {
    id: '1',
    title: 'Add user authentication system',
    description: 'Implements JWT-based authentication with role management',
    sourceBranch: 'feature/auth-system',
    targetBranch: 'main',
    status: 'open',
    author: 'jane.smith',
    createdAt: '1 day ago',
    commits: 5
  },
  {
    id: '2',
    title: 'Update UI components',
    description: 'Modernize button and form components with new design system',
    sourceBranch: 'feature/ui-improvements',
    targetBranch: 'main',
    status: 'open',
    author: 'mike.wilson',
    createdAt: '2 days ago',
    commits: 3
  }
];

export const mockDeployments: Deployment[] = [
  {
    id: '1',
    branch: 'main',
    environment: 'production',
    status: 'success',
    deployedAt: '2 hours ago',
    url: 'https://pixelpipe.com'
  },
  {
    id: '2',
    branch: 'feature/auth-system',
    environment: 'preview',
    status: 'building',
    deployedAt: '5 minutes ago',
    url: 'https://auth-preview.pixelpipe.com'
  },
  {
    id: '3',
    branch: 'main',
    environment: 'production',
    status: 'failed',
    deployedAt: '1 day ago'
  }
];


interface FileNode {
  name: string;
  type: 'file' | 'folder';
  children?: FileNode[];
}


export const mockFileTree: FileNode[] = [
  {
    name: 'src',
    type: 'folder',
    children: [
      {
        name: 'components',
        type: 'folder',
        children: [
          { name: 'Button.tsx', type: 'file' },
          { name: 'Input.tsx', type: 'file' },
        ],
      },
      {
        name: 'pages',
        type: 'folder',
        children: [
          { name: 'index.tsx', type: 'file' },
          { name: 'dashboard.tsx', type: 'file' },
        ],
      },
      {
        name: 'utils',
        type: 'folder',
        children: [
          { name: 'auth.ts', type: 'file' },
          { name: 'api.ts', type: 'file' },
        ],
      },
    ],
  },
  { name: 'package.json', type: 'file' },
  { name: 'README.md', type: 'file' },
  { name: '.gitignore', type: 'file' },
];
