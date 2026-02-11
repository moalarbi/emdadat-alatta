'use client';

import React from 'react';
import { Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-navy-900/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
            <Phone className="w-4 h-4 text-cyan-400" />
          </div>
          <span className="font-bold text-white tracking-tight">EMDADAT ALATTA</span>
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2 hidden sm:block">
          <span className="text-white/80 font-medium">دليل التحويلات</span>
        </div>
        
        <div className="w-8" /> {/* Spacer for centering */}
      </div>
    </header>
  );
};

export default Header;
