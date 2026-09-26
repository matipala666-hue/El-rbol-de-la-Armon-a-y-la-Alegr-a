import React from 'react';
import { GraduationCap, Users, Building2, Calendar, HelpCircle, ArrowDown, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { ACADEMIC_INFO } from '../data/essayData';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative overflow-hidden py-14 lg:py-20 bg-gradient-to-b from-sage-50/70 via-cream-50 to-cream-100/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 transition-colors">
      
      {/* Decorative Aura Blobs */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-sage-200/50 dark:bg-sage-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-cream-300/40 dark:bg-amber-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sage-100/40 dark:bg-slate-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Academic Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage-100 dark:bg-slate-800 border border-sage-200 dark:border-slate-700 text-sage-800 dark:text-sage-300 text-xs font-semibold uppercase tracking-wider mb-6 shadow-xs">
          <GraduationCap className="w-4 h-4 text-sage-600 dark:text-sage-400" />
          <span>{ACADEMIC_INFO.course} • {ACADEMIC_INFO.groupName}</span>
        </div>

        {/* Title */}
        <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-cream-50 mb-4 leading-tight">
          El Árbol de la Armonía <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-sage-700 via-sage-600 to-cream-500 bg-clip-text text-transparent dark:from-sage-300 dark:via-cream-200 dark:to-cream-400">
            y la Alegría
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="font-serif italic text-lg sm:text-2xl text-sage-700 dark:text-sage-300 max-w-3xl mx-auto mb-8 font-light">
          “{ACADEMIC_INFO.subtitle}”
        </p>

        {/* Central Question Callout Box */}
        <div className="max-w-3xl mx-auto bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-l-4 border-sage-600 dark:border-sage-400 rounded-r-2xl p-6 sm:p-8 shadow-xl mb-10 text-left relative transition-all hover:shadow-2xl">
          <div className="absolute top-4 right-4 text-sage-300 dark:text-slate-700">
            <HelpCircle className="w-10 h-10 opacity-30" />
          </div>
          <span className="text-xs font-bold text-sage-600 dark:text-sage-400 uppercase tracking-widest block mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Pregunta Central de Investigación
          </span>
          <p className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-cream-100 leading-snug">
            {ACADEMIC_INFO.centralQuestion}
          </p>
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="flex items-center gap-1 text-sage-700 dark:text-sage-300 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" /> Valor ontológico innato
            </span>
            <span className="flex items-center gap-1 text-sage-700 dark:text-sage-300 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" /> Diferenciar respeto de admiración
            </span>
            <span className="flex items-center gap-1 text-sage-700 dark:text-sage-300 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" /> Convivencia escolar sin exclusión
            </span>
          </div>
        </div>

        {/* Authors & Institutional Metadata Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left max-w-4xl mx-auto bg-sage-50/80 dark:bg-slate-900/60 p-5 rounded-2xl border border-sage-200/80 dark:border-slate-800 text-xs sm:text-sm shadow-sm backdrop-blur-sm">
          
          <div className="flex items-start space-x-3">
            <Users className="w-5 h-5 text-sage-600 dark:text-sage-400 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-bold block text-slate-900 dark:text-slate-100 mb-1">
                Integrantes (Grupo 4):
              </span>
              <ul className="text-slate-600 dark:text-slate-300 space-y-0.5 text-xs">
                {ACADEMIC_INFO.authors.map((author) => (
                  <li key={author.name} className="flex items-center justify-between">
                    <span className="font-medium">{author.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Building2 className="w-5 h-5 text-sage-600 dark:text-sage-400 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-bold block text-slate-900 dark:text-slate-100 mb-1">
                Institución Educativa:
              </span>
              <p className="text-slate-600 dark:text-slate-300 font-medium">
                {ACADEMIC_INFO.institution}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Docente Asesor:<br />
                <span className="text-slate-700 dark:text-slate-300 font-semibold">{ACADEMIC_INFO.teacher}</span>
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Calendar className="w-5 h-5 text-sage-600 dark:text-sage-400 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-bold block text-slate-900 dark:text-slate-100 mb-1">
                Localización y Entrega:
              </span>
              <p className="text-slate-600 dark:text-slate-300">
                {ACADEMIC_INFO.location}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {ACADEMIC_INFO.date}
              </p>
              <div className="mt-2 text-[11px] inline-flex items-center px-2 py-0.5 rounded bg-sage-200/60 dark:bg-slate-800 text-sage-800 dark:text-sage-300">
                Ensayo Académico Riguroso
              </div>
            </div>
          </div>

        </div>

        {/* Scroll CTA Navigation */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#arbol"
            className="bg-sage-600 hover:bg-sage-700 text-white font-medium px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center space-x-2 text-sm sm:text-base active:scale-95"
          >
            <span>Explorar Árbol de Conceptos</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
          <a
            href="#lector"
            className="bg-white dark:bg-slate-900 border border-sage-300 dark:border-slate-700 text-slate-800 dark:text-cream-100 hover:bg-cream-100 dark:hover:bg-slate-800 font-medium px-6 py-3 rounded-xl shadow-sm hover:shadow transition-all flex items-center space-x-2 text-sm sm:text-base"
          >
            <BookOpen className="w-4 h-4 text-sage-600 dark:text-sage-400" />
            <span>Leer Ensayo Completo</span>
          </a>
        </div>

      </div>
    </section>
  );
};
