import React, { useState } from 'react';
import { ShieldCheck, MessagesSquare, HeartHandshake, Scale, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const TheoryGrid: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const pillars = [
    {
      id: 1,
      title: "¿Qué es el Respeto?",
      subtitle: "Reconocimiento ontológico incondicional",
      description: "Implica reconocer en uno mismo y en los demás los derechos, capacidades y dignidad que poseen por el mero hecho de ser personas. No exige aprobación ciega, sino comprensión de que todo ser humano tiene un valor intrínseco insustituible.",
      keyInsight: "El respeto es el reconocimiento del valor intrínseco, no una concesión jerárquica.",
      source: "Fundación Wiese (2023)",
      icon: ShieldCheck,
      color: "text-emerald-700 dark:text-emerald-400",
      bgLight: "bg-emerald-50 dark:bg-emerald-950/40",
      border: "border-emerald-200 dark:border-emerald-800"
    },
    {
      id: 2,
      title: "Desacuerdo vs. Irrespeto",
      subtitle: "La dialéctica de la discrepancia sana",
      description: "Cuestionar ideas o desaprobar posturas no constituye una falta de respeto. Lo irrespetuoso surge al imponer nuestro punto de vista como verdad absoluta, ridiculizar al interlocutor o descalificar a quien piensa de manera distinta.",
      keyInsight: "Se puede estar en radical desacuerdo preservando una impecable cortesía y honor hacia la persona.",
      source: "Diálogo Filosófico & Deontología",
      icon: MessagesSquare,
      color: "text-amber-700 dark:text-amber-400",
      bgLight: "bg-amber-50 dark:bg-amber-950/40",
      border: "border-amber-200 dark:border-amber-800"
    },
    {
      id: 3,
      title: "El Sesgo Emocional",
      subtitle: "Superar la trampa de la simpatía",
      description: "Nuestras emociones, afinidades previas o prejuicios pueden condicionar la forma en que tratamos a los demás. Sin embargo, la dignidad no puede fluctuar según si la persona nos agrada, viste como nosotros o comparte nuestros pasatiempos.",
      keyInsight: "La simpatía es selectiva; el respeto ético debe ser universal e imparcial.",
      source: "INE — Faro Democrático (2020)",
      icon: HeartHandshake,
      color: "text-blue-700 dark:text-blue-400",
      bgLight: "bg-blue-50 dark:bg-blue-950/40",
      border: "border-blue-200 dark:border-blue-800"
    },
    {
      id: 4,
      title: "Dignidad vs. Conducta",
      subtitle: "La confianza se gana; la dignidad es innata",
      description: "Las malas acciones conllevan consecuencias, pérdida de cercanía o de confianza personal. No obstante, ninguna falta justifica la humillación, la tortura psicológica o la anulación de los derechos elementales del infractor.",
      keyInsight: "La sanción justa corrige la conducta; nunca debe humillar la condición humana.",
      source: "García / Ayuda en Acción (2025)",
      icon: Scale,
      color: "text-purple-700 dark:text-purple-400",
      bgLight: "bg-purple-50 dark:bg-purple-950/40",
      border: "border-purple-200 dark:border-purple-800"
    }
  ];

  return (
    <section id="conceptos" className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-sage-600 dark:text-sage-400">
          Fundamentación Conceptual
        </span>
        <h2 className="font-heading text-2xl sm:text-4xl font-bold text-slate-900 dark:text-cream-50 mt-1">
          Ejes Teóricos del Desarrollo
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          Cuatro pilares conceptuales sustentan el análisis riguroso de nuestro ensayo, articulando la tradición filosófica con los derechos humanos contemporáneos.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          const isExpanded = activeCard === pillar.id;

          return (
            <div
              key={pillar.id}
              className={`bg-white dark:bg-slate-900 p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between hover:shadow-xl ${
                isExpanded
                  ? `${pillar.border} shadow-lg ring-2 ring-sage-500/20`
                  : 'border-sage-200 dark:border-slate-800 shadow-md'
              }`}
            >
              <div>
                {/* Icon & ID */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl ${pillar.bgLight} ${pillar.color} flex items-center justify-center shadow-xs`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    Eje 0{pillar.id}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-bold text-lg text-slate-900 dark:text-cream-50 mb-1">
                  {pillar.title}
                </h3>
                <p className="text-xs font-medium text-sage-700 dark:text-sage-400 mb-3">
                  {pillar.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-justify">
                  {pillar.description}
                </p>

                {/* Key Insight Pill */}
                <div className="p-3 rounded-xl bg-sage-50/70 dark:bg-slate-800/80 border border-sage-100 dark:border-slate-700 mb-4">
                  <div className="flex items-start gap-1.5 text-xs text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sage-600 dark:text-sage-400 mt-0.5 flex-shrink-0" />
                    <span className="font-medium italic">{pillar.keyInsight}</span>
                  </div>
                </div>
              </div>

              {/* Source Tag */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-sage-700 dark:text-sage-400">
                <span>{pillar.source}</span>
                <span className="text-slate-400">Filosofía II BGU</span>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
