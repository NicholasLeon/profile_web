'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';
import { usePortfolioStore } from '../../store/portofolio';
import { projects } from '@/lib/portofolio';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

      if (gridRef.current) {
        const cards = gridRef.current.children;
        gsap.fromTo(cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: gridRef.current,
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
    <section id="projects" ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div ref={headerRef} className="mb-12 opacity-0">
            <h2 className="section-heading mb-4 font-bold text-3xl">Projects</h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              
            </p>
          </div>
          <div 
            ref={gridRef}
            className="grid md:grid-cols-2 gap-6"
          >
            {projects.map((project) => (
              <article
                key={project.id}
                className="group glass-card-hover overflow-hidden opacity-0 flex flex-col"
              >
                <div className="aspect-video bg-secondary/30 relative overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-secondary/50">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-lg bg-primary/20" />
                    </div>
                  </div>
                </div>

                <div className="p-6 grow flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      {project.repoUrl && (
                        <a href={project.repoUrl} target="_blank" className="p-2 text-muted-foreground hover:text-foreground">
                          <Github size={18} />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" className="p-2 text-muted-foreground hover:text-foreground">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold bg-secondary/80 text-muted-foreground border border-white/5 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}