import { motion } from 'motion/react';
import { SectionHeading } from '../components/ui/SectionHeading';

const educationData = [
  {
    degree: 'Masters of Business Administration (MBA)',
    field: 'Finance (Pursuing)',
    institution: 'Pondicherry University',
    period: '2026 – 2027',
  },
  {
    degree: 'Graduation in Islamic Studies & Arabic Language',
    field: 'WAFY Curriculum',
    institution: 'Coordination of Islamic Colleges (WAFY)',
    period: '2020 – 2026',
  },
  {
    degree: 'Bachelor of Commerce (B.Com)',
    field: 'Finance & Commerce',
    institution: 'Calicut University',
    period: '2023 – 2025',
  },
  {
    degree: 'Diploma in Urdu Language',
    field: 'Urdu Language & Literature',
    institution: 'NCPUL (National Council for Promotion of Urdu Language)',
    period: '2024',
  },
  {
    degree: 'Financial and Foreign Accounting',
    field: 'Accounting Certification',
    institution: 'Athena Erudition',
    period: '2026',
  },
  {
    degree: 'Investor Awareness Certification',
    field: 'Financial Markets & Regulatory Standards',
    institution: 'SEBI',
    period: '2026',
  }
];

export function EducationSection() {
  return (
    <section id="education" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="Education" subtitle="Academic & Certifications" align="left" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 rounded-2xl glass-panel hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-[var(--glass-border)] text-[var(--accent)] text-xs font-semibold tracking-widest mb-4">
                  {edu.period}
                </span>
                <h4 className="text-xl text-[var(--text-primary)] font-bold leading-tight mb-2 group-hover:text-[var(--accent)] transition-colors duration-300">
                  {edu.degree}
                </h4>
                <p className="text-[var(--text-secondary)] font-medium text-sm mb-1">{edu.field}</p>
                {edu.institution && (
                  <p className="text-[var(--text-secondary)] text-sm">{edu.institution}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
