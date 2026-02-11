'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ConversionCard from './ConversionCard';
import { Conversion } from '@/data/conversions';

interface ConversionListProps {
  conversions: Conversion[];
}

const ConversionList: React.FC<ConversionListProps> = ({ conversions }) => {
  if (conversions.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card p-12 text-center border border-white/5"
      >
        <p className="text-white/60 text-lg">
          لا توجد نتائج مطابقة — جرّب اسمًا آخر أو رقم تحويلة مختلف
        </p>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <AnimatePresence mode="popLayout">
        {conversions.map((conversion, index) => (
          <ConversionCard
            key={`${conversion.ext}-${conversion.name}`}
            conversion={conversion}
            index={index}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ConversionList;
