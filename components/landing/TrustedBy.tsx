"use client";

import React from 'react';

const TrustedBy = () => {
  const companies = ['Company', 'Startup', 'Tech Inc', 'DevTools', 'BuildCo'];

  return (
    <div className="py-16 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-slate-500 text-sm mb-8">Trusted by developers at</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-50">
          {companies.map((company, i) => (
            <div key={i} className="text-center text-slate-600 font-semibold text-lg">{company}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;