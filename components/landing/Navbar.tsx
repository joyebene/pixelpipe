"use client";

import Link from 'next/link';
import React from 'react';
import { TbArrowsSplit } from 'react-icons/tb';

const Navbar = () => {
  return (
    <nav className="border-b border-slate-700 bg-slate-950/95 backdrop-blur-sm fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 md:py-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"><TbArrowsSplit size="22" color='lightgreen' /></div>
            <span className="text-lg md:text-xl font-bold text-white">PixelPipe</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => {const el = document.getElementById('team'); if(el) window.scrollTo({top: el.offsetTop - 80, behavior: 'smooth'})}} className="text-slate-300 hover:text-white transition text-sm">Team</button>
            <button onClick={() => {const el = document.getElementById('features'); if(el) window.scrollTo({top: el.offsetTop - 80, behavior: 'smooth'})}} className="text-slate-300 hover:text-white transition text-sm">Features</button>
            <button onClick={() => {const el = document.getElementById('pricing'); if(el) window.scrollTo({top: el.offsetTop - 80, behavior: 'smooth'})}} className="text-slate-300 hover:text-white transition text-sm">Pricing</button>
            <button onClick={() => {const el = document.getElementById('documentation'); if(el) window.scrollTo({top: el.offsetTop - 80, behavior: 'smooth'})}} className="text-slate-300 hover:text-white transition text-sm">Documentation</button>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/signin" className="px-4 py-2 text-slate-300 hover:text-white transition text-sm hidden sm:block">Sign In</Link>
          <Link 
            href="/signup"
            className="p-3 sm:p-4 bg-white hover:bg-slate-100 text-slate-900 rounded-md transition text-xs md:text-sm font-medium"
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;