'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Github, Linkedin, Instagram, ArrowUpRight, Globe } from 'lucide-react';
import { socials } from '@/lib/portofolio';

gsap.registerPlugin(ScrollTrigger);

const IconRenderer = ({ name, size = 22 }: { name: string, size?: number }) => {
  switch (name) {
    case 'Mail': return <Mail size={size} />;
    case 'Linkedin': return <Linkedin size={size} />;
    case 'Github': return <Github size={size} />;
    case 'Instagram': return <Instagram size={size} />;
    default: return <Globe size={size} />;
  }
};

export default function ContactSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );

      if (socialsRef.current) {
        const cards = socialsRef.current.children;
        gsap.fromTo(cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: socialsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div ref={headerRef} className="mb-16 opacity-0">
            <h2 className="section-heading mb-4 font-bold text-3xl">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              I’m always open to discussing new projects, creative ideas, or opportunities 
              to be part of your visions. Let's build something amazing together.
            </p>
          </div>
          <div ref={socialsRef} className="grid sm:grid-cols-2 gap-5">
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-card-hover p-6 flex items-center justify-between opacity-0 transition-all duration-300"
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    <IconRenderer name={social.icon} />
                  </div>
                  
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-muted-foreground/60 block mb-1">
                      {social.label}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">
                      {social.name}
                    </h3>
                  </div>
                </div>

                <div className="text-muted-foreground/20 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                  <ArrowUpRight size={24} />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-medium uppercase tracking-widest">Available for new opportunities</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground/60">
              <Globe size={14} />
              <span>Based in Semarang, Indonesia (UTC+7)</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}