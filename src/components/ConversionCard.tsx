'use client';
import { motion } from 'framer-motion';
import { Conversion } from '@/data/conversions';

interface ConversionCardProps {
  conversion: Conversion;
  index: number;
}

export default function ConversionCard({ conversion, index }: ConversionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.3, 
        delay: index * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="glass-card p-4 flex items-center justify-between gap-4"
    >
      {/* Left: Info */}
      <div className="flex-1 min-w-0">
        <h3 className="text-white font-medium text-lg truncate mb-1.5">
          {conversion.name}
        </h3>
      </div>
      
      {/* Right: Extension Number - Large and Clear */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <span className="font-mono text-cyan-400 text-3xl font-bold">
          {conversion.ext}
        </span>
      </div>
    </motion.div>
  );
}
