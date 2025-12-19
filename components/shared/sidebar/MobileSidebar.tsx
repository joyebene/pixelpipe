"use client";


import { useSidebar } from "./SidebarProvider";
import SidebarNav from "./SidebarNav";
import { MobileSidebarProps } from "@/libs/types";
import { TbArrowsSplit } from "react-icons/tb";
import { X } from "lucide-react";



const MobileSidebar = ({ title, items }: MobileSidebarProps) => {
    const { isOpen, close } = useSidebar();


    if (!isOpen) return null;


    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/40 z-40"
                onClick={close}
            />

            {/* Drawer */}
            <aside className="fixed inset-y-0 left-0 w-72 bg-white dark:bg-slate-900 z-50 shadow-xl overflow-auto">
                <div className="flex items-center justify-between px-4 py-5 border-b border-slate-300 fixed w-72 z-10 bg-white">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"><TbArrowsSplit size="22" color='lightgreen' /></div>
                        <span className="font-bold text-lg">PixelPipe</span>
                    </div>

                    <button type="button" onClick={close}>
                        {<X />}
                    </button>
                </div>

                <div className="pt-15 pb-2">
                    <SidebarNav title={title} items={items} onNavigate={close} />
                </div>


            </aside>
        </>
    );
};

export default MobileSidebar;
