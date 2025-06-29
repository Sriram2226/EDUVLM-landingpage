import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ChevronUp, ChevronDown, RotateCcw } from "lucide-react";
import { sortLeaderboardData, filterLeaderboardData, type SortDirection, type SortColumn } from "@/lib/leaderboard-data";
import type { LeaderboardEntry } from "@shared/schema";
import { Footer } from "@/components/footer";

export default function Leaderboard() {
  const [sortColumn, setSortColumn] = useState<SortColumn>('rank');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [modelTypeFilter, setModelTypeFilter] = useState<string>('all');
  const [sizeFilter, setSizeFilter] = useState<string>('all');

  const { data: leaderboardData, isLoading, error } = useQuery<LeaderboardEntry[]>({
    queryKey: ['/api/leaderboard'],
  });

  const filteredAndSortedData = useMemo(() => {
    if (!leaderboardData) return [];
    
    const filtered = filterLeaderboardData(leaderboardData, modelTypeFilter, sizeFilter);
    return sortLeaderboardData(filtered, sortColumn, sortDirection);
  }, [leaderboardData, modelTypeFilter, sizeFilter, sortColumn, sortDirection]);

  const handleSort = (column: SortColumn) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const resetFilters = () => {
    setModelTypeFilter('all');
    setSizeFilter('all');
    setSortColumn('rank');
    setSortDirection('asc');
  };

  const getRankBadgeColor = (rank: number) => {
    if (rank === 1) return "bg-[var(--accent-amber)] text-white";
    if (rank === 2 || rank === 3) return "bg-[var(--slate-grey)] text-white";
    return "bg-gray-200 text-[var(--dark-slate)]";
  };

  const getScoreColor = (score: number, isOverall: boolean = false) => {
    if (isOverall && score >= 75) return "text-[var(--success-emerald)] font-bold";
    if (score >= 80) return "text-[var(--success-emerald)] font-semibold";
    if (score >= 70) return "text-[var(--academic-blue)] font-semibold";
    return "text-[var(--slate-grey)] font-semibold";
  };

  const SortButton = ({ column, children }: { column: SortColumn; children: React.ReactNode }) => (
    <Button
      variant="ghost"
      className="h-auto p-0 font-semibold hover:bg-gray-100 text-[var(--dark-slate)]"
      onClick={() => handleSort(column)}
    >
      {children}
      {sortColumn === column && (
        sortDirection === 'asc' ? 
          <ChevronUp className="ml-1 h-4 w-4" /> : 
          <ChevronDown className="ml-1 h-4 w-4" />
      )}
    </Button>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--academic-blue)] mx-auto mb-4"></div>
          <p style={{ color: 'var(--slate-grey)' }}>Loading leaderboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4" style={{ color: 'var(--dark-slate)' }}>
                Error Loading Leaderboard
              </h1>
              <p style={{ color: 'var(--slate-grey)' }}>
                Failed to load leaderboard data. Please try again later.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-crimson mb-4" style={{ color: 'var(--academic-blue)' }}>
              Model Leaderboard
            </h1>
            <p className="text-lg" style={{ color: 'var(--slate-grey)' }}>
              Performance comparison of various models on EduVLM-Bench tasks
            </p>
          </div>

          {/* Filters */}
          <Card className="bg-[var(--light-grey)] border-0 mb-8">
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-4">
                <Select value={modelTypeFilter} onValueChange={setModelTypeFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All Model Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Model Types</SelectItem>
                    <SelectItem value="GPT">GPT Models</SelectItem>
                    <SelectItem value="Flan">Flan Models</SelectItem>
                    <SelectItem value="Gemini">Gemini Models</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={sizeFilter} onValueChange={setSizeFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All Sizes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sizes</SelectItem>
                    <SelectItem value="250M">250M</SelectItem>
                    <SelectItem value="2B">2B</SelectItem>
                    <SelectItem value="4B">4B</SelectItem>
                    <SelectItem value="7B">7B</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  onClick={resetFilters}
                  variant="outline"
                  className="text-[var(--slate-grey)] hover:bg-gray-200"
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Reset Filters
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Leaderboard Table */}
          <Card className="bg-white shadow-sm">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[var(--light-grey)] hover:bg-[var(--light-grey)]">
                    <TableHead className="font-semibold text-[var(--dark-slate)]">
                      <SortButton column="rank">Rank</SortButton>
                    </TableHead>
                    <TableHead className="font-semibold text-[var(--dark-slate)]">
                      <SortButton column="modelName">Model</SortButton>
                    </TableHead>
                    <TableHead className="font-semibold text-[var(--dark-slate)]">
                      <SortButton column="size">Size</SortButton>
                    </TableHead>
                    <TableHead className="font-semibold text-[var(--dark-slate)]">
                      <SortButton column="prerequisiteAccuracy">Prerequisite Accuracy</SortButton>
                    </TableHead>
                    <TableHead className="font-semibold text-[var(--dark-slate)]">
                      <SortButton column="conceptRecall">Concept Recall</SortButton>
                    </TableHead>
                    <TableHead className="font-semibold text-[var(--dark-slate)]">
                      <SortButton column="learningPathQuality">Learning Path Quality</SortButton>
                    </TableHead>
                    <TableHead className="font-semibold text-[var(--dark-slate)]">
                      <SortButton column="overallScore">Overall Score</SortButton>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAndSortedData.map((entry) => (
                    <TableRow key={entry.id} className="hover:bg-[var(--light-grey)]">
                      <TableCell>
                        <Badge className={`${getRankBadgeColor(entry.rank)} w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold`}>
                          {entry.rank}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium" style={{ color: 'var(--dark-slate)' }}>
                          {entry.modelName}
                        </div>
                        <div className="text-sm" style={{ color: 'var(--slate-grey)' }}>
                          {entry.company}
                        </div>
                      </TableCell>
                      <TableCell style={{ color: 'var(--slate-grey)' }}>
                        {entry.size}
                      </TableCell>
                      <TableCell>
                        <span className={getScoreColor(entry.prerequisiteAccuracy)}>
                          {entry.prerequisiteAccuracy}%
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className={getScoreColor(entry.conceptRecall)}>
                          {entry.conceptRecall}%
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className={getScoreColor(entry.learningPathQuality)}>
                          {entry.learningPathQuality}%
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className={getScoreColor(entry.overallScore, true)}>
                          {entry.overallScore}%
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
}
