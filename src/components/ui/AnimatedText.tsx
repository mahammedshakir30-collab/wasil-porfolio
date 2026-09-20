import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText = ({ text, className = '' }: AnimatedTextProps) => {
  const container = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.8', 'end 0.2']
  });

  const characters = text.split('');

  return (
    <p ref={container} className={className}>
      {characters.map((char, i) => {
        const start = i / characters.length;
        const end = start + (1 / characters.length);
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
        
        return (
          <span key={i} className="relative inline-block whitespace-pre">
            <span className="invisible">{char}</span>
            <motion.span style={{ opacity }} className="absolute left-0 top-0">
              {char}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
};
