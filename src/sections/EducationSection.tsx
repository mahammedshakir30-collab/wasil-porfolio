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
    degree: 'Diploma in Urdu Language',
    field: 'NCPUL, Central Government Based',
    institution: '',
    period: '2026 – 2027',
  },
  {
    degree: 'Bachelor of Commerce (BCOM)',
    field: 'Commerce',
    institution: 'Calicut University',
    period: '2023 – 2025',
  },
  {
    degree: 'Graduation in Islamic Education (WAFY)',
    field: 'Islamic Education',
    institution: 'Coordination of Islamic Colleges',
    period: '2021 – 2026',
  },
  {
    degree: 'Higher Secondary Education',
    field: 'Commerce, Kerala State Board',
    institution: 'Sir Syed Higher Secondary School, Thaliparamba',
    period: '2019 – 2020',
  },
  {
    degree: 'High School',
    field: 'Kerala State Board',
    institution: 'Thanbeehul Islam TIHSS, Naimarmoola',
    period: '2017 – 2018',
  },
  {
    degree: 'Primary & Secondary Education',
    field: 'CBSE Affiliated, Delhi',
    institution: 'International Indian School Dammam, KSA',
    period: '2009 – 2016',
  }
];

export function EducationSection() {
  return (
    <section id="education" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="Education" subtitle="Academic Background" align="left" />

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
