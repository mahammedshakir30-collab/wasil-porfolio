import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  src: string;
  client: string;
  type?: string;
}

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  if (!projects || projects.length === 0) return null;

  return (
    <div className="py-24 border-b border-[var(--glass-border)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight">
            Featured <span className="text-[var(--text-secondary)] italic font-light">Case Studies</span>
          </h2>
          <div className="h-[1px] flex-grow ml-8 bg-[var(--glass-border)] hidden md:block" />
        </div>

        <div className="space-y-24 md:space-y-40">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center group cursor-pointer`}
            >
              {/* Image Container */}
              <div className="w-full md:w-[65%] liquid-glass group-hover:border-[var(--accent)] aspect-[16/10] md:aspect-[16/9]">
                <div className="absolute inset-0 bg-[var(--bg-start)] opacity-20 group-hover:opacity-0 transition-opacity duration-300 z-10" />
                <img 
                  src={project.src} 
                  alt={project.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-out"
                />
                
                {/* View Button */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-24 h-24 rounded-full bg-[var(--glass-fill)] backdrop-blur-md border border-[var(--glass-border)] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 ease-out">
                  <span className="text-[var(--text-primary)] text-xs font-semibold tracking-widest uppercase mb-1">View</span>
                  <ArrowUpRight className="w-5 h-5 text-[var(--accent)]" />
                </div>
              </div>

              {/* Text Container */}
              <div className="w-full md:w-[35%] flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[var(--accent)] text-xs font-bold tracking-widest uppercase">{project.category}</span>
                  <div className="h-[1px] w-8 bg-[var(--glass-border)]" />
                  <span className="text-[var(--text-secondary)] text-xs tracking-widest uppercase">{project.client}</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6 leading-tight tracking-tighter group-hover:text-[var(--accent)] transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-[var(--text-secondary)] font-light leading-relaxed mb-8">
                  A comprehensive {project.category.toLowerCase()} design delivering strategic value and premium visual aesthetics.
                </p>

                <div className="flex items-center gap-2 text-[var(--text-secondary)] font-medium group-hover:text-[var(--accent)] transition-colors">
                  <span className="uppercase tracking-widest text-sm">Explore Project</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
