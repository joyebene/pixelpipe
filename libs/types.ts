import { LucideIcon } from "lucide-react";


// Dashboard Navigation
export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

export interface MobileSidebarProps {
  title: string;
  items: readonly NavItem[];
}

export interface DesktopSidebarProps {
  title: string;
  items: readonly NavItem[];
}



export interface SidebarNavProps {
  title: string;
  items: readonly NavItem[];
  onNavigate?: () => void;
}



// Activity
export type ActivityColor = "blue" | "purple" | "green" | "slate";

export type Activity = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  time: string;
  color?: ActivityColor;
};

export type RecentActivityProps = {
  activities: Activity[];
};
