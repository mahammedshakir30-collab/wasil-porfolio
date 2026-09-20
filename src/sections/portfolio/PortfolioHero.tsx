import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

function Counter({ value, label, suffix = '+' }: { value: number; label: string; suffix?: string }) {
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
    <div ref={ref} className="flex flex-col">
      <div className="text-4xl md:text-6xl font-bold text-soft-white mb-2 font-sans tracking-tighter">
        {count}{suffix}
      </div>
      <div className="text-sm text-white/50 uppercase tracking-widest font-medium">
        {label}
      </div>
    </div>
  );
}

export function PortfolioHero({ totalItems }: { totalItems: number }) {
  return (
    <div className="relative pt-32 pb-24 border-b border-white/5 overflow-hidden">
      {/* Background Animated Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[50%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-warm-gold/5 blur-[120px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[50%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-white/5 blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-warm-gold" />
            <span className="text-warm-gold uppercase tracking-[0.3em] text-xs md:text-sm font-semibold">
              Selected Works
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-soft-white mb-8 leading-none">
            Creative <br/> <span className="text-white/40 italic">Portfolio</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/60 max-w-2xl font-light leading-relaxed mb-20">
            A curated collection of branding, editorial, advertising, social media, print, and digital campaigns crafted with precision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-12 border-t border-white/10"
        >
          <Counter value={totalItems} label="Creative Designs" />
          <Counter value={10} label="Brands" suffix="+" />
          <Counter value={6} label="Categories" />
          <Counter value={2} label="yrs — Graphic Design" suffix="+" />
        </motion.div>
      </div>
    </div>
  );
}
