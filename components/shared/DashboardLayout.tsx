"use client";

import React, { useMemo } from "react";
import Header from "./Header";
import DesktopSidebar from "./sidebar/DesktopSidebar";
import MobileSidebar from "./sidebar/MobileSidebar";
import { useWorkspace } from "./WorkspaceProvider";
import { SidebarProvider, useSidebar } from "./sidebar/SidebarProvider"; // import both provider and hook
import { NavItem } from "@/libs/types";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Webhook, Mail, Image, Wrench, Users, Key, Database, GitBranch, Shield, MessageSquare } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

// Nav items definitions (same as before)
const personalNavItems: readonly NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/webhook", label: "Webhook Inspector", icon: Webhook },
  { href: "/temp-email", label: "Temp Email", icon: Mail },
  { href: "/image-sharing", label: "Image Sharing", icon: Image },
  { href: "/dev-utilities", label: "Dev Utilities", icon: Wrench },
] as const;

const teamNavItems: readonly NavItem[] = [
  ...personalNavItems ,
  { href: "/team/team-hub", label: "Team Hub", icon: Users },
  { href: "/team/chat", label: "Team Chat", icon: MessageSquare },
  { href: "/team/env-room", label: "Env Room", icon: Key },
  { href: "/team/shared-repos", label: "Shared Repos", icon: GitBranch },
  { href: "/team/secret-vault", label: "Secrets Vault", icon: Shield },
  { href: "/team/team-database", label: "Team Database", icon: Database },
] as const;

// Inner component that uses the sidebar context
const DashboardLayoutContent = React.memo(({ children }: DashboardLayoutProps) => {
  const pathname = usePathname();
  const { currentWorkspace, isTeamWorkspace } = useWorkspace();
  const { toggle } = useSidebar();

  const navItems = isTeamWorkspace ? teamNavItems : personalNavItems;
  const workspaceTitle = isTeamWorkspace ? currentWorkspace : "My Toolkits";

  const navigationItems = useMemo(
    () =>
      navItems.map((item) => ({
        ...item,
        isActive: pathname === item.href,
      })),
    [pathname, navItems]
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header onMenuClick={toggle} />

      {/* Mobile Sidebar (drawer) */}
      <MobileSidebar title={workspaceTitle} items={navigationItems} />

      <div className="sm:flex pt-20">
        {/* Desktop Sidebar (visible on sm and up) */}
        <DesktopSidebar title={workspaceTitle} items={navigationItems} />

        <main className="flex-1 p-6 bg-slate-50 dark:bg-slate-950 md:p-12 sm:ml-64">{children}</main>
      </div>
    </div>
  );
});
DashboardLayoutContent.displayName = "DashboardLayoutContent";

// Outer component that wraps the inner one with SidebarProvider
const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <SidebarProvider>
      <DashboardLayoutContent>{children}</DashboardLayoutContent>
    </SidebarProvider>
  );
};

export default React.memo(DashboardLayout);
