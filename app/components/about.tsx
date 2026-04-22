'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile } from '@/lib/portofolio';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRef = useRef(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    },
    { threshold: 0.2 }
  );

  if (cardRef.current) {
    observer.observe(cardRef.current);
  }

  return () => observer.disconnect();
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
            className={`glass-card p-8 md:p-12 shadow-2xl transition-all duration-700 ease-out
              ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
            `}
          >
            <div 
              ref={textRef} 
              className="prose prose-invert prose-lg max-w-none"
            >
              {paragraphs.map((paragraph, index) => (
                <p 
                  key={index}
                  className={`text-muted-foreground leading-relaxed mb-6 last:mb-0
                    transition-all duration-500 ease-out
                    ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
                  `}
                  style={{ transitionDelay: `${index * 150}ms` }}
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