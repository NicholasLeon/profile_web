'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '@/lib/portofolio';
import { 
  Atom, Globe, Code2, Palette, Zap, 
  Terminal, Coffee, FileCode, Cpu, 
  Database, Move, Layers 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SkillIcon = ({ name, className }: { name: string, className?: string }) => {
  const icons: Record<string, React.ReactNode> = {
    Atom: <Atom className={className} />,
    Globe: <Globe className={className} />,
    Code2: <Code2 className={className} />,
    Palette: <Palette className={className} />,
    Zap: <Zap className={className} />,
    Terminal: <Terminal className={className} />,
    Coffee: <Coffee className={className} />,
    FileCode: <FileCode className={className} />,
    Cpu: <Cpu className={className} />,
    Database: <Database className={className} />,
    Move: <Move className={className} />,
  };
  return icons[name] || <Layers className={className} />;
};

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const categories = Array.from(new Set(skills.map(s => s.category)));

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        const allItems = cardsRef.current.querySelectorAll('.skill-item');
        gsap.fromTo(allItems,
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 85%',
            }
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Technical SKills</h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              A comprehensive list of technologies and tools I use to craft high-quality digital experiences.
            </p>
          </div>

          <div ref={cardsRef} className="space-y-20">
            {categories.map((cat) => {
                const categorySkills = skills
                    .filter(s => s.category === cat)
                    .sort((a, b) => a.order - b.order);

                return (
                    <div key={cat} className="space-y-8">
                        <div className="flex items-center gap-4">
                            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-primary/80 whitespace-nowrap">
                                {cat}
                            </h3>
                            <div className="h-px w-full bg-linear-to-r from-primary/20 to-transparent" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {categorySkills.map((skill) => (
                                <div 
                                    key={skill.id} 
                                    className={`skill-item group relative p-5 rounded-2xl transition-all duration-300 border 
                                        ${skill.level === 'Beginner' 
                                            ? 'bg-secondary/5 border-dashed border-white/10 opacity-60' 
                                            : 'bg-secondary/20 border-white/5 hover:border-primary/40 hover:bg-secondary/30'
                                        }`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors
                                            ${skill.level === 'Expert' ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground' : 'bg-white/5 text-muted-foreground'}
                                        `}>
                                            <SkillIcon name={skill.icon} className="w-5 h-5" />
                                        </div>
                                        
                                        <div className="grow">
                                            <div className="flex justify-between items-start">
                                                <h4 className="font-bold text-foreground leading-none">{skill.name}</h4>
                                                <span className="text-[9px] uppercase font-black tracking-tighter opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all">
                                                    {skill.level}
                                                </span>
                                            </div>
                                            <p className="text-[10px] text-muted-foreground mt-2 leading-none uppercase tracking-wider font-medium">
                                                {skill.category}
                                                </p>
                                            </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}