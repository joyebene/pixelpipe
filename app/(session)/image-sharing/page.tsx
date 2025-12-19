"use client";

import React from 'react';
import { Upload, Link2, Globe, Lock, ImageDown } from 'lucide-react';
import { DashboardLayout } from '@/components/shared';
import Button from '@/components/shared/Button';
import Link from 'next/link';

const ImageSharingPage = () => {
  const recentImages = [
    { id: 1, name: 'screenshot-2024.png', url: '/i/abc123', visibility: 'public', created: '2 hours ago' },
    { id: 2, name: 'design-mockup.jpg', url: '/i/def456', visibility: 'private', created: '5 hours ago' },
    { id: 3, name: 'error-log.png', url: '/i/ghi789', visibility: 'public', created: '1 day ago' }
  ];

  return (
    <DashboardLayout>
      <div className="mb-8">
        <div className='flex items-center justify-between'>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Image Sharing</h1>
          <Button size="md" className='w-50 bg-blue-600 hover:bg-gray-500 transition-all duration-300 flex items-center justify-center gap-4 text-sm sm:text-base'>
            <Upload className="w-5 h-5 sm:w-6 sm:h-6" />
            Upload Image
          </Button>

        </div>

        <p className="text-slate-600">Upload and share images instantly with unique links</p>

      </div>

      <div className="bg-white rounded-xl border-2 border-dashed border-slate-300 p-12 mb-8 text-center hover:border-blue-400 transition cursor-pointer">
        <Upload className="w-10 h-10 md:w-12 md:h-12 text-slate-400 mx-auto mb-4" />
        <p className="text-slate-900 font-medium mb-1">Drop your images here</p>
        <p className="text-sm text-slate-500">or click to browse (PNG, JPG up to 10MB)</p>
      </div>

      <div className='pt-6 sm:pt-10'>
        <div className='flex items-center justify-between mb-2'>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Recent Images</h2>
          <Link href="/image-sharing/all" className='text-sm sm:text-base underline text-green-600'>
            View All
           </Link>
        </div>
        
        <div className="space-y-3">
          {recentImages.map(img => (
            <div key={img.id} className="bg-white rounded-lg border border-slate-200 p-4 sm:p-6 flex flex-col shadow-md">
               <div className="flex items-center gap-2 justify-end">
                {img.visibility === 'public' ? (
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] sm:text-xs font-medium rounded flex items-center gap-1">
                    <Globe className="w-3 h-3" />
                    Pub
                  </span>
                ) : (
                  <span className="px-2 py-1 bg-red-100 text-slate-700 font-medium rounded flex items-center gap-1 text-[10px] sm:text-xs">
                    <Lock className="w-3 h-3" />
                    Priv
                  </span>
                )}
              </div>
              <div className='flex items-center gap-4'>
              <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center">
                <ImageDown className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400" />
              </div>
              <div className="flex-1">
                <div className="text-sm md:text-base font-medium text-slate-900">{img.name}</div>
                <div className="text-xs sm:text-sm text-slate-500 mt-1">{img.created}</div>
              </div>

              <button className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded font-medium transition flex items-center gap-1 text-xs sm:text-sm">
                <Link2 className="w-3 h-3 sm:w-4 sm:h-4" />
                Copy
              </button>
            </div>
             </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ImageSharingPage;
