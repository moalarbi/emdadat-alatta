'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, RotateCcw, AlertCircle, Phone } from 'lucide-react';
import { useState } from 'react';
import { RECEPTION_EXT } from '@/data/conversions';

interface QuickActionsSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onClearFilters: () => void;
  onReportIssue: () => void;
  onCopyReception: () => void;
}

export default function QuickActionsSheet({
  isOpen,
  onClose,
  onClearFilters,
  onReportIssue,
  onCopyReception,
}: QuickActionsSheetProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyReception = async () => {
    try {
      await navigator.clipboard.writeText(RECEPTION_EXT.toString());
      setCopied(true);
      onCopyReception();
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Sheet */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ 
              type: 'spring', 
              damping: 25, 
              stiffness: 300,
              mass: 0.8
            }}
            className="fixed bottom-0 left-0 right-0 z-50 safe-area-bottom"
          >
            <div className="glass-card rounded-b-none border-b-0 mx-0 sm:mx-auto sm:max-w-md">
              {/* Handle bar */}
              <div className="flex justify-center pt-3 pb-2">
                <div className="w-10 h-1 rounded-full bg-white/20" />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between px-5 pb-4 border-b border-white/10">
                <h2 className="text-lg font-semibold text-white">الإجراءات السريعة</h2>
                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full glass-button p-0"
                  aria-label="إغلاق"
                >
                  <X className="w-5 h-5 text-white/70" />
                </button>
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                {/* Copy Reception Button */}
                <button
                  onClick={handleCopyReception}
                  className="w-full glass-button glass-button-primary py-4 justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan-400/20 flex items-center justify-center">
                      {copied ? (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-5 h-5 rounded-full bg-cyan-400 flex items-center justify-center"
                        >
                          <svg className="w-3 h-3 text-navy-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </motion.div>
                      ) : (
                        <Phone className="w-5 h-5 text-cyan-400" />
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-white font-medium">نسخ رقم الاستقبال</p>
                      <p className="text-white/50 text-sm">{RECEPTION_EXT}</p>
                    </div>
                  </div>
                  {!copied && <Copy className="w-5 h-5 text-white/50" />}
                </button>

                {/* Clear Filters Button */}
                <button
                  onClick={() => {
                    onClearFilters();
                    onClose();
                  }}
                  className="w-full glass-button py-4 justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                      <RotateCcw className="w-5 h-5 text-white/70" />
                    </div>
                    <span className="text-white font-medium">مسح الفلاتر</span>
                  </div>
                </button>

                {/* Help Text */}
                <div className="glass-card p-4 bg-white/5">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-white/70 text-sm leading-relaxed">
                      إذا لم تجد التحويلة، تواصل مع الاستقبال وسيتم تحويلك للجهة المختصة.
                    </p>
                  </div>
                </div>

                {/* Report Issue Button */}
                <button
                  onClick={() => {
                    onReportIssue();
                    onClose();
                  }}
                  className="w-full text-center py-3 text-white/50 text-sm hover:text-white/70 transition-colors"
                >
                  إبلاغ عن رقم غير صحيح
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
