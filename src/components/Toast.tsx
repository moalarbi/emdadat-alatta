'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { useEffect } from 'react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
  type?: 'success' | 'error' | 'info';
}

export default function Toast({ 
  message, 
  isVisible, 
  onClose, 
  duration = 2500,
  type = 'success'
}: ToastProps) {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const icons = {
    success: <Check className="w-5 h-5 text-emerald-400" />,
    error: <X className="w-5 h-5 text-red-400" />,
    info: <div className="w-5 h-5 rounded-full bg-cyan-400/20 flex items-center justify-center">
      <span className="text-cyan-400 text-xs font-bold">i</span>
    </div>,
  };

  const bgColors = {
    success: 'bg-emerald-500/10 border-emerald-500/30',
    error: 'bg-red-500/10 border-red-500/30',
    info: 'bg-cyan-500/10 border-cyan-500/30',
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ 
            type: 'spring', 
            damping: 20, 
            stiffness: 300 
          }}
          className={`
            fixed bottom-24 left-1/2 transform -translate-x-1/2 z-50
            px-5 py-3.5 rounded-2xl backdrop-blur-xl
            border shadow-lg
            flex items-center gap-3
            min-w-[200px] justify-center
            ${bgColors[type]}
          `}
          style={{
            background: 'rgba(5, 11, 26, 0.9)',
          }}
        >
          {icons[type]}
          <span className="text-white font-medium text-sm">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
