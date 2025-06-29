import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function Navigation() {
  const [location] = useLocation();

  const handleDownloadPaper = () => {
    // In a real implementation, this would trigger actual PDF download
    alert('PDF download functionality would be implemented here');
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href="/">
              <h1 className="text-xl font-semibold cursor-pointer" style={{ color: 'var(--academic-blue)' }}>
                EduVLM-Bench
              </h1>
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/" className={`transition-colors ${
                location === '/' 
                  ? 'text-[var(--academic-blue)]' 
                  : 'text-[var(--slate-grey)] hover:text-[var(--academic-blue)]'
              }`}>
                Research
              </Link>
              <Link href="/leaderboard" className={`transition-colors ${
                location === '/leaderboard' 
                  ? 'text-[var(--academic-blue)]' 
                  : 'text-[var(--slate-grey)] hover:text-[var(--academic-blue)]'
              }`}>
                Leaderboard
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              onClick={handleDownloadPaper}
              className="bg-[var(--accent-amber)] text-white hover:bg-yellow-500 transition-colors font-medium"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Paper
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
