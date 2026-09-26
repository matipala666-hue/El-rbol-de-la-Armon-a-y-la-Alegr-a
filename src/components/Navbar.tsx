import React, { useState, useEffect } from 'react';
import { Trees, BookOpen, Volume2, VolumeX, Menu, X, Sparkles, Scale, GraduationCap } from 'lucide-react';
import { ACADEMIC_INFO } from '../data/essayData';

interface NavbarProps {
  isPlayingAudio: boolean;
  onToggleAudio: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  isPlayingAudio,
  onToggleAudio,
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#arbol', label: 'Árbol Interactivo' },
    { href: '#conceptos', label: 'Ejes Teóricos' },
    { href: '#lector', label: 'Ensayo Completo' },
    { href: '#dilema', label: 'Dilema & Voto' },
    { href: '#ejemplos', label: 'Casos Escolares' },
    { href: '#espejo', label: 'Espejo de Paz' },
    { href: '#bibliografia', label: 'Bibliografía' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-50/95 dark:bg-slate-950/95 backdrop-blur-md shadow-sm border-b border-sage-200/70 dark:border-slate-800'
          : 'bg-cream-50/80 dark:bg-slate-950/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Identity */}
        <a href="#hero" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-sage-600 dark:bg-sage-700 text-cream-50 flex items-center justify-center font-heading font-bold text-lg shadow-md group-hover:scale-105 group-hover:bg-sage-700 transition-all">
            <Trees className="w-5 h-5 text-cream-100" />
          </div>
          <div>
            <span className="font-heading font-bold text-slate-900 dark:text-cream-50 text-sm sm:text-base tracking-wide block leading-none group-hover:text-sage-700 dark:group-hover:text-sage-300 transition-colors">
              {ACADEMIC_INFO.title}
            </span>
            <span className="text-[11px] text-sage-700 dark:text-sage-400 font-sans font-medium flex items-center gap-1 mt-0.5">
              <span>UE Santa María Eufrasia</span>
              <span className="text-slate-400">•</span>
              <span className="text-cream-500 font-semibold">{ACADEMIC_INFO.groupName}</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-xs xl:text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-3 py-1.5 rounded-lg transition-colors duration-200 ${
                activeSection === item.href.replace('#', '')
                  ? 'bg-sage-100 dark:bg-slate-800 text-sage-800 dark:text-sage-300 font-semibold'
                  : 'text-slate-700 dark:text-slate-300 hover:text-sage-700 dark:hover:text-sage-300 hover:bg-sage-50 dark:hover:bg-slate-900'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center space-x-2">
          
          {/* Audio Synthesizer Toggle */}
          <button
            onClick={onToggleAudio}
            title={isPlayingAudio ? "Pausar narración de voz" : "Escuchar síntesis auditiva del ensayo"}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition-all shadow-sm ${
              isPlayingAudio
                ? 'bg-amber-600 text-white animate-pulse'
                : 'bg-sage-100 dark:bg-slate-800 text-sage-800 dark:text-sage-300 hover:bg-sage-200 dark:hover:bg-slate-700'
            }`}
          >
            {isPlayingAudio ? (
              <>
                <VolumeX className="w-4 h-4" />
                <span className="hidden sm:inline">Pausar</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-sage-600 dark:text-sage-400" />
                <span className="hidden sm:inline">Voz</span>
              </>
            )}
          </button>

          {/* Quick Jump to Essay */}
          <a
            href="#lector"
            className="bg-sage-600 hover:bg-sage-700 text-white text-xs sm:text-sm px-3.5 py-1.5 rounded-lg font-medium shadow-sm transition-transform active:scale-95 flex items-center space-x-1.5"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Leer Ensayo</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-sage-100 dark:hover:bg-slate-800"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-cream-50/98 dark:bg-slate-950/98 border-b border-sage-200 dark:border-slate-800 px-4 pt-3 pb-6 shadow-xl backdrop-blur-lg">
          <div className="space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-sage-100 dark:hover:bg-slate-800 hover:text-sage-700"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-sage-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
            <span>{ACADEMIC_INFO.course}</span>
            <span className="font-semibold text-sage-600 dark:text-sage-400">Grupo 4</span>
          </div>
        </div>
      )}
    </header>
  );
};
