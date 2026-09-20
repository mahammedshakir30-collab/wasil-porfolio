import { motion } from 'motion/react';
import { SectionHeading } from '../components/ui/SectionHeading';

const skillCategories = [
  {
    title: 'Management & Operations',
    skills: [
      { name: 'Project & Operations Management', level: 90 },
      { name: 'Leadership & Supervision', level: 95 },
      { name: 'Time Management', level: 85 },
      { name: 'Communication', level: 90 },
      { name: 'Cultural Awareness', level: 80 },
    ]
  },
  {
    title: 'Creative & Technical',
    skills: [
      { name: 'Adobe Photoshop', level: 85 },
      { name: 'Adobe InDesign', level: 80 },
      { name: 'Microsoft Office Suite', level: 95 },
      { name: 'Computer Proficiency', level: 90 },
    ]
  }
];

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  return (
    <div className="mb-6 group">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-[var(--text-primary)] tracking-wide group-hover:text-[var(--accent)] transition-colors">{name}</span>
        <span className="text-xs text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">{level}%</span>
      </div>
      <div className="h-[2px] w-full bg-[var(--glass-border)] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="h-full bg-[var(--accent)]"
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="Expertise" subtitle="Skills & Competencies" align="center" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 max-w-5xl mx-auto mt-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.08 }}
            >
              <h3 className="text-xl text-[var(--text-primary)] font-semibold mb-10 pb-4 border-b border-[var(--glass-border)] tracking-widest uppercase">
                {category.title}
              </h3>
              
              <div>
                {category.skills.map((skill, index) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
