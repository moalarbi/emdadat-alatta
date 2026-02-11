'use client';

import { motion } from 'framer-motion';
import { Copy, Phone, Check } from 'lucide-react';
import { Conversion } from '@/data/conversions';
import { useState } from 'react';

interface ConversionCardProps {
  conversion: Conversion;
  onCopy: (ext: number) => void;
  index: number;
}

export default function ConversionCard({ conversion, onCopy, index }: ConversionCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(conversion.ext.toString());
      setCopied(true);
      onCopy(conversion.ext);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleCall = () => {
    window.location.href = `tel:${conversion.ext}`;
  };

  const isMaliya = conversion.dept === 'المالية';

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
        <h3 className="text-white font-medium text-base truncate mb-1.5">
          {conversion.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className={`
            text-xs px-2 py-0.5 rounded-full font-medium
            ${isMaliya ? 'badge-maliya' : 'badge-hr'}
          `}>
            {conversion.dept}
          </span>
          <span className="font-mono text-cyan-400 text-sm">
            {conversion.ext}
          </span>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <button
          onClick={handleCopy}
          className={`
            glass-button w-11 h-11 rounded-xl p-0
            ${copied ? 'glass-button-primary' : ''}
          `}
          aria-label={`نسخ الرقم ${conversion.ext}`}
        >
          {copied ? (
            <Check className="w-5 h-5 text-cyan-400" />
          ) : (
            <Copy className="w-5 h-5 text-white/70" />
          )}
        </button>
        
        <button
          onClick={handleCall}
          className="glass-button w-11 h-11 rounded-xl p-0 hidden sm:flex"
          aria-label={`اتصال برقم ${conversion.ext}`}
        >
          <Phone className="w-5 h-5 text-white/70" />
        </button>
      </div>
    </motion.div>
  );
}
