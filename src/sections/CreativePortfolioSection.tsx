import { useState, useMemo } from 'react';
import { PortfolioHero } from './portfolio/PortfolioHero';
import { PortfolioToolbar } from './portfolio/PortfolioToolbar';
import { MasonryGallery } from './portfolio/MasonryGallery';
import { ProjectModal } from './portfolio/ProjectModal';
import { MagazineSection } from './portfolio/MagazineSection';
import { BrochureDesignSection } from './portfolio/BrochureDesignSection';
import { MenuDesignSection } from './portfolio/MenuDesignSection';
import portfolioData from '../data/portfolio.json';

// Type from JSON
interface Project {
  id: number;
  title: string;
  category: string;
  src: string;
  client: string;
  type?: string;
  tags: string[];
}

export function CreativePortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('Newest');
  
  // Modal state
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

  // Extract unique categories dynamically
  const categories = useMemo(() => {
    const cats = new Set(portfolioData.map((p) => p.category));
    return Array.from(cats).sort();
  }, []);

  // Filter and Sort Logic
  const filteredProjects = useMemo(() => {
    let result = portfolioData as Project[];

    // Filter by Category
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Filter by Search (Title, Category, or Tags)
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(lowerQuery) ||
        p.category.toLowerCase().includes(lowerQuery) ||
        (p.tags && p.tags.some(t => t.toLowerCase().includes(lowerQuery)))
      );
    }

    // Sort
    result = [...result].sort((a, b) => {
      switch (sortOption) {
        case 'Oldest':
          return a.id - b.id; // Basic fallback, assuming lower ID is older
        case 'A-Z':
          return a.title.localeCompare(b.title);
        case 'Z-A':
          return b.title.localeCompare(a.title);
        case 'Newest':
        default:
          return b.id - a.id;
      }
    });

    return result;
  }, [activeCategory, searchQuery, sortOption]);

  // Modal Navigation
  const handleOpenModal = (project: Project, index: number) => {
    setSelectedProjectIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedProjectIndex(null);
  };

  const handleNext = () => {
    if (selectedProjectIndex !== null && selectedProjectIndex < filteredProjects.length - 1) {
      setSelectedProjectIndex(selectedProjectIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedProjectIndex !== null && selectedProjectIndex > 0) {
      setSelectedProjectIndex(selectedProjectIndex - 1);
    }
  };

  const selectedProject = selectedProjectIndex !== null ? filteredProjects[selectedProjectIndex] : null;

  return (
    <section id="portfolio" className="relative min-h-screen">
      <PortfolioHero totalItems={portfolioData.length} />

      <PortfolioToolbar 
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortOption={sortOption}
        onSortChange={setSortOption}
      />

      {(activeCategory === 'All' || activeCategory === 'Magazine') && <MagazineSection />}
      
      {(activeCategory === 'All' || activeCategory === 'Brochures') && <BrochureDesignSection />}

      {(activeCategory === 'All' || activeCategory === 'Menu') && <MenuDesignSection />}

      <MasonryGallery 
        projects={filteredProjects} 
        onProjectClick={handleOpenModal} 
      />

      <ProjectModal 
        project={selectedProject}
        onClose={handleCloseModal}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={selectedProjectIndex !== null && selectedProjectIndex < filteredProjects.length - 1}
        hasPrev={selectedProjectIndex !== null && selectedProjectIndex > 0}
      />
    </section>
  );
}
