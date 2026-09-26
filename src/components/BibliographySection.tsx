import React, { useState } from 'react';
import { CITATIONS } from '../data/essayData';
import { BookOpen, Copy, Check, ExternalLink, FileCheck, Share2, Sparkles } from 'lucide-react';

interface BibliographySectionProps {
  onShowToast: (message: string) => void;
}

export const BibliographySection: React.FC<BibliographySectionProps> = ({ onShowToast }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const handleCopySingle = (citation: typeof CITATIONS[0]) => {
    const text = `${citation.authorYear}. ${citation.title}. ${citation.source}. Obtenido de: ${citation.url}`;
    navigator.clipboard.writeText(text);
    setCopiedId(citation.id);
    onShowToast(`Cita de ${citation.authorYear} copiada.`);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleCopyAll = () => {
    const text = CITATIONS.map(
      (c) => `${c.authorYear}. ${c.title}. ${c.source}. Recuperado de: ${c.url}`
    ).join('\n\n');

    navigator.clipboard.writeText(text);
    setCopiedAll(true);
    onShowToast("Todas las referencias APA copiadas al portapapeles.");
    setTimeout(() => setCopiedAll(false), 2500);
  };

  return (
    <section id="bibliografia" className="py-16 lg:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-sage-600 dark:text-sage-400">
            Fuentes Teóricas & Rigor Académico
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-cream-50 mt-1">
            Referencias Bibliográficas (APA)
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Corpus bibliográfico consultado y analizado por el Grupo 4 en su investigación.
          </p>
        </div>

        <button
          onClick={handleCopyAll}
          className="px-4 py-2.5 rounded-xl bg-sage-600 hover:bg-sage-700 text-white font-medium text-xs flex items-center space-x-2 shadow-sm transition-all active:scale-95"
        >
          {copiedAll ? <Check className="w-4 h-4 text-cream-200" /> : <Copy className="w-4 h-4" />}
          <span>Copiar Todas las Citas (APA)</span>
        </button>
      </div>

      {/* Citations List */}
      <div className="space-y-4">
        {CITATIONS.map((cite) => (
          <div
            key={cite.id}
            className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-sage-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
          >
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center gap-2">
                <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-cream-50">
                  {cite.authorYear}
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-sage-100 dark:bg-slate-800 text-sage-800 dark:text-sage-300 font-mono">
                  {cite.source}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-serif italic">
                {cite.title}
              </p>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {cite.annotation}
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2 flex-shrink-0 self-end md:self-center">
              <button
                onClick={() => handleCopySingle(cite)}
                title="Copiar referencia individual"
                className="p-2 rounded-xl bg-sage-50 dark:bg-slate-900 hover:bg-sage-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors text-xs flex items-center gap-1 border border-sage-200/50 dark:border-slate-800"
              >
                {copiedId === cite.id ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span className="hidden sm:inline">Copiar</span>
              </button>

              <a
                href={cite.url}
                target="_blank"
                rel="noopener noreferrer"
                title="Abrir fuente original en nueva pestaña"
                className="p-2 rounded-xl bg-sage-600 hover:bg-sage-700 text-white transition-colors text-xs flex items-center gap-1 shadow-xs"
              >
                <span>Ver Fuente</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
