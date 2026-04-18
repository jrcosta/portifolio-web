'use client';

import { useState } from 'react';
import { Menu, X, Terminal, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, href: '#hero' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.experience, href: '#projects' },
    { name: t.nav.labs, href: '#labs' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-[rgba(10,10,10,0.85)] backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-accent-primary p-2 bg-white/5 rounded-lg group-hover:bg-accent-primary/10 transition-colors">
              <Terminal size={24} />
            </span>
            <span className="font-mono text-xl font-bold tracking-tighter">
              eneri<span className="text-accent-primary">.dev</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                <span className="text-accent-primary opacity-50 mr-1">&lt;</span>
                {link.name}
                <span className="text-accent-primary opacity-50 ml-1">/&gt;</span>
              </a>
            ))}

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 hover:bg-white/5 transition-all text-sm font-mono text-gray-400 hover:text-white"
              aria-label="Toggle language"
            >
              <Globe size={16} />
              <span>{language.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-xs font-mono text-gray-400"
              aria-label="Toggle language"
            >
              <Globe size={14} />
              <span>{language.toUpperCase()}</span>
            </button>
            <button
              className="text-white hover:text-accent-primary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-bg-secondary border-b border-white/5 p-4 flex flex-col gap-4 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-gray-300 hover:text-accent-primary py-2 block border-l-2 border-transparent hover:border-accent-primary pl-4 transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
