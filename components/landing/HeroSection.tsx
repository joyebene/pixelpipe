"use client";

import React from 'react';
import Button from '../shared/Button';
import Image from 'next/image';

const images = [
  "/landing-img/img1.png",
  "/landing-img/img2.png",
  "/landing-img/img3.png",
  "/landing-img/img4.png",
  // "/landing-img/img5.png",
  // "/landing-img/img6.png",
];


const HeroSection = () => {
  return (
    <div className=" pt-28 sm:pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-green-400 text-sm mb-4 md:mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Now with real-time webhook inspection
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            The platform where<br />developers <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-green-800">build together</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
            Ship faster with instant image sharing, temporary email testing, webhook inspection, and essential dev utilities. Everything you need in one powerful platform.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button href="/signin"
              className="px-4 md:px-6 py-3 md:py-4 hover:bg-green-700 text-white rounded-lg text-sm sm:text-base font-semibold transition shadow-xl shadow-blue-500/20"
            >
              Start building for free
            </Button>
            <Button
              href="/signin"
              className="px-4 md:px-6 py-3 md:py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm sm:text-base font-semibold transition border border-slate-700"
            >
              View documentation
            </Button>
          </div>
          <p className="text-slate-500 text-sm mt-5">Free for individuals. No credit card required.</p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 to-purple-500/20 blur-3xl"></div>
          <div className="relative bg-slate-900 rounded-xl border border-slate-800 p-1 shadow-2xl">
            <div className="bg-slate-950 rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800">
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
              </div>
             <div className="p-8 grid grid-cols-2 gap-4">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="relative h-24 sm:h-36 md:h-48 bg-slate-800/50 rounded-lg border border-slate-700/50 overflow-hidden"
                >
                  <Image
                    src={src}
                    alt={`Landing preview ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index < 3}
                  />
                </div>
              ))}
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;