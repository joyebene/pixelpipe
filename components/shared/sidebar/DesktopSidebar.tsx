"use client";

import { DesktopSidebarProps } from "@/libs/types";
import SidebarNav from "./SidebarNav";



const DesktopSidebar = ({ title, items }: DesktopSidebarProps) => {
  return (
    <aside
      className="
        fixed
        top-16
        left-0
        w-64
        h-[calc(100vh-64px)]
        bg-white
        dark:bg-slate-900
        border-r
        border-slate-200
        dark:border-slate-800
        hidden
        sm:flex
        flex-col
       
      "
    >
      <div className="pt-3 flex-1 overflow-hidden shadow-sm">
        <SidebarNav title={title} items={items} />
      </div>

    </aside>
  );
};


export default DesktopSidebar;
