export interface LeaderboardEntry {
  id: number;
  rank: number;
  modelName: string;
  company: string;
  size: string;
  prerequisiteAccuracy: number;
  conceptRecall: number;
  learningPathQuality: number;
  overallScore: number;
}

export type SortDirection = 'asc' | 'desc';
export type SortColumn = keyof LeaderboardEntry;

export function sortLeaderboardData(
  data: LeaderboardEntry[],
  column: SortColumn,
  direction: SortDirection
): LeaderboardEntry[] {
  return [...data].sort((a, b) => {
    const aVal = a[column];
    const bVal = b[column];
    
    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return direction === 'asc' ? aVal - bVal : bVal - aVal;
    }
    
    const aStr = String(aVal).toLowerCase();
    const bStr = String(bVal).toLowerCase();
    
    if (direction === 'asc') {
      return aStr.localeCompare(bStr);
    } else {
      return bStr.localeCompare(aStr);
    }
  });
}

export function filterLeaderboardData(
  data: LeaderboardEntry[],
  modelTypeFilter: string,
  sizeFilter: string
): LeaderboardEntry[] {
  return data.filter(entry => {
    const matchesType = modelTypeFilter === 'all' || !modelTypeFilter || 
      entry.modelName.toLowerCase().includes(modelTypeFilter.toLowerCase());
    const matchesSize = sizeFilter === 'all' || !sizeFilter || entry.size === sizeFilter;
    
    return matchesType && matchesSize;
  });
}
