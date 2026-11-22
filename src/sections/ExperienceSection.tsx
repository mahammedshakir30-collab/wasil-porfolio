import { motion } from 'motion/react';
import { SectionHeading } from '../components/ui/SectionHeading';

const experiences = [
  {
    title: 'FAAS Associate',
    organization: 'NJN Taxpert GCC, Calicut',
    period: 'Present (2026)',
    description: [
      'Prepared financial statements and reports in line with IFRS requirements.',
      'Supported audit, assurance, and financial documentation activities.',
      'Managed bookkeeping using Tally, Zoho Books, and QuickBooks.',
      'Performed account reconciliations and financial analysis using Advanced Excel.',
      'Created interactive financial dashboards and reports using Power BI.',
      'Supported VAT, GST, and income tax compliance activities.',
      'Reviewed financial data to identify discrepancies and maintained confidential records.',
      'Prepared presentations covering PESTEL, SWOT, competitor analysis, and recommendations.'
    ]
  },
  {
    title: 'Sales Member',
    organization: 'MJ Sports, Calicut',
    period: '5 Months (2026)',
    description: [
      'Customer handling, customer relationship management, and sales.',
      'Order & enquiry management with strong interpersonal communication.',
      'Stock & product inventory management and sales target achievement.'
    ]
  },
  {
    title: 'Freelance Graphic Designer',
    organization: 'Hattec Solutions (KSA), Adams Intl, MTSA Media, D3 Entertainments',
    period: '2025 – 2026',
    description: [
      'Designed social media posts, posters, multi-page brochures, banners & promotional creatives.',
      'Collaborated with multiple businesses and international organizations on branding projects.',
      'Managed client requirements, revisions, and timely delivery of high-quality visual assets.'
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
