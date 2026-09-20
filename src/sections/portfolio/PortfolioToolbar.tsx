import { Search, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

interface PortfolioToolbarProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortOption: string;
  onSortChange: (option: string) => void;
}

export function PortfolioToolbar({
  categories,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  sortOption,
  onSortChange
}: PortfolioToolbarProps) {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortOptions = ['Newest', 'Oldest', 'A-Z', 'Z-A'];

  return (
    <div className="sticky top-20 z-40 bg-[var(--bg-start)]/80 backdrop-blur-xl border-b border-[var(--glass-border)] py-4 transition-all duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 md:gap-6">
          
          {/* Categories / Filters (Horizontal Scroll on Mobile) */}
          <div className="flex-1 overflow-x-auto no-scrollbar pb-2 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0">
            <div className="flex items-center gap-2 md:gap-4 min-w-max">
              <button
                onClick={() => onCategoryChange('All')}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeCategory === 'All' ? 'text-black' : 'text-white/60 hover:text-white bg-white/5 hover:bg-white/10'
                }`}
              >
                {activeCategory === 'All' && (
                  <motion.div 
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-warm-gold rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">All Works</span>
              </button>

              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => onCategoryChange(cat)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    activeCategory === cat ? 'text-black' : 'text-white/60 hover:text-white bg-white/5 hover:bg-white/10'
                  }`}
                >
                  {activeCategory === cat && (
                    <motion.div 
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-warm-gold rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Search and Sort */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-white/40 group-focus-within:text-warm-gold transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="bg-black border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-warm-gold/50 w-full md:w-48 lg:w-64 transition-all duration-300"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="flex items-center gap-2 bg-black border border-white/10 rounded-full py-2 px-4 text-sm text-white/80 hover:text-white hover:border-white/30 transition-all"
              >
                Sort: <span className="font-medium text-warm-gold">{sortOption}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isSortOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-[var(--glass-fill)] border border-[var(--glass-border)] rounded-xl shadow-2xl overflow-hidden z-50">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        onSortChange(opt);
                        setIsSortOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
