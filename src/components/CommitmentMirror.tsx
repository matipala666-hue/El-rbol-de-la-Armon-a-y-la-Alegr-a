import React, { useState, useEffect } from 'react';
import { INITIAL_PEACE_LEAVES } from '../data/essayData';
import { PeaceCommitment } from '../types';
import { Leaf, Heart, PlusCircle, CheckCircle2, Sparkles, MessageCircle, User } from 'lucide-react';

interface CommitmentMirrorProps {
  onShowToast: (message: string) => void;
}

export const CommitmentMirror: React.FC<CommitmentMirrorProps> = ({ onShowToast }) => {
  const [leaves, setLeaves] = useState<PeaceCommitment[]>(() => {
    try {
      const saved = localStorage.getItem('arbol_armonia_leaves');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return INITIAL_PEACE_LEAVES;
  });

  const [authorName, setAuthorName] = useState('');
  const [gradeText, setGradeText] = useState('2do BGU');
  const [commitmentText, setCommitmentText] = useState('');
  const [selectedTag, setSelectedTag] = useState('Dignidad Humana');
  const [showForm, setShowForm] = useState(false);

  const tags = [
    'Dignidad Humana',
    'Escucha Activa',
    'Inclusión',
    'Asertividad',
    'Solidaridad'
  ];

  useEffect(() => {
    try {
      localStorage.setItem('arbol_armonia_leaves', JSON.stringify(leaves));
    } catch {
      // ignore
    }
  }, [leaves]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !commitmentText.trim()) {
      onShowToast('Por favor completa tu nombre y compromiso.');
      return;
    }

    const newLeaf: PeaceCommitment = {
      id: `leaf-${Date.now()}`,
      author: authorName.trim(),
      grade: gradeText.trim() || 'Estudiante',
      text: commitmentText.trim(),
      date: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' }),
      tag: selectedTag
    };

    setLeaves([newLeaf, ...leaves]);
    setAuthorName('');
    setCommitmentText('');
    setShowForm(false);
    onShowToast('¡Tu hoja de compromiso ha florecido en el árbol!');
  };

  return (
    <section id="espejo" className="py-16 lg:py-20 bg-cream-100/50 dark:bg-slate-900/50 border-t border-sage-200/70 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-200 dark:bg-slate-800 text-cream-800 dark:text-cream-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-cream-600 dark:text-cream-400" />
            <span>Praxis y Transformación Social</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-slate-900 dark:text-cream-50">
            El Espejo de Paz: Hojas de Compromiso
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            “Construyendo un Espejo de Paz”. Siembra tu propio compromiso de respeto incondicional para enriquecer el follaje del Árbol de la Armonía.
          </p>
        </div>

        {/* Action Button to Open Form */}
        <div className="text-center mb-10">
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="bg-sage-600 hover:bg-sage-700 text-white font-medium px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all inline-flex items-center space-x-2 text-sm active:scale-95"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Plantar mi Hoja de Compromiso</span>
            </button>
          ) : (
            <div className="max-w-xl mx-auto bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-3xl border border-sage-300 dark:border-slate-800 shadow-2xl text-left animate-fadeIn">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                <h3 className="font-bold text-base text-slate-900 dark:text-cream-50 flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-sage-600" />
                  <span>Nuevo Compromiso para el Espejo de Paz</span>
                </h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-xs text-slate-400 hover:text-slate-600"
                >
                  Cancelar
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Nombre o Iniciales *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Sofía Mendoza"
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-sage-50/50 dark:bg-slate-900 border border-sage-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-500 text-slate-800 dark:text-slate-100"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Curso o Rol
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. 2do BGU “A”"
                      value={gradeText}
                      onChange={(e) => setGradeText(e.target.value)}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-sage-50/50 dark:bg-slate-900 border border-sage-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-500 text-slate-800 dark:text-slate-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Eje del Compromiso
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <button
                        type="button"
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className={`px-3 py-1 text-xs rounded-lg font-medium transition-all ${
                          selectedTag === tag
                            ? 'bg-sage-600 text-white font-bold shadow-xs'
                            : 'bg-sage-100/70 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-sage-200'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Mi Compromiso Ético *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="¿Cómo practicarás el respeto y la dignidad incondicional en tu aula y familia? (Ej. Me comprometo a escuchar con serenidad cuando alguien piense diferente...)"
                    value={commitmentText}
                    onChange={(e) => setCommitmentText(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-sage-50/50 dark:bg-slate-900 border border-sage-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-500 text-slate-800 dark:text-slate-100"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-sage-600 hover:bg-sage-700 text-white font-semibold py-2.5 rounded-xl shadow-md transition-all text-xs sm:text-sm flex items-center justify-center space-x-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Publicar en el Árbol de la Armonía</span>
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Leaves Wall Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaves.map((leaf) => (
            <div
              key={leaf.id}
              className="bg-white dark:bg-slate-950 p-6 rounded-3xl border border-sage-200/80 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle leaf watermark */}
              <Leaf className="w-24 h-24 text-sage-100 dark:text-slate-900 absolute -right-6 -bottom-6 pointer-events-none opacity-40 group-hover:rotate-12 transition-transform duration-500" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-sage-100 dark:bg-slate-900 text-sage-800 dark:text-sage-300 border border-sage-200 dark:border-slate-800">
                    {leaf.tag}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {leaf.date}
                  </span>
                </div>

                <p className="font-serif italic text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4 relative z-10">
                  “{leaf.text}”
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs relative z-10">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-sage-200 dark:bg-slate-800 text-sage-700 dark:text-sage-300 flex items-center justify-center font-bold text-[11px]">
                    {leaf.author.charAt(0)}
                  </div>
                  <span className="font-bold text-slate-900 dark:text-slate-200">
                    {leaf.author}
                  </span>
                </div>
                {leaf.grade && (
                  <span className="text-slate-500 dark:text-slate-400 text-[11px]">
                    {leaf.grade}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
