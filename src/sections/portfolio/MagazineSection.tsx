import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { PdfViewerModal } from '../../components/ui/PdfViewerModal';

const magazines = [
  {
    id: 1,
    title: 'Quantum Supremacy Issue',
    pdfUrl: '/projects/magazines/quantum-supremacy-issue.pdf',
    date: 'July 2026',
    category: 'Editorial',
    color: 'bg-[#F7F7F7]',
    textColor: 'text-[#0B0909]'
  },
  {
    id: 2,
    title: 'Oasis Secret Issue',
    pdfUrl: '/projects/magazines/oasis-secret-issue.pdf',
    date: 'August 2026',
    category: 'Magazine',
    color: 'bg-[#0B0909]',
    textColor: 'text-[#F7F7F7]'
  }
];

export function MagazineSection() {
  const [selectedPdf, setSelectedPdf] = useState<{ url: string; title: string } | null>(null);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#929AAB]/20">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0B0909]">
            Featured Publications
          </h2>
          <p className="text-[#929AAB] text-lg max-w-xl">
            Dive into full-length editorial spreads and magazine layouts. Read the complete issues directly in your browser.
          </p>
        </div>

        <div className="flex-1 w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-[3/4]">
            {magazines.map((mag, idx) => (
              <motion.div
                key={mag.id}
                initial={{ opacity: 0, y: 50, rotate: 0 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  rotate: idx === 0 ? -6 : 6,
                  x: idx === 0 ? -20 : 20
                }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: idx === 0 ? -8 : 8,
                  zIndex: 20 
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={`absolute inset-0 ${mag.color} border border-[#929AAB]/30 rounded-lg shadow-2xl p-8 flex flex-col justify-between cursor-pointer group origin-bottom`}
                onClick={() => setSelectedPdf({ url: mag.pdfUrl, title: mag.title })}
              >
                {/* Magazine Cover Content Mockup */}
                <div className="space-y-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${mag.id === 1 ? 'bg-[#0B0909] text-[#F7F7F7]' : 'bg-[#F7F7F7] text-[#0B0909]'}`}>
                    {mag.category}
                  </span>
                  <h3 className={`text-4xl font-black uppercase leading-none tracking-tighter ${mag.textColor}`}>
                    {mag.title.split(' ').map((word, i) => <div key={i}>{word}</div>)}
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className={`w-full h-px ${mag.id === 1 ? 'bg-[#0B0909]/20' : 'bg-[#F7F7F7]/20'}`} />
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-medium ${mag.textColor} opacity-60`}>
                      {mag.date}
                    </span>
                    <button 
                      className={`flex items-center gap-2 text-sm font-bold ${mag.textColor} group-hover:underline underline-offset-4`}
                    >
                      <BookOpen size={16} />
                      Read full issue &rarr;
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <PdfViewerModal
        isOpen={selectedPdf !== null}
        pdfUrl={selectedPdf?.url || ''}
        title={selectedPdf?.title || ''}
        onClose={() => setSelectedPdf(null)}
      />
    </section>
  );
}
