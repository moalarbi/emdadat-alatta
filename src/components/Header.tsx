'use client';

import { motion } from 'framer-motion';
import { Zap, Phone } from 'lucide-react';

interface HeaderProps {
  onQuickActionsClick: () => void;
}

export default function Header({ onQuickActionsClick }: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="sticky top-0 z-40 w-full safe-area-top"
    >
      <div className="glass-card rounded-none border-x-0 border-t-0 border-b border-white/10 bg-navy-900/80 backdrop-blur-xl">
        <div className="flex items-center justify-between h-14 px-4 max-w-7xl mx-auto">
          {/* Left: Logo + Brand */}
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 flex-shrink-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 flex items-center justify-center border border-cyan-400/30">
              <Phone className="w-4 h-4 text-cyan-400" />
            </div>
            <span className="text-sm font-semibold text-white hidden sm:block">
              EMDADAT ALATTA
            </span>
          </div>

          {/* Center: Title */}
          <h1 className="text-base font-medium text-white/90 absolute left-1/2 transform -translate-x-1/2">
            دليل التحويلات
          </h1>

          {/* Right: Quick Actions Button */}
          <button
            onClick={onQuickActionsClick}
            className="w-10 h-10 rounded-full glass-button flex items-center justify-center"
            aria-label="الإجراءات السريعة"
          >
            <Zap className="w-5 h-5 text-cyan-400" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
