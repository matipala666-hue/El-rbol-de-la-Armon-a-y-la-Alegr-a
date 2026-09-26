import React, { useState } from 'react';
import { BarChart3, CheckCircle2, HelpCircle, RotateCcw, Sparkles, Scale, Heart, ShieldAlert } from 'lucide-react';

interface DilemmaPollProps {
  onShowToast: (message: string) => void;
}

export const DilemmaPoll: React.FC<DilemmaPollProps> = ({ onShowToast }) => {
  const [userVote, setUserVote] = useState<'innato' | 'ganado' | 'hibrido' | null>(null);

  // Initial simulated student cohort counts
  const [counts, setCounts] = useState({
    innato: 42,
    ganado: 26,
    hibrido: 78
  });

  const totalVotes = counts.innato + counts.ganado + counts.hibrido;

  const pctInnato = Math.round((counts.innato / totalVotes) * 100);
  const pctGanado = Math.round((counts.ganado / totalVotes) * 100);
  const pctHibrido = 100 - pctInnato - pctGanado;

  const handleVote = (option: 'innato' | 'ganado' | 'hibrido') => {
    setUserVote(option);
    setCounts((prev) => ({
      ...prev,
      [option]: prev[option] + 1
    }));

    if (option === 'innato') {
      onShowToast("Voto registrado: El Respeto es Innato");
    } else if (option === 'ganado') {
      onShowToast("Voto registrado: El Respeto se Gana con las acciones");
    } else {
      onShowToast("Voto registrado: Distinción Ética (Conclusión del Ensayo)");
    }
  };

  const handleReset = () => {
    if (userVote) {
      setCounts((prev) => ({
        ...prev,
        [userVote]: Math.max(prev[userVote] - 1, 0)
      }));
      setUserVote(null);
      onShowToast("Voto reiniciado");
    }
  };

  return (
    <section id="dilema" className="py-16 lg:py-20 bg-cream-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-sage-800 via-sage-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-sage-700/50">
          
          {/* Subtle background glow */}
          <div className="absolute -right-12 -bottom-12 w-80 h-80 bg-sage-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-12 -top-12 w-80 h-80 bg-cream-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center">
            
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-700/80 text-cream-200 text-xs font-semibold tracking-wider uppercase mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-cream-300" />
              <span>Debate Filosófico Interactivo</span>
            </span>

            <h2 className="font-heading text-2xl sm:text-4xl font-bold mb-3 text-cream-50">
              ¿Qué Opina la Comunidad?
            </h2>

            <p className="text-sage-200 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Frente a la pregunta central de nuestra investigación, emite tu voto y descubre la síntesis ética propuesta por el Grupo 4.
            </p>

            {/* Voting Option Buttons (When Not Voted) */}
            {!userVote ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                
                {/* Option A */}
                <button
                  onClick={() => handleVote('innato')}
                  className="p-5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-md transition-all text-left group hover:scale-[1.02] active:scale-[0.98] shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-sage-500 text-white flex items-center justify-center font-heading font-bold text-base mb-3 group-hover:bg-sage-400 transition-colors">
                      A
                    </div>
                    <h3 className="font-bold text-sm sm:text-base mb-1.5 text-cream-100">
                      El Respeto es Innato
                    </h3>
                    <p className="text-xs text-sage-200 leading-relaxed">
                      Toda persona lo merece automáticamente por el solo hecho de existir y poseer condición humana.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-sage-300 font-medium flex items-center gap-1">
                    <span>Votar Opción A</span>
                  </div>
                </button>

                {/* Option B */}
                <button
                  onClick={() => handleVote('ganado')}
                  className="p-5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-md transition-all text-left group hover:scale-[1.02] active:scale-[0.98] shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-cream-500 text-white flex items-center justify-center font-heading font-bold text-base mb-3 group-hover:bg-cream-400 transition-colors">
                      B
                    </div>
                    <h3 className="font-bold text-sm sm:text-base mb-1.5 text-cream-100">
                      El Respeto se Gana
                    </h3>
                    <p className="text-xs text-sage-200 leading-relaxed">
                      Depende de los actos, la conducta moral y la reciprocidad en el trato hacia los demás.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-sage-300 font-medium flex items-center gap-1">
                    <span>Votar Opción B</span>
                  </div>
                </button>

                {/* Option C */}
                <button
                  onClick={() => handleVote('hibrido')}
                  className="p-5 rounded-2xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/40 backdrop-blur-md transition-all text-left group hover:scale-[1.02] active:scale-[0.98] shadow-sm flex flex-col justify-between ring-1 ring-emerald-400/30"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-heading font-bold text-base mb-3 group-hover:bg-emerald-400 transition-colors">
                      C
                    </div>
                    <h3 className="font-bold text-sm sm:text-base mb-1.5 text-cream-50 flex items-center justify-between">
                      <span>Distinción Ética</span>
                      <span className="text-[10px] bg-emerald-400/30 text-emerald-200 px-1.5 py-0.5 rounded font-mono">Ensayo</span>
                    </h3>
                    <p className="text-xs text-sage-200 leading-relaxed">
                      El trato digno e imparcial es incondicional; la admiración y la confianza interpersonal se ganan.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-emerald-300 font-medium flex items-center gap-1">
                    <span>Votar Opción C (Tesis Grupal)</span>
                  </div>
                </button>

              </div>
            ) : (
              /* Live Results View (When Voted) */
              <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl text-left border border-white/15 animate-fadeIn">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-cream-300" />
                    <h3 className="font-bold text-lg text-cream-100">
                      Resultados del Cohorte ({totalVotes} votos registrados)
                    </h3>
                  </div>
                  <button
                    onClick={handleReset}
                    className="text-xs text-sage-300 hover:text-white flex items-center gap-1 transition-colors self-start sm:self-auto"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Cambiar mi voto</span>
                  </button>
                </div>

                {/* Bars */}
                <div className="space-y-5 text-xs sm:text-sm">
                  
                  {/* Opción A */}
                  <div>
                    <div className="flex justify-between mb-1.5 font-medium">
                      <span className="flex items-center gap-1.5 text-cream-100">
                        {userVote === 'innato' && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                        <span>Opción A: El Respeto es Innato</span>
                      </span>
                      <span className="font-mono text-sage-300">{pctInnato}% ({counts.innato})</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3">
                      <div
                        className="bg-sage-400 h-3 rounded-full transition-all duration-1000 shadow-sm"
                        style={{ width: `${pctInnato}%` }}
                      />
                    </div>
                  </div>

                  {/* Opción B */}
                  <div>
                    <div className="flex justify-between mb-1.5 font-medium">
                      <span className="flex items-center gap-1.5 text-cream-100">
                        {userVote === 'ganado' && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                        <span>Opción B: El Respeto se Gana</span>
                      </span>
                      <span className="font-mono text-sage-300">{pctGanado}% ({counts.ganado})</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3">
                      <div
                        className="bg-cream-400 h-3 rounded-full transition-all duration-1000 shadow-sm"
                        style={{ width: `${pctGanado}%` }}
                      />
                    </div>
                  </div>

                  {/* Opción C */}
                  <div>
                    <div className="flex justify-between mb-1.5 font-medium">
                      <span className="flex items-center gap-1.5 font-bold text-emerald-300">
                        {userVote === 'hibrido' && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                        <span>Opción C: Distinción Ética (Postura del Ensayo)</span>
                      </span>
                      <span className="font-mono text-emerald-300 font-bold">{pctHibrido}% ({counts.hibrido})</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3 ring-1 ring-emerald-400/40">
                      <div
                        className="bg-emerald-400 h-3 rounded-full transition-all duration-1000 shadow-sm"
                        style={{ width: `${pctHibrido}%` }}
                      />
                    </div>
                  </div>

                </div>

                {/* Synthesis Feedback Box */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                    <Scale className="w-5 h-5 text-cream-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-sm text-cream-100 block mb-1">
                        Síntesis Filosófica del Grupo 4:
                      </span>
                      <p className="text-xs text-sage-200 leading-relaxed text-justify">
                        “Las acciones erradas justifican establecer límites, sanciones y distancia personal; pero nunca justifican despojar a un semejante de su dignidad básica o convertir la diferencia en desprecio humillante.”
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
