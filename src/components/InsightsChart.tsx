'use client';

import { motion } from 'framer-motion';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { RangeBin } from '@/lib/utils';

interface InsightsChartProps {
  data: RangeBin[];
}

export default function InsightsChart({ data }: InsightsChartProps) {
  // Filter out empty ranges for cleaner chart
  const chartData = data.filter(d => d.count > 0);
  
  const maxCount = Math.max(...chartData.map(d => d.count), 1);

  const CustomTooltip = ({ active, payload, label }: {
    active?: boolean;
    payload?: Array<{ value: number }>;
    label?: string;
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-card p-3 border border-white/20">
          <p className="text-white/70 text-xs mb-1">النطاق {label}</p>
          <p className="text-cyan-400 font-semibold">
            {payload[0].value} تحويلة
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="glass-card p-5"
    >
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-white font-semibold text-lg">توزيع التحويلات</h3>
        <span className="text-white/50 text-sm">حسب النطاق</span>
      </div>

      <div className="h-48 sm:h-56">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <XAxis 
              dataKey="label" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 11 }}
              interval={0}
              angle={window?.innerWidth < 640 ? -45 : 0}
              textAnchor={window?.innerWidth < 640 ? 'end' : 'middle'}
              height={window?.innerWidth < 640 ? 50 : 30}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 11 }}
            />
            <Tooltip 
              content={<CustomTooltip />}
              cursor={{ fill: 'rgba(255,255,255,0.05)' }}
            />
            <Bar 
              dataKey="count" 
              radius={[6, 6, 0, 0]}
              maxBarSize={50}
            >
              {chartData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.count === maxCount 
                    ? 'url(#gradientActive)' 
                    : 'url(#gradientDefault)'
                  }
                />
              ))}
            </Bar>
            <defs>
              <linearGradient id="gradientDefault" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(34, 211, 238, 0.6)" />
                <stop offset="100%" stopColor="rgba(34, 211, 238, 0.2)" />
              </linearGradient>
              <linearGradient id="gradientActive" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(6, 182, 212, 0.9)" />
                <stop offset="100%" stopColor="rgba(6, 182, 212, 0.3)" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-cyan-400/60" />
          <span className="text-white/50 text-xs">النطاقات</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-cyan-500" />
          <span className="text-white/50 text-xs">الأكثر استخداماً</span>
        </div>
      </div>
    </motion.div>
  );
}
