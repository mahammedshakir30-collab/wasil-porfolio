import { motion } from 'motion/react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { PenTool, Briefcase, FileText, PieChart, MonitorPlay, BookOpen } from 'lucide-react';

const services = [
  { icon: PenTool, title: 'Graphic & Print Design', desc: 'Magazine, Brochure, Flyer, and Social Media Design' },
  { icon: Briefcase, title: 'Brand Identity', desc: 'Corporate Branding and Visual Strategy' },
  { icon: PieChart, title: 'Accounting Support', desc: 'Financial Documentation and Analysis' },
  { icon: MonitorPlay, title: 'Business Presentations', desc: 'Impactful Pitch Decks and Presentation Design' },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="Services" subtitle="What I Do" align="center" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="p-10 rounded-3xl glass-panel hover:border-[var(--accent)] hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--glass-border)] flex items-center justify-center mb-8 group-hover:bg-[var(--accent)] group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-8 h-8 text-[var(--text-primary)] group-hover:text-[var(--bg-start)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4 group-hover:text-[var(--accent)] transition-colors duration-300">{service.title}</h3>
                  <p className="text-[var(--text-secondary)] font-light leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
