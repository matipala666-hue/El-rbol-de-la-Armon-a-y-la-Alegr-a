import React, { useState } from 'react';
import { SCHOOL_CASES } from '../data/essayData';
import { SchoolCase } from '../types';
import { 
  Baby, 
  Flame, 
  Users, 
  AlertCircle, 
  CheckCircle2, 
  Lightbulb, 
  HelpCircle, 
  GraduationCap, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface SchoolCasesProps {
  onShowToast: (message: string) => void;
}

export const SchoolCases: React.FC<SchoolCasesProps> = ({ onShowToast }) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(SCHOOL_CASES[0].id);
  const [userSelectedOption, setUserSelectedOption] = useState<{ [caseId: string]: number | null }>({
    'caso-1': null,
    'caso-2': null,
    'caso-3': null
  });

  const activeCase = SCHOOL_CASES.find((c) => c.id === selectedCaseId) || SCHOOL_CASES[0];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Baby':
        return Baby;
      case 'Flame':
        return Flame;
      default:
        return Users;
    }
  };

  const handleSelectOption = (caseId: string, index: number, isEthical: boolean) => {
    setUserSelectedOption((prev) => ({
      ...prev,
      [caseId]: index
    }));

    if (isEthical) {
      onShowToast("¡Excelente decisión ética basada en el ensayo!");
    } else {
      onShowToast("Revisa la retroalimentación ética.");
    }
  };

  return (
    <section id="ejemplos" className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-sage-600 dark:text-sage-400">
          Contexto Real en la UE Santa María Eufrasia
        </span>
        <h2 className="font-heading text-2xl sm:text-4xl font-bold text-slate-900 dark:text-cream-50 mt-1">
          Casos Prácticos en la Vida Escolar
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          Tres situaciones cotidianas identificadas por los autores del Grupo 4 donde se suele confundir el desacuerdo o la diferencia superficial con la pérdida del respeto.
        </p>
      </div>

      {/* Case Navigation Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        {SCHOOL_CASES.map((item, idx) => {
          const Icon = getIcon(item.iconName);
          const isSelected = item.id === selectedCaseId;
          return (
            <button
              key={item.id}
              onClick={() => setSelectedCaseId(item.id)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center space-x-2.5 shadow-sm ${
                isSelected
                  ? 'bg-sage-700 text-white shadow-md scale-105'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-sage-200 dark:border-slate-800 hover:bg-sage-50 dark:hover:bg-slate-800'
              }`}
            >
              <Icon className="w-4 h-4 text-cream-300" />
              <span>Caso 0{idx + 1}: {item.title.split(' ')[0]} {item.title.split(' ')[1] || ''}</span>
            </button>
          );
        })}
      </div>

      {/* Active Case Card Container */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-sage-200 dark:border-slate-800 shadow-xl overflow-hidden">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-sage-700 via-sage-800 to-slate-900 p-6 sm:p-8 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase font-mono font-bold tracking-wider text-cream-300 block mb-1">
              {activeCase.category}
            </span>
            <h3 className="font-heading text-xl sm:text-3xl font-bold">
              {activeCase.title}
            </h3>
            <p className="text-xs text-sage-200 mt-1">
              Ámbito: {activeCase.schoolContext}
            </p>
          </div>

          <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-cream-200 self-start sm:self-auto border border-white/20">
            {React.createElement(getIcon(activeCase.iconName), { className: 'w-7 h-7' })}
          </div>
        </div>

        {/* Content Body Grid */}
        <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Analysis Column (Problem, Solution, Philosophical Takeaway) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* The Problem */}
            <div className="bg-red-50 dark:bg-red-950/40 p-5 rounded-2xl border border-red-200/60 dark:border-red-900/40">
              <div className="flex items-center gap-2 text-red-700 dark:text-red-400 font-bold text-xs uppercase tracking-wider mb-2">
                <AlertCircle className="w-4 h-4" />
                <span>Conducta Problemática Observada:</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                {activeCase.problem}
              </p>
            </div>

            {/* Ethical Solution */}
            <div className="bg-sage-50 dark:bg-slate-800/80 p-5 rounded-2xl border border-sage-200 dark:border-slate-700">
              <div className="flex items-center gap-2 text-sage-800 dark:text-sage-300 font-bold text-xs uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Propuesta de Solución Ética:</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                {activeCase.ethicalSolution}
              </p>
            </div>

            {/* Philosophical Lesson */}
            <div className="p-4 rounded-xl bg-cream-50 dark:bg-slate-800/50 border-l-4 border-cream-400 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2.5">
              <Lightbulb className="w-4 h-4 text-cream-500 flex-shrink-0 mt-0.5" />
              <p className="italic">
                <strong>Enseñanza:</strong> {activeCase.philosophicalLesson}
              </p>
            </div>

          </div>

          {/* Interactive Scenario Simulator Column */}
          <div className="lg:col-span-6 bg-sage-50/60 dark:bg-slate-950/60 p-6 sm:p-7 rounded-2xl border border-sage-200/80 dark:border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-sage-800 dark:text-sage-300 font-bold text-xs uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4 text-sage-600" />
                <span>Simulador de Decisión Ética</span>
              </div>

              <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-cream-100 mb-4 leading-snug">
                {activeCase.scenarioQuestion}
              </h4>

              {/* Options */}
              <div className="space-y-3">
                {activeCase.options.map((option, optIdx) => {
                  const isSelected = userSelectedOption[activeCase.id] === optIdx;

                  return (
                    <div key={optIdx} className="space-y-2">
                      <button
                        onClick={() => handleSelectOption(activeCase.id, optIdx, option.isEthical)}
                        className={`w-full p-4 rounded-xl text-left text-xs sm:text-sm transition-all duration-200 border flex items-start space-x-3 ${
                          isSelected
                            ? option.isEthical
                              ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-900 dark:text-emerald-100 font-semibold ring-1 ring-emerald-500'
                              : 'bg-red-50 dark:bg-red-950/50 border-red-400 text-red-900 dark:text-red-100 ring-1 ring-red-400'
                            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-sage-400 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <span className={`w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5 ${
                          isSelected
                            ? option.isEthical ? 'bg-emerald-600 text-white' : 'bg-red-500 text-white'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                        }`}>
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span className="leading-relaxed">{option.text}</span>
                      </button>

                      {/* Immediate Feedback when selected */}
                      {isSelected && (
                        <div className={`p-3 rounded-lg text-xs leading-relaxed ${
                          option.isEthical
                            ? 'bg-emerald-100/70 dark:bg-emerald-900/40 text-emerald-900 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-800'
                            : 'bg-red-100/70 dark:bg-red-900/40 text-red-900 dark:text-red-200 border border-red-300 dark:border-red-800'
                        }`}>
                          <strong>{option.isEthical ? '✓ Aprobado Éticamente: ' : '✗ Alerta Ética: '}</strong>
                          {option.feedback}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
              <span>UE Santa María Eufrasia • Convivencia Escolar</span>
              <span className="font-semibold text-sage-700 dark:text-sage-400">Grupo 4</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
