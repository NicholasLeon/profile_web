'use client';

import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { menus } from '@/lib/portofolio';
import { usePortfolioStore } from '@/store/portofolio';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  
  const { activeSection, setActiveSection } = usePortfolioStore();

  useEffect(() => {
    gsap.fromTo(headerRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
  }, []);

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isMenuOpen) {
        gsap.fromTo(mobileMenuRef.current,
          { height: 0, opacity: 0 },
          { height: 'auto', opacity: 1, duration: 0.5, ease: 'power2.out' }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          height: 0, opacity: 0, duration: 0.3, ease: 'power2.in'
        });
      }
    }
  }, [isMenuOpen]);

  const scrollToSection = (slug: string) => {
    setActiveSection(slug);
    setIsMenuOpen(false);
    const element = document.getElementById(slug);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-t-0 rounded-t-none opacity-0"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="text-xl font-semibold text-gradient cursor-pointer"
          >
            <Image
    src="/logo.png"
    alt="Nicholas Leonard Logo"
    width={40}
    height={40}
    priority
    className="object-contain"
  />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {menus.filter(m => m.isActive).map((menu) => (
              <button
                key={menu.id}
                onClick={() => scrollToSection(menu.slug)}
                className={`text-sm font-medium transition-colors hover:text-foreground ${
                  activeSection === menu.slug ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {menu.title}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div 
          ref={mobileMenuRef} 
          className="md:hidden overflow-hidden h-0 opacity-0"
        >
          <nav className="flex flex-col gap-4 mt-4 pb-4 border-t border-border pt-4">
            {menus.filter(m => m.isActive).map((menu) => (
              <button
                key={menu.id}
                onClick={() => scrollToSection(menu.slug)}
                className={`text-left text-sm font-medium transition-colors ${
                  activeSection === menu.slug ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {menu.title}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}