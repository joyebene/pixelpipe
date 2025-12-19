"use client";

import { SidebarNavProps } from "@/libs/types";
import { LogOut, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarNav = ({ title, items, onNavigate }: SidebarNavProps) => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col h-full p-3">
      {/* Workspace Title */}
      <div className="px-3 py-2 pt-5 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
        {title}
      </div>

      
      <div className="flex-1 overflow-y-auto space-y-1 pr-1">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={`group flex items-center gap-3 px-4 py-3 md:py-4 text-sm font-medium rounded-md transition ${
                isActive
                  ? "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border-r-2 border-green-500 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-green-500" : ""}`} />
              {item.label}
            </Link>
          );
        })}
      </div>


      <div className="mt-auto border-t border-slate-200 dark:border-slate-800 pt-3">
        <div className="px-3 py-2 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
          Settings
        </div>

        <div className="space-y-1">
          <Link
            href="/profile"
            onClick={onNavigate}
            className={`group flex items-center gap-3 px-4 py-3 rounded-md ${
              pathname === "/profile"
                ? "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border-r-2 border-green-500"
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
            }`}
          >
            <User className={`w-5 h-5 ${pathname === "/profile" && "text-green-500"}`} />
            Profile
          </Link>

          <Link
            href="/login"
            onClick={onNavigate}
            className="group flex items-center gap-3 px-4 py-3 rounded-md bg-gray-100 border border-red-300 sm:hidden"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SidebarNav;
