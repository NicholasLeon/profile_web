'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, Sparkles } from 'lucide-react';
import { profile } from '@/lib/portofolio';

export default function Hero() {
  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const bioRef = useRef(null);
  const actionsRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(badgeRef.current, 
        { scale: 0.8, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.6, delay: 0.2 }
      )
      .fromTo(titleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.4"
      )
      .fromTo(bioRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(actionsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        "-=0.2"
      );

      gsap.to('.scroll-dot', {
        y: 8,
        repeat: -1,
        duration: 1.5,
        yoyo: true,
        ease: 'power1.inOut'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative bg-background"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-75 md:w-150 h-75 md:h-150 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-50 md:w-100 h-50 md:h-100 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center opacity-0" ref={badgeRef}>
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-8 text-sm text-muted-foreground">
              <Sparkles size={14} className="text-primary" />
              <span>Available for new projects</span>
            </div>
          </div>

          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-gradient leading-[1.1] mb-6 opacity-0"
          >
            {profile.name}
          </h1>

          <p 
            ref={bioRef}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 px-4"
          >
            {profile.bio}
          </p>
          <div 
            ref={actionsRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 px-4"
          >
            <button 
              onClick={scrollToProjects} 
              className="btn-primary w-full sm:w-auto px-8 py-4 text-base flex items-center justify-center gap-2 group"
            >
              View My Work
              <ArrowDown size={18} className="transition-transform group-hover:translate-y-1" />
            </button>
            <a 
              href="#contact" 
              className="btn-secondary w-full sm:w-auto px-8 py-4 text-base flex items-center justify-center"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0"
      >
      </div>
    </section>
  );
}