import { motion } from 'motion/react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ArrowUpRight } from 'lucide-react';

const clients = [
  { name: 'Hattec Solutions', location: 'Dammam, KSA', category: 'Corporate Branding' },
  { name: 'HAT Supplies', location: 'Dammam, KSA', category: 'Brand Identity' },
  { name: 'Adams International', location: 'Kochi, India', category: 'Graphic Design' },
  { name: 'Dream Catcher Entertainments', location: 'Trivandrum, India', category: 'Event Branding' },
  { name: 'MTSA Media', location: 'Kasaragod, India', category: 'Media & Production' },
  { name: 'Showrider Entertainments', location: 'Events', category: 'Marketing Materials' },
  { name: 'Expertzlab Technologies', location: 'Kochi, India', category: 'Tech Education Design' },
  { name: 'D3 Entertainments', location: 'Trivandrum, India', category: 'Event Graphics' },
  { name: 'Skyline Academy', location: 'Education', category: 'Educational Branding' },
  { name: 'Klassmate Learning', location: 'Education', category: 'EdTech Branding' },
  { name: 'Knowlix Learning LLP', location: 'Education', category: 'Digital Assets' },
  { name: 'I Cell Mobiles', location: 'Chokli, Calicut', category: 'Retail Branding' },
  { name: 'Fly Wide Holidays', location: 'Kochi & Kottayam', category: 'Travel & Tourism' },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 relative bg-[var(--bg-start)]">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="Selected Works" subtitle="Client Portfolio" align="left" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-2xl overflow-hidden glass border border-[var(--glass-border)] hover:border-[var(--accent)] transition-all duration-300 cursor-pointer"
            >
              {/* Image Placeholder (Can be replaced later) */}
              <div className="aspect-[4/3] bg-[var(--glass-fill)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay group-hover:scale-110 transform" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[var(--text-secondary)] text-xs font-bold tracking-widest uppercase mb-2 block">
                      {client.category}
                    </span>
                    <h3 className="text-2xl font-bold text-soft-white mb-1">{client.name}</h3>
                    <p className="text-white/50 text-sm">{client.location}</p>
                  </div>
                </div>

                {/* Hover Action Button */}
                <div className="absolute top-6 right-6 z-30 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="text-white w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
