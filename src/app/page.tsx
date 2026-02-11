'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

// Components
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import ConversionList from '@/components/ConversionList';

// Services & Data
import { getAllConversions, filterConversions } from '@/services/conversions';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  // Initial data load (memoized)
  const allConversions = useMemo(() => getAllConversions(), []);

  // Filter logic (with simple "instant" update as per requirements)
  const filteredConversions = useMemo(() => 
    filterConversions(allConversions, searchQuery),
    [allConversions, searchQuery]
  );

  return (
    <div className="min-h-screen bg-navy-950 text-white selection:bg-cyan-500/30">
      {/* Background Ambience */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px]" />
      </div>

      <Header />

      <main className="relative z-10 max-w-5xl mx-auto px-4 py-12">
        {/* Search Section */}
        <section className="mb-12">
          <div className="max-w-2xl mx-auto">
            <SearchBar 
              value={searchQuery} 
              onChange={setSearchQuery} 
            />
            <p className="mt-3 text-center text-white/40 text-sm">
              ابحث بالاسم أو رقم التحويلة
            </p>
          </div>
        </section>

        {/* List Section */}
        <section>
          <ConversionList conversions={filteredConversions} />
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-white/5 text-center">
        <p className="text-white/30 text-sm">
          EMDADAT ALATTA — دليل التحويلات الداخلية
        </p>
      </footer>
    </div>
  );
}
