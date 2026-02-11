'use client';

import { motion } from 'framer-motion';
import { Users, Building2, TrendingUp, Calendar } from 'lucide-react';

interface KpiRowProps {
  totalConversions: number;
  deptCount: number;
  mostUsedRange: string;
  lastUpdated: string;
}

const kpis = [
  {
    id: 'total',
    label: 'إجمالي التحويلات',
    icon: Users,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10',
  },
  {
    id: 'depts',
    label: 'عدد الأقسام',
    icon: Building2,
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
  },
  {
    id: 'range',
    label: 'أكثر نطاق مستخدم',
    icon: TrendingUp,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-400/10',
  },
  {
    id: 'updated',
    label: 'آخر تحديث',
    icon: Calendar,
    color: 'text-amber-400',
    bgColor: 'bg-amber-400/10',
  },
];

export default function KpiRow({ 
  totalConversions, 
  deptCount, 
  mostUsedRange, 
  lastUpdated 
}: KpiRowProps) {
  const values: Record<string, string> = {
    total: totalConversions.toString(),
    depts: deptCount.toString(),
    range: mostUsedRange,
    updated: lastUpdated,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.15 }}
      className="w-full"
    >
      {/* Mobile: Horizontal scroll */}
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x sm:hidden">
        {kpis.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <motion.div
              key={kpi.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
              className="glass-card p-4 flex-shrink-0 w-[140px] snap-start"
            >
              <div className={`
                w-9 h-9 rounded-lg ${kpi.bgColor} 
                flex items-center justify-center mb-3
              `}>
                <Icon className={`w-5 h-5 ${kpi.color}`} />
              </div>
              <p className="text-white/60 text-xs mb-1">{kpi.label}</p>
              <p className="text-white font-semibold text-lg">{values[kpi.id]}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Desktop: Grid */}
      <div className="hidden sm:grid grid-cols-4 gap-4">
        {kpis.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <motion.div
              key={kpi.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
              className="glass-card p-5"
            >
              <div className={`
                w-10 h-10 rounded-lg ${kpi.bgColor} 
                flex items-center justify-center mb-4
              `}>
                <Icon className={`w-5 h-5 ${kpi.color}`} />
              </div>
              <p className="text-white/60 text-sm mb-1">{kpi.label}</p>
              <p className="text-white font-semibold text-xl">{values[kpi.id]}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
