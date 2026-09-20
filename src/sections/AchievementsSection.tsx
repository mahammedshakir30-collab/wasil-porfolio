import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';

function AchievementCounter({ value, label }: { value: number; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;
      let totalDuration = 2000;
      let incrementTime = (totalDuration / end);
      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  return (
    <div ref={ref} className="text-center p-8 rounded-2xl glass-panel border border-[var(--glass-border)] hover:border-[var(--accent)] hover:scale-[1.02] transition-all duration-300">
      <div className="text-5xl md:text-6xl font-bold text-gradient mb-2">{count}+</div>
      <div className="text-sm uppercase tracking-widest text-[var(--text-secondary)]">{label}</div>
    </div>
  );
}

export function AchievementsSection() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="Impact" subtitle="Achievements & Roles" align="center" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16">
          <AchievementCounter value={3} label="Leadership Roles" />
          <AchievementCounter value={10} label="Volunteer Events" />
          <AchievementCounter value={5} label="Certificates" />
          <AchievementCounter value={15} label="Community Services" />
        </div>
      </div>
    </section>
  );
}
