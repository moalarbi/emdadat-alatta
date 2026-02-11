'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Conversion } from '@/data/conversions';

interface ConversionCardProps {
  conversion: Conversion;
  index: number;
}

const ConversionCard: React.FC<ConversionCardProps> = ({ conversion, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="glass-card p-5 flex items-center justify-between hover:bg-white/5 transition-colors border border-white/5"
    >
      <div className="flex flex-col">
        <span className="text-lg font-bold text-white mb-1">
          {conversion.name}
        </span>
      </div>
      
      <div className="flex items-center">
        <span className="text-3xl font-mono font-bold text-cyan-400">
          {conversion.ext}
        </span>
      </div>
    </motion.div>
  );
};

export default ConversionCard;
