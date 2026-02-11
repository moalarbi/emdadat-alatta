'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { useState } from 'react';

interface ReportIssueModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; ext: string; note: string }) => void;
}

export default function ReportIssueModal({ isOpen, onClose, onSubmit }: ReportIssueModalProps) {
  const [name, setName] = useState('');
  const [ext, setExt] = useState('');
  const [note, setNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 500));
    
    onSubmit({ name, ext, note });
    
    // Reset form
    setName('');
    setExt('');
    setNote('');
    setIsSubmitting(false);
    onClose();
  };

  const isValid = name.trim() && ext.trim();

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

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="glass-card w-full max-w-md max-h-[90vh] overflow-auto">
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <h2 className="text-lg font-semibold text-white">إبلاغ عن رقم غير صحيح</h2>
                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full glass-button p-0"
                  aria-label="إغلاق"
                >
                  <X className="w-5 h-5 text-white/70" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-5 space-y-4">
                <div>
                  <label className="block text-white/70 text-sm mb-2">الاسم</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="أدخل الاسم"
                    className="glass-input"
                    dir="rtl"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm mb-2">رقم التحويل</label>
                  <input
                    type="text"
                    value={ext}
                    onChange={(e) => setExt(e.target.value)}
                    placeholder="أدخل رقم التحويل"
                    className="glass-input font-mono"
                    dir="ltr"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm mb-2">ملاحظة (اختياري)</label>
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="أضف ملاحظة إذا لزم الأمر"
                    className="glass-input min-h-[100px] resize-none"
                    dir="rtl"
                    rows={3}
                  />
                </div>

                <button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  className={`
                    w-full glass-button glass-button-primary py-4 mt-2
                    flex items-center justify-center gap-2
                    ${(!isValid || isSubmitting) ? 'opacity-50 cursor-not-allowed' : ''}
                  `}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-cyan-400 rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>إرسال البلاغ</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
