import Hero from './components/Hero';
import { ToolkitsSection } from './sections/ToolkitsSection';
import { SkillsSection } from './sections/SkillsSection';
import { AboutSection } from './sections/AboutSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ClientsSection } from './sections/ClientsSection';
import { EducationSection } from './sections/EducationSection';
import { ServicesSection } from './sections/ServicesSection';
import { CreativePortfolioSection } from './sections/CreativePortfolioSection';
import { ContactSection } from './sections/ContactSection';
import Navbar from './components/Navbar';
import { Footer } from './components/ui/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { MotionConfig } from 'motion/react';

export default function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <div className="noise-overlay" />
      <Navbar />
      <main className="overflow-x-clip min-h-screen">
        <Hero />
        <ToolkitsSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ClientsSection />
        <EducationSection />
        <ServicesSection />
        <CreativePortfolioSection />
        <ContactSection />
      </main>
      </MotionConfig>
      <Footer />
    </ThemeProvider>
  );
}
