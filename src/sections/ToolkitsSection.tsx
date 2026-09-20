import { SiZoho, SiQuickbooks } from 'react-icons/si';
import { 
  TbBrandAdobePhotoshop, 
  TbBrandAdobeIllustrator, 
  TbBrandAdobeIndesign,
  TbBrandOpenai,
  TbBrandOffice,
  TbFileExcel
} from 'react-icons/tb';

const designTools = [
  { name: 'Adobe Photoshop', icon: TbBrandAdobePhotoshop },
  { name: 'Adobe Illustrator', icon: TbBrandAdobeIllustrator },
  { name: 'Adobe InDesign', icon: TbBrandAdobeIndesign },
  { name: 'ChatGPT', icon: TbBrandOpenai },
  { name: 'Canva', icon: null },
  { name: 'Midjourney', icon: null },
];

const financeTools = [
  { name: 'Microsoft Office', icon: TbBrandOffice },
  { name: 'Zoho', icon: SiZoho },
  { name: 'Microsoft Excel', icon: TbFileExcel },
  { name: 'Quickbooks', icon: SiQuickbooks },
  { name: 'Tally', icon: null },
  { name: 'Power BI', icon: null },
];

export function ToolkitsSection() {
  return (
    <section className="py-16 md:py-24 border-b border-[var(--glass-border)] bg-[var(--bg-start)] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <h3 className="text-[var(--text-secondary)] text-sm tracking-[0.2em] uppercase font-semibold mb-4 text-center">
          Finance Skills
        </h3>
        <p className="text-[var(--text-primary)] text-center max-w-3xl mx-auto font-light leading-relaxed">
          Accounting, Auditing, GST, Income Tax, UAE/Saudi Arabia/Oman VAT and Corporate Tax.
        </p>
      </div>

      {/* STRIP 1 — Design Software */}
      <div className="mb-12">
        <div className="container mx-auto px-6 md:px-12 mb-6">
          <h4 className="text-[var(--text-primary)] font-medium tracking-wide">Design Toolkit</h4>
        </div>
        
        <div className="flex overflow-hidden group pause-on-hover relative">
          <div className="flex animate-marquee shrink-0 gap-6 px-3">
            {designTools.map((tool, index) => (
              <div key={index} className="flex items-center gap-3 px-6 py-3 rounded-full glass-panel border border-[var(--glass-border)] bg-[var(--glass-fill)] shrink-0 transition-colors duration-300 hover:border-[var(--text-primary)]">
                {tool.icon && <tool.icon className="text-[var(--text-secondary)] text-xl group-hover:text-[var(--text-primary)] transition-colors" />}
                <span className="text-[var(--text-primary)] font-medium text-sm whitespace-nowrap">{tool.name}</span>
              </div>
            ))}
          </div>
          <div className="flex animate-marquee shrink-0 gap-6 px-3" aria-hidden="true">
            {designTools.map((tool, index) => (
              <div key={`dup-${index}`} className="flex items-center gap-3 px-6 py-3 rounded-full glass-panel border border-[var(--glass-border)] bg-[var(--glass-fill)] shrink-0 transition-colors duration-300 hover:border-[var(--text-primary)]">
                {tool.icon && <tool.icon className="text-[var(--text-secondary)] text-xl group-hover:text-[var(--text-primary)] transition-colors" />}
                <span className="text-[var(--text-primary)] font-medium text-sm whitespace-nowrap">{tool.name}</span>
              </div>
            ))}
          </div>
          {/* Add a third set to ensure screen is filled if items are small */}
          <div className="flex animate-marquee shrink-0 gap-6 px-3" aria-hidden="true">
            {designTools.map((tool, index) => (
              <div key={`dup2-${index}`} className="flex items-center gap-3 px-6 py-3 rounded-full glass-panel border border-[var(--glass-border)] bg-[var(--glass-fill)] shrink-0 transition-colors duration-300 hover:border-[var(--text-primary)]">
                {tool.icon && <tool.icon className="text-[var(--text-secondary)] text-xl group-hover:text-[var(--text-primary)] transition-colors" />}
                <span className="text-[var(--text-primary)] font-medium text-sm whitespace-nowrap">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STRIP 2 — Finance Software */}
      <div>
        <div className="container mx-auto px-6 md:px-12 mb-6 text-right">
          <h4 className="text-[var(--text-primary)] font-medium tracking-wide">Finance Toolkit</h4>
        </div>
        
        <div className="flex overflow-hidden group pause-on-hover relative">
          <div className="flex animate-marquee-reverse shrink-0 gap-6 px-3">
            {financeTools.map((tool, index) => (
              <div key={index} className="flex items-center gap-3 px-6 py-3 rounded-full glass-panel border border-[var(--glass-border)] bg-[var(--glass-fill)] shrink-0 transition-colors duration-300 hover:border-[var(--text-primary)]">
                {tool.icon && <tool.icon className="text-[var(--text-secondary)] text-xl group-hover:text-[var(--text-primary)] transition-colors" />}
                <span className="text-[var(--text-primary)] font-medium text-sm whitespace-nowrap">{tool.name}</span>
              </div>
            ))}
          </div>
          <div className="flex animate-marquee-reverse shrink-0 gap-6 px-3" aria-hidden="true">
            {financeTools.map((tool, index) => (
              <div key={`dup-${index}`} className="flex items-center gap-3 px-6 py-3 rounded-full glass-panel border border-[var(--glass-border)] bg-[var(--glass-fill)] shrink-0 transition-colors duration-300 hover:border-[var(--text-primary)]">
                {tool.icon && <tool.icon className="text-[var(--text-secondary)] text-xl group-hover:text-[var(--text-primary)] transition-colors" />}
                <span className="text-[var(--text-primary)] font-medium text-sm whitespace-nowrap">{tool.name}</span>
              </div>
            ))}
          </div>
          {/* Add a third set to ensure screen is filled if items are small */}
          <div className="flex animate-marquee-reverse shrink-0 gap-6 px-3" aria-hidden="true">
            {financeTools.map((tool, index) => (
              <div key={`dup2-${index}`} className="flex items-center gap-3 px-6 py-3 rounded-full glass-panel border border-[var(--glass-border)] bg-[var(--glass-fill)] shrink-0 transition-colors duration-300 hover:border-[var(--text-primary)]">
                {tool.icon && <tool.icon className="text-[var(--text-secondary)] text-xl group-hover:text-[var(--text-primary)] transition-colors" />}
                <span className="text-[var(--text-primary)] font-medium text-sm whitespace-nowrap">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
