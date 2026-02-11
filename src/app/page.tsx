'use client';
import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
// Components
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import DeptTabs from '@/components/DeptTabs';
import ConversionCard from '@/components/ConversionCard';
import Toast from '@/components/Toast';
// Data & Utils
import { conversions, RECEPTION_EXT } from '@/data/conversions';
import { 
  filterConversions, 
  getDeptCounts, 
  getRangeBins, 
  getMostUsedRange,
  formatDate 
} from '@/lib/utils';
export default function Home() {
  // State
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDept, setActiveDept] = useState<string | null>(null);
  const [isQuickActionsOpen, setIsQuickActionsOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; visible: boolean; type: 'success' | 'error' | 'info' }>({
    message: '',
    visible: false,
    type: 'success'
  });
  // Computed values
  const filteredConversions = useMemo(() => 
    filterConversions(conversions, searchQuery, activeDept),
    [searchQuery, activeDept]
  );
  const deptCounts = useMemo(() => getDeptCounts(conversions), []);
  const rangeBins = useMemo(() => getRangeBins(conversions), []);
  const mostUsedRange = useMemo(() => getMostUsedRange(conversions), []);
  const today = useMemo(() => formatDate(new Date()), []);
  const departments = useMemo(() => [
    { id: null, label: 'الكل', count: conversions.length },
    { id: 'المالية', label: 'المالية', count: deptCounts['المالية'] || 0 },
    { id: 'الموارد البشرية', label: 'الموارد البشرية', count: deptCounts['الموارد البشرية'] || 0 },
  ], [deptCounts]);
  // Handlers
  const handleCopy = useCallback((ext: number) => {
    setToast({
      message: `تم نسخ الرقم ${ext} ✅`,
      visible: true,
      type: 'success'
    });
  }, []);
  const handleCopyReception = useCallback(() => {
    setToast({
      message: `تم نسخ رقم الاستقبال ${RECEPTION_EXT} ✅`,
      visible: true,
      type: 'success'
    });
  }, []);
  const handleClearFilters = useCallback(() => {
    setSearchQuery('');
    setActiveDept(null);
    setToast({
      message: "تم مسح الفلاتر",
      visible: true,
      type: "info"
    });
  }, []);

  const handleCloseToast = useCallback(() => {
    setToast(prev => ({ ...prev, visible: false }));
  }, []);

  return (
    <div className="min-h-screen bg-navy-gradient">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>
      {/* Header */}
      <Header  />
      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-6 pb-32">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400/20 via-cyan-500/10 to-purple-500/10 flex items-center justify-center border-2 border-cyan-400/30 shadow-lg shadow-cyan-500/20"
          >
            <Phone className="w-10 h-10 text-cyan-400" />
          </motion.div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            دليل تحويلات EMDADAT ALATTA
          </h1>
          <p className="text-white/60 text-sm sm:text-base max-w-md mx-auto">
            ابحث بالاسم أو رقم التحويل للوصول للجهة المختصة خلال ثوانٍ
          </p>
        </motion.section>
        {/* Search */}
            value={searchQuery} 
            onChange={setSearchQuery} 
          />
        </section>
        <section className="mb-4">
          <DeptTabs
            departments={departments}
            activeDept={activeDept}
            onSelect={setActiveDept} />
          />
        </section>
        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-between mb-4"
        >
          <span className="text-white/50 text-sm">
            {filteredConversions.length} نتيجة
          </span>
          {(searchQuery || activeDept) && (
            <button
              onClick={handleClearFilters}
              className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors"
            >
              مسح الفلاتر
            </button>
          )}
        </motion.div>
        {/* Conversions List */}
        <section className="space-y-3 mb-8">
          {filteredConversions.length > 0 ? (
            filteredConversions.map((conversion, index) => (
              <ConversionCard
                key={`${conversion.ext}-${conversion.name}`}
                conversion={conversion}
                index={index}
              />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass-card p-8 text-center"
            >
              <p className="text-white/50 mb-2">لا توجد نتائج</p>
              <p className="text-white/30 text-sm">جرب البحث بكلمات مختلفة</p>
            </motion.div>
          )}
        </section>
        {/* Footer */}
        <footer className="text-center pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm">
            EMDADAT ALATTA - دليل التحويلات الداخلية
          </p>
          <p className="text-white/30 text-xs mt-1">
            آخر تحديث: {today}
          </p>
        </footer>
      </main>
      {/* Toast */}
      <Toast
        message={toast.message}
        isVisible={toast.visible}
        onClose={handleCloseToast}
        type={toast.type}
      />
    </div>
  );
}
