import { motion } from 'motion/react';
import { SectionHeading } from '../components/ui/SectionHeading';

const experiences = [
  {
    title: 'FAAS Associate',
    organization: 'NJN TAXPERT PRO ACC',
    period: 'Full-time',
    description: [
      'Finance & Accounts Executive — accounting, auditing, tax compliance support',
      'Graphic Designer — design work for the firm\'s internal/client materials'
    ]
  },
  {
    title: 'Union President',
    organization: 'MTSA Students Union - Kokkachal Wafy College',
    period: '2025 – 2026',
    description: [
      'Led student union operations, coordinating diverse activities and significantly improving organizational efficiency across academic and extracurricular programs.',
      'Organized various cultural events and competitions, successfully increasing student participation and overall campus engagement through structured planning.',
      'Facilitated clear and transparent communication channels between students and administration, ensuring smooth information flow and effective resolution of emerging issues.',
      'Managed team responsibilities and delegated tasks efficiently, consistently achieving institutional objectives and maintaining structured workflows.'
    ]
  },
  {
    title: 'Social Service Volunteer',
    organization: 'Coordination of Islamic Colleges',
    period: '2023 – 2026',
    description: [
      'Collaborated effectively with diverse teams to execute community service initiatives, addressing local needs and enhancing outreach impact.',
      'Organized impactful events and support programs, consistently benefiting community members through meticulous planning and coordination.',
      'Engaged directly with beneficiaries, proactively identifying specific community requirements and delivering appropriate, timely assistance.'
    ]
  },
  {
    title: 'Freelance Graphic Designer',
    organization: 'Various International Clients',
    period: 'Ongoing',
    description: [
      'Delivered premium graphic design, branding, and creative solutions for multiple clients including Hattec Solutions (Dammam KSA), HAT Supplies (Dammam KSA), and Adams International (Kochi).',
      'Designed impactful marketing materials for Dream Catcher Entertainments, MTSA Media, and Showrider Entertainments.',
      'Provided creative services for educational and tech institutions like Expertzlab, Skyline Academy, and Klassmate Learning.'
    ]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="Experience" subtitle="Professional Journey" align="center" />

        <div className="max-w-4xl mx-auto mt-20 relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-[var(--glass-border)] -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-[var(--accent)] shadow-[0_0_15px_var(--glass-shadow)] -translate-x-1/2 mt-2 md:mt-0 z-10" />

              {/* Content */}
              <div className="w-full md:w-[45%] pl-8 md:pl-0">
                <div className={`p-8 rounded-2xl glass-panel hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-300 group ${
                  index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                }`}>
                  <span className="text-[var(--accent)] text-sm tracking-widest uppercase font-medium block mb-2">{exp.period}</span>
                  <h4 className="text-2xl text-[var(--text-primary)] font-bold mb-1">{exp.title}</h4>
                  <p className="text-[var(--text-secondary)] mb-6 text-sm uppercase tracking-wider">{exp.organization}</p>
                  
                  <ul className={`space-y-3 text-[var(--text-secondary)] text-sm font-light leading-relaxed ${
                    index % 2 === 0 ? 'text-left' : 'md:text-right text-left'
                  }`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="group-hover:text-[var(--text-primary)] transition-colors">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
