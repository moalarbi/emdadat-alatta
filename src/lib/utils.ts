import { Conversion } from '@/data/conversions';

export type RangeBin = {
  label: string;
  min: number;
  max: number;
  count: number;
};

export const RANGE_BINS = [
  { label: '0-99', min: 0, max: 99 },
  { label: '100-199', min: 100, max: 199 },
  { label: '200-299', min: 200, max: 299 },
  { label: '300-399', min: 300, max: 399 },
  { label: '400-499', min: 400, max: 499 },
  { label: '500-599', min: 500, max: 599 },
  { label: '600-699', min: 600, max: 699 },
  { label: '700-799', min: 700, max: 799 },
  { label: '800-899', min: 800, max: 899 },
  { label: '900-999', min: 900, max: 999 },
];

export function getRangeBins(conversions: Conversion[]): RangeBin[] {
  return RANGE_BINS.map(bin => ({
    ...bin,
    count: conversions.filter(c => c.ext >= bin.min && c.ext <= bin.max).length
  }));
}

export function getMostUsedRange(conversions: Conversion[]): string {
  const bins = getRangeBins(conversions);
  const maxCount = Math.max(...bins.map(b => b.count));
  const mostUsed = bins.find(b => b.count === maxCount);
  return mostUsed?.label || '-';
}

export function filterConversions(
  conversions: Conversion[],
  searchQuery: string,
  deptFilter: string | null
): Conversion[] {
  return conversions.filter(conv => {
    // Department filter
    if (deptFilter && conv.dept !== deptFilter) {
      return false;
    }
    
    // Search filter
    if (!searchQuery.trim()) {
      return true;
    }
    
    const query = searchQuery.trim().toLowerCase();
    const isNumeric = /^\d+$/.test(query);
    
    if (isNumeric) {
      // Search by extension number
      return conv.ext.toString().includes(query);
    } else {
      // Search by name (Arabic or Latin)
      return conv.name.toLowerCase().includes(query);
    }
  });
}

export function getDeptCounts(conversions: Conversion[]): Record<string, number> {
  return conversions.reduce((acc, conv) => {
    acc[conv.dept] = (acc[conv.dept] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('ar-SA', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(date);
}

export function cn(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}
