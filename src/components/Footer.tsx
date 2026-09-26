import React from 'react';
import { ACADEMIC_INFO } from '../data/essayData';
import { Trees, GraduationCap, Heart, BookOpen, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-14 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 pb-10 border-b border-slate-800">
          
          {/* Column 1: Brand & Theme */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-sage-600 flex items-center justify-center text-white font-bold">
                <Trees className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-lg text-cream-50">
                {ACADEMIC_INFO.title}
              </span>
            </div>
            
            <p className="font-serif italic text-sm text-sage-400">
              “{ACADEMIC_INFO.subtitle}”
            </p>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Investigación filosófica sobre el valor incondicional de la dignidad humana y el respeto en la convivencia ciudadana y escolar.
            </p>
          </div>

          {/* Column 2: Autores Grupo 4 */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-cream-200 mb-3 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-sage-400" />
              <span>Autores ({ACADEMIC_INFO.groupName})</span>
            </h4>
            <ul className="text-xs space-y-1.5 text-slate-400">
              {ACADEMIC_INFO.authors.map((author) => (
                <li key={author.name} className="hover:text-cream-100 transition-colors">
                  {author.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Institución */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-cream-200 mb-3">
              Información Académica
            </h4>
            <div className="text-xs text-slate-400 space-y-1 leading-relaxed">
              <p className="font-medium text-slate-200">{ACADEMIC_INFO.institution}</p>
              <p>{ACADEMIC_INFO.course}</p>
              <p>Docente: {ACADEMIC_INFO.teacher}</p>
              <p>{ACADEMIC_INFO.location}</p>
              <p className="text-[11px] text-sage-500 font-mono mt-1">{ACADEMIC_INFO.date}</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 {ACADEMIC_INFO.groupName} — {ACADEMIC_INFO.institution}. Todos los derechos reservados.</p>
          <div className="flex items-center space-x-1 text-sage-400">
            <span>Construyendo un Espejo de Paz en la Comunidad Educativa</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
