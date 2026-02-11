'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({ 
  value, 
  onChange, 
  placeholder = 'ابحث بالاسم أو رقم التحويل...' 
}: SearchBarProps) {
  const [localValue, setLocalValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);

  // Debounce the search input
  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(localValue);
    }, 150);

    return () => clearTimeout(timer);
  }, [localValue, onChange]);

  // Sync local value with prop value
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleClear = useCallback(() => {
    setLocalValue('');
    onChange('');
  }, [onChange]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="relative w-full"
    >
      <div 
        className={`
          relative flex items-center gap-3 
          glass-input py-3.5 px-4
          ${isFocused ? 'border-cyan-400/50 shadow-[0_0_0_3px_rgba(34,211,238,0.1)]' : ''}
        `}
      >
        <Search 
          className={`
            w-5 h-5 flex-shrink-0 transition-colors
            ${isFocused ? 'text-cyan-400' : 'text-white/40'}
          `} 
        />
        
        <input
          type="text"
          value={localValue}
          onChange={(e) => setLocalValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/40 text-base"
          dir="rtl"
          aria-label="حقل البحث"
        />
        
        {localValue && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={handleClear}
            className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="مسح البحث"
          >
            <X className="w-3.5 h-3.5 text-white/60" />
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
