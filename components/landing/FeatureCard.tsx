"use client";

import React from 'react';
import { LucideIcon } from 'lucide-react';
import { BsCheck } from 'react-icons/bs';

interface FeatureCardProps {
  icon: LucideIcon;
  iconColor: 'blue' | 'purple' | 'green' | 'orange';
  title: string;
  description: string;
  features: string[];
}

const colorVariants = {
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400' },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400' },
  green: { bg: 'bg-green-500/10', border: 'border-green-500/20', text: 'text-green-400' },
  orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/20', text: 'text-orange-400' }
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, iconColor, title, description, features }) => {
  const colors = colorVariants[iconColor];
  
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition">
      <div className={`w-12 h-12 ${colors.bg} border ${colors.border} rounded-xl flex items-center justify-center mb-6`}>
        <Icon className={`w-6 h-6 ${colors.text}`} />
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-slate-400 mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-slate-300">
            <span className="text-green-400 mt-1"><BsCheck size={24} /> </span>
            <span className="text-sm sm:text-base">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureCard;