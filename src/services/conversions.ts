import { conversions, Conversion } from '@/data/conversions';

export const getAllConversions = (): Conversion[] => {
  return [...conversions].sort((a, b) => a.ext - b.ext);
};

export const filterConversions = (allConversions: Conversion[], query: string): Conversion[] => {
  const q = query.toLowerCase().trim();
  if (!q) return allConversions;
  
  return allConversions.filter(c => 
    c.name.toLowerCase().includes(q) || 
    c.ext.toString().includes(q)
  );
};
