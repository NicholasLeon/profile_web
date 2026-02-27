'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePortfolioStore } from '../../store/portofolio';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const { profile } = usePortfolioStore();
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRef = useRef(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );

      const paragraphs = textRef.current?.querySelectorAll('p');
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
        }
      });

      tl.fromTo(cardRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' }
      );

      if (paragraphs) {
        tl.fromTo(paragraphs,
          { opacity: 0, y: 20 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.5, 
            stagger: 0.15, 
            ease: 'power1.out' 
          },
          "-=0.4"
        );
      }
    }, sectionRef);

    return () => context.revert();
  }, []);

  const paragraphs = profile.aboutMe.split('\n\n');

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="max-h-screen flex items-center md:block"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 
            ref={headingRef} 
            className="section-heading mt-16 mb-2 opacity-0 text-3xl font-bold"
          >
            About Me
          </h2>
          <div 
            ref={cardRef} 
            className="glass-card p-8 md:p-12 opacity-0 shadow-2xl"
          >
            <div 
              ref={textRef} 
              className="prose prose-invert prose-lg max-w-none"
            >
              {paragraphs.map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-muted-foreground leading-relaxed mb-6 last:mb-0 opacity-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}