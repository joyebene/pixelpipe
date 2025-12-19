import { Link2, Lock, Users, LucideIcon } from 'lucide-react';
import { FaCode, FaPalette, FaBug } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface FeatureItemProps {
  icon: LucideIcon;
  color: string;
  title: string;
  description: string;
}

interface TeamCardProps {
  name: string;
  members: number;
  projects: number;
  color: string;
  icon: IconType;
}

const teamFeatures = [
  {
    icon: Users,
    color: 'blue',
    title: 'Team Workspaces',
    description: 'Organize resources by project and control access with role-based permissions'
  },
  {
    icon: Link2,
    color: 'purple',
    title: 'Shareable Links',
    description: "Every resource gets a unique link that's easy to share and access"
  },
  {
    icon: Lock,
    color: 'green',
    title: 'Private by Default',
    description: 'Keep sensitive data secure with workspace-level privacy controls'
  }
];

const teams = [
  { name: 'Engineering Team', members: 12, projects: 3, color: 'blue', icon: FaCode },
  { name: 'Design Team', members: 8, projects: 2, color: 'purple', icon: FaPalette },
  { name: 'QA Team', members: 5, projects: 1, color: 'green', icon: FaBug }
];

const TeamSection = () => {
  const FeatureItem = ({ icon: Icon, color, title, description }: FeatureItemProps) => (
    <li className="flex items-start gap-4">
      <div className={`w-8 h-8 bg-${color}-500/10 border border-${color}-500/20 rounded-lg flex items-center justify-center shrink-0`}>
        <Icon className={`w-4 h-4 text-${color}-400`} />
      </div>
      <div>
        <h4 className="text-white font-semibold mb-1">{title}</h4>
        <p className="text-slate-400 text-sm">{description}</p>
      </div>
    </li>
  );

  const TeamCard = ({ name, members, projects, color, icon: Icon }: TeamCardProps) => (
    <div className="flex items-center gap-3 p-4 bg-slate-900/50 rounded-lg border border-slate-700">
      <div className={`w-10 h-10 bg-${color}-500 rounded-lg flex items-center justify-center`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div className="flex-1">
        <div className="text-white font-medium text-sm">{name}</div>
        <div className="text-slate-400 text-xs">{members} members - {projects} projects</div>
      </div>
    </div>
  );

  return (
    <div id="team" className="py-14 md:py-32 px-6 bg-linear-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Built for teams that move fast
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-8 leading-relaxed">
              Create workspaces, invite team members, and collaborate on every tool. Share images, inboxes, and webhooks with granular permissions.
            </p>
            <ul className="space-y-4">
              {teamFeatures.map((feature, index) => (
                <FeatureItem key={index} {...feature} />
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-purple-500/10 blur-3xl"></div>
            <div className="relative bg-slate-800/50 border border-slate-700 rounded-2xl p-5 sm:p-8">
              <div className="space-y-4">
                {teams.map((team, index) => (
                  <TeamCard key={index} {...team} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;