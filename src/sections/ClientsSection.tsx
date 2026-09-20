import { motion } from 'motion/react';
import { SectionHeading } from '../components/ui/SectionHeading';

const clients = [
  "Hattec Solutions (Dammam, KSA)",
  "HAT Supplies (Dammam, KSA)",
  "Adams International (Kochi)",
  "Dream Catcher Entertainments (Trivandrum)",
  "MTSA Media (Kasaragod)",
  "Showrider Entertainments",
  "Expertzlab Technologies (Kochi)",
  "D3 Entertainments (Trivandrum)",
  "Skyline Academy",
  "Klassmate Learning",
  "Knowlix Learning LLP",
  "I Cell Mobiles (Chokli, Calicut)",
  "Fly Wide Holidays (Kochi, Kottayam)"
];

export function ClientsSection() {
  return (
    <section id="clients" className="py-24 border-t border-[var(--glass-border)] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <SectionHeading title="Clients" subtitle="Organizations I've Worked With" align="center" />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full flex overflow-hidden group pause-on-hover"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
        {/* Render 2 sets for seamless loop */}
        {[...Array(2)].map((_, index) => (
          <div
            key={index}
            className="flex whitespace-nowrap gap-12 md:gap-24 px-6 md:px-12 items-center min-w-max animate-marquee"
          >
            {clients.map((client, i) => (
              <span 
                key={i}
                className="text-xl md:text-2xl font-bold tracking-widest uppercase text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 cursor-default select-none"
              >
                {client}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
