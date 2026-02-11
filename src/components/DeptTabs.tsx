'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface DeptTabsProps {
  departments: Array<{
    id: string | null;
    label: string;
    count: number;
  }>;
  activeDept: string | null;
  onSelect: (dept: string | null) => void;
}

export default function DeptTabs({ departments, activeDept, onSelect }: DeptTabsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="sticky top-14 z-30 py-3 -mx-4 px-4 bg-gradient-to-b from-[#050B1A] via-[#050B1A]/95 to-transparent"
    >
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x">
        {departments.map((dept) => (
          <button
            key={dept.id ?? 'all'}
            onClick={() => onSelect(dept.id)}
            className={cn(
              'dept-tab snap-start flex-shrink-0',
              activeDept === dept.id && 'active'
            )}
          >
            <span>{dept.label}</span>
            <span className={cn(
              'mr-2 text-xs px-2 py-0.5 rounded-full',
              activeDept === dept.id 
                ? 'bg-white/20 text-white' 
                : 'bg-white/10 text-white/60'
            )}>
              {dept.count}
            </span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}
