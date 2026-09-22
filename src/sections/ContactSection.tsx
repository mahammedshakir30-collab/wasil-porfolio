import { motion } from 'motion/react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { MagneticButton } from '../components/ui/MagneticButton';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import React from 'react';

export function ContactSection() {
  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const text = `Hi Wasil! I'm ${name} (${email}).\n\n${message}`;
    const whatsappUrl = `https://wa.me/918136962396?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="Get In Touch" subtitle="Contact" align="center" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-3xl font-light text-[var(--text-primary)] mb-6">
              Let's create something <span className="text-[var(--accent)] italic">extraordinary.</span>
            </h3>
            <p className="text-[var(--text-secondary)] mb-12 font-light leading-relaxed">
              Whether you need strategic financial guidance, a compelling brand identity, or exceptional leadership coordination, I am ready to collaborate.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-[var(--glass-border)] flex items-center justify-center group-hover:bg-[var(--accent)] transition-colors">
                  <Phone className="w-6 h-6 text-[var(--accent)] group-hover:text-[var(--bg-start)] transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-secondary)] uppercase tracking-widest mb-1">Phone / WhatsApp</p>
                  <a href="tel:+918136962396" className="text-lg text-[var(--text-primary)] font-medium hover:text-[var(--accent)] transition-colors">+91 8136962396</a>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-[var(--glass-border)] flex items-center justify-center group-hover:bg-[var(--accent)] transition-colors">
                  <Mail className="w-6 h-6 text-[var(--accent)] group-hover:text-[var(--bg-start)] transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-secondary)] uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:wasilhassan654@gmail.com" className="text-lg text-[var(--text-primary)] font-medium hover:text-[var(--accent)] transition-colors">wasilhassan654@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-[var(--glass-border)] flex items-center justify-center group-hover:bg-[var(--accent)] transition-colors">
                  <MapPin className="w-6 h-6 text-[var(--accent)] group-hover:text-[var(--bg-start)] transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-secondary)] uppercase tracking-widest mb-1">Location</p>
                  <p className="text-lg text-[var(--text-primary)] font-medium">Kerala, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <form onSubmit={handleWhatsAppSubmit} className="p-8 md:p-12 rounded-3xl glass-panel border border-[var(--glass-border)] space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)] opacity-20 blur-[50px] rounded-full pointer-events-none" />
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-[var(--text-secondary)] ml-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="John Doe" 
                  className="w-full bg-[var(--glass-fill)] border border-[var(--glass-border)] rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-[16px] text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent)] transition-colors min-tap-target"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-[var(--text-secondary)] ml-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="john@example.com" 
                  className="w-full bg-[var(--glass-fill)] border border-[var(--glass-border)] rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-[16px] text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent)] transition-colors min-tap-target"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-[var(--text-secondary)] ml-2">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  placeholder="How can I help you?" 
                  className="w-full bg-[var(--glass-fill)] border border-[var(--glass-border)] rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-[16px] text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none min-tap-target"
                />
              </div>

              <MagneticButton className="w-full bg-[var(--accent)] text-[var(--bg-start)] hover:bg-[var(--text-primary)] flex justify-center mt-4 transition-colors">
                <button type="submit" className="flex items-center gap-2">
                  Send Message
                  <Send size={16} />
                </button>
              </MagneticButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
