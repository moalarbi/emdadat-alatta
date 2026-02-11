'use client';

import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface FloatingActionButtonProps {
  onClick: () => void;
}

export default function FloatingActionButton({ onClick }: FloatingActionButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        type: 'spring',
        damping: 15,
        stiffness: 200,
        delay: 0.5
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="
        fixed bottom-6 right-6 z-40
        w-14 h-14 rounded-full
        bg-gradient-to-br from-cyan-400 to-cyan-600
        shadow-lg shadow-cyan-500/30
        flex items-center justify-center
        border border-cyan-400/50
      "
      aria-label="الإجراءات السريعة"
    >
      <Zap className="w-6 h-6 text-white" />
    </motion.button>
  );
}
