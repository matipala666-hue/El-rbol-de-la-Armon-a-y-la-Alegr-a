import React, { useState, useEffect, useRef } from 'react';
import { ESSAY_SECTIONS, ACADEMIC_INFO } from '../data/essayData';
import { 
  BookOpen, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  Search, 
  X, 
  Copy, 
  Check, 
  Type, 
  Sun, 
  Moon, 
  Book, 
  Trees, 
  Sparkles, 
  Quote, 
  Clock, 
  ArrowUp,
  FileText
} from 'lucide-react';

interface EssayReaderProps {
  onShowToast: (message: string) => void;
  isPlayingAudio: boolean;
  setIsPlayingAudio: React.Dispatch<React.SetStateAction<boolean>>;
}

type ReaderTheme = 'light' | 'sepia' | 'dark' | 'forest';

export const EssayReader: React.FC<EssayReaderProps> = ({
  onShowToast,
  isPlayingAudio,
  setIsPlayingAudio
}) => {
  const [theme, setTheme] = useState<ReaderTheme>('light');
  const [fontSize, setFontSize] = useState<number>(16);
  const [fontFamily, setFontFamily] = useState<'serif' | 'sans'>('serif');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSectionId, setActiveSectionId] = useState<string>('sec-intro');
  const [copiedSectionId, setCopiedSectionId] = useState<string | null>(null);
  const [speechRate, setSpeechRate] = useState<number>(1.0);
  
  const speechUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Monitor section scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = ESSAY_SECTIONS.map((sec) => document.getElementById(sec.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPos) {
          setActiveSectionId(ESSAY_SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme style classes
  const getThemeClasses = () => {
    switch (theme) {
      case 'sepia':
        return {
          paper: 'bg-[#f5efe6] text-[#3d2f1d] border-[#d8caad]',
          callout: 'bg-[#ebe1cf] border-[#b09b7c] text-[#3d2f1d]',
          headerBorder: 'border-[#d8caad]',
          headingColor: 'text-[#2e2315]',
          highlightColor: 'bg-[#edd9be] text-[#3d2f1d]'
        };
      case 'dark':
        return {
          paper: 'bg-slate-900 text-slate-100 border-slate-800',
          callout: 'bg-slate-800/80 border-sage-500 text-slate-200',
          headerBorder: 'border-slate-800',
          headingColor: 'text-cream-100',
          highlightColor: 'bg-slate-800 text-cream-200'
        };
      case 'forest':
        return {
          paper: 'bg-[#0f1814] text-[#d1e0d7] border-[#1e3328]',
          callout: 'bg-[#182920] border-sage-400 text-[#e4ede7]',
          headerBorder: 'border-[#1e3328]',
          headingColor: 'text-cream-50',
          highlightColor: 'bg-[#223d2f] text-emerald-200'
        };
      default: // light
        return {
          paper: 'bg-white text-slate-800 border-sage-200',
          callout: 'bg-sage-50/90 border-sage-600 text-slate-800',
          headerBorder: 'border-sage-200',
          headingColor: 'text-slate-900',
          highlightColor: 'bg-sage-100 text-sage-900'
        };
    }
  };

  const themeClasses = getThemeClasses();

  // Web Speech Synthesis
  const handleToggleSpeech = (customText?: string) => {
    if (!('speechSynthesis' in window)) {
      onShowToast("Tu navegador no admite síntesis de voz Web Speech.");
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      onShowToast("Narración detenida");
    } else {
      window.speechSynthesis.cancel();
      
      const fullTextToRead = customText || ESSAY_SECTIONS.map(
        (s) => `${s.number}. ${s.title}. ${s.content.join(' ')}`
      ).join(' ');

      const utterance = new SpeechSynthesisUtterance(fullTextToRead);
      utterance.lang = 'es-ES';
      utterance.rate = speechRate;
      
      utterance.onend = () => {
        setIsPlayingAudio(false);
        onShowToast("Lectura por voz finalizada.");
      };

      utterance.onerror = () => {
        setIsPlayingAudio(false);
      };

      speechUtteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
      setIsPlayingAudio(true);
      onShowToast("Iniciando narración auditiva del ensayo");
    }
  };

  const readSectionAlone = (section: typeof ESSAY_SECTIONS[0]) => {
    const text = `${section.title}. ${section.content.join(' ')}`;
    handleToggleSpeech(text);
  };

  const handleCopySection = (section: typeof ESSAY_SECTIONS[0]) => {
    const textToCopy = `[${ACADEMIC_INFO.title} - ${ACADEMIC_INFO.groupName}]\n${section.number}. ${section.title}\n\n${section.content.join('\n\n')}\n\nCita APA: Grupo 4 (2026). UE Santa María Eufrasia.`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedSectionId(section.id);
    onShowToast(`Sección "${section.title}" copiada con cita.`);
    setTimeout(() => setCopiedSectionId(null), 2500);
  };

  // Search highlighter
  const highlightMatches = (text: string) => {
    if (!searchQuery.trim()) return text;
    const parts = text.split(new RegExp(`(${searchQuery})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === searchQuery.toLowerCase() ? (
        <mark key={index} className="bg-amber-300 text-slate-900 rounded px-1 font-bold">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <section id="lector" className="py-16 lg:py-24 bg-cream-100/60 dark:bg-slate-900/80 border-t border-sage-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-100 dark:bg-slate-800 text-sage-800 dark:text-sage-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5 text-sage-600 dark:text-sage-400" />
              <span>Lectura Crítica & Académica</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-slate-900 dark:text-cream-50">
              Lector del Ensayo Completo
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
              Documento íntegro presentado por el Grupo 4 de Filosofía, enriquecido con herramientas interactivas.
            </p>
          </div>

          {/* Reader Controls Toolbar */}
          <div className="flex flex-wrap items-center gap-2.5 bg-white dark:bg-slate-950 p-2.5 rounded-2xl border border-sage-200/80 dark:border-slate-800 shadow-md">
            
            {/* Theme Selector */}
            <div className="flex items-center bg-sage-50 dark:bg-slate-900 rounded-xl p-1 border border-sage-200/60 dark:border-slate-800">
              <button
                onClick={() => setTheme('light')}
                title="Modo Claro"
                className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-all ${
                  theme === 'light'
                    ? 'bg-white shadow-xs text-slate-900 font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                Claro
              </button>
              <button
                onClick={() => setTheme('sepia')}
                title="Modo Sepia (Cálido Libro)"
                className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-all ${
                  theme === 'sepia'
                    ? 'bg-[#d8caad] shadow-xs text-[#3d2f1d] font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                Sepia
              </button>
              <button
                onClick={() => setTheme('dark')}
                title="Modo Oscuro"
                className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-all ${
                  theme === 'dark'
                    ? 'bg-slate-800 shadow-xs text-white font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-white'
                }`}
              >
                Oscuro
              </button>
              <button
                onClick={() => setTheme('forest')}
                title="Modo Bosque"
                className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-all ${
                  theme === 'forest'
                    ? 'bg-[#1e3328] shadow-xs text-emerald-200 font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-emerald-400'
                }`}
              >
                Bosque
              </button>
            </div>

            {/* Font Size Adjuster */}
            <div className="flex items-center space-x-1 bg-sage-50 dark:bg-slate-900 rounded-xl p-1 border border-sage-200/60 dark:border-slate-800">
              <button
                onClick={() => setFontSize((prev) => Math.max(prev - 1, 13))}
                title="Reducir tamaño de letra"
                className="w-7 h-7 flex items-center justify-center rounded-lg text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-sage-200 dark:hover:bg-slate-800"
              >
                A-
              </button>
              <span className="text-xs font-mono font-semibold px-1 text-slate-600 dark:text-slate-400">
                {fontSize}px
              </span>
              <button
                onClick={() => setFontSize((prev) => Math.min(prev + 1, 24))}
                title="Aumentar tamaño de letra"
                className="w-7 h-7 flex items-center justify-center rounded-lg text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-sage-200 dark:hover:bg-slate-800"
              >
                A+
              </button>
            </div>

            {/* Typography Toggle (Serif vs Sans) */}
            <button
              onClick={() => setFontFamily((prev) => (prev === 'serif' ? 'sans' : 'serif'))}
              title={`Cambiar a tipografía ${fontFamily === 'serif' ? 'Moderna Sans' : 'Clásica Serif'}`}
              className="px-2.5 py-1.5 rounded-xl bg-sage-50 dark:bg-slate-900 hover:bg-sage-100 dark:hover:bg-slate-800 text-xs font-semibold border border-sage-200/60 dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1"
            >
              <Type className="w-3.5 h-3.5 text-sage-600 dark:text-sage-400" />
              <span>{fontFamily === 'serif' ? 'Serif' : 'Sans'}</span>
            </button>

            {/* Speech Narrator Button */}
            <button
              onClick={() => handleToggleSpeech()}
              title={isPlayingAudio ? "Detener lectura de voz" : "Escuchar ensayo con síntesis de voz"}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center space-x-1.5 shadow-xs transition-all ${
                isPlayingAudio
                  ? 'bg-amber-600 text-white animate-pulse'
                  : 'bg-sage-600 hover:bg-sage-700 text-white'
              }`}
            >
              {isPlayingAudio ? (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span>Pausar Voz</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Escuchar Todo</span>
                </>
              )}
            </button>

          </div>
        </div>

        {/* Live Search Bar */}
        <div className="mb-8 max-w-md">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar en el ensayo (ej. dignidad, desacuerdo, Wiese)..."
              className="w-full pl-10 pr-9 py-2 bg-white dark:bg-slate-950 border border-sage-200 dark:border-slate-800 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sage-500 text-slate-800 dark:text-slate-100 placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="text-[11px] text-sage-700 dark:text-sage-400 mt-1 pl-1">
              Filtrando coincidencias en amarillo dentro del texto.
            </p>
          )}
        </div>

        {/* Grid Layout: Sidebar Index + Paper Document */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sticky Table of Contents Sidebar */}
          <aside className="lg:col-span-3 lg:sticky lg:top-20 space-y-4">
            <div className="bg-white dark:bg-slate-950 p-5 rounded-3xl border border-sage-200 dark:border-slate-800 shadow-md">
              <h3 className="font-bold text-xs uppercase tracking-wider text-sage-600 dark:text-sage-400 mb-3 flex items-center justify-between">
                <span>Índice del Ensayo</span>
                <span className="text-[10px] font-mono text-slate-400">6 Secciones</span>
              </h3>

              <nav className="space-y-1">
                {ESSAY_SECTIONS.map((sec) => {
                  const isActive = activeSectionId === sec.id;
                  return (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className={`block px-3 py-2 rounded-xl text-xs transition-all duration-200 ${
                        isActive
                          ? 'bg-sage-600 text-white font-bold shadow-xs translate-x-1'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-sage-50 dark:hover:bg-slate-900 font-medium'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <span className={`text-[10px] font-mono ${isActive ? 'text-cream-200' : 'text-slate-400'}`}>
                          {sec.number}
                        </span>
                        <span className="truncate">{sec.title}</span>
                      </div>
                    </a>
                  );
                })}
              </nav>

              {/* Reading time estimate */}
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-sage-600" />
                  <span>Lectura estimada:</span>
                </span>
                <span className="font-semibold text-slate-700 dark:text-slate-300">5 minutos</span>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="bg-sage-50/80 dark:bg-slate-900/60 p-4 rounded-2xl border border-sage-200/60 dark:border-slate-800 text-xs space-y-2">
              <span className="font-bold text-slate-900 dark:text-slate-100 block">
                Criterios de Evaluación
              </span>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11px]">
                Rigurosidad filosófica, citas en formato APA, resolución de controversias éticas y aplicabilidad en la comunidad educativa.
              </p>
            </div>
          </aside>

          {/* Paper View Column */}
          <main className="lg:col-span-9">
            <div
              className={`p-6 sm:p-10 lg:p-14 rounded-3xl border shadow-xl transition-all duration-300 ${themeClasses.paper} ${
                fontFamily === 'serif' ? 'font-serif' : 'font-sans'
              }`}
              style={{ fontSize: `${fontSize}px` }}
            >
              
              {/* Document Academic Header Banner */}
              <div className={`border-b ${themeClasses.headerBorder} pb-8 mb-10 text-center font-sans`}>
                <span className="text-xs uppercase font-bold tracking-widest text-sage-600 dark:text-sage-400 block mb-1">
                  {ACADEMIC_INFO.institution}
                </span>
                <h1 className={`font-heading text-2xl sm:text-4xl font-bold ${themeClasses.headingColor} leading-tight`}>
                  {ACADEMIC_INFO.title}
                </h1>
                <p className="text-sm font-serif italic text-sage-700 dark:text-sage-300 mt-2">
                  “{ACADEMIC_INFO.subtitle}”
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span>Asignatura: {ACADEMIC_INFO.course}</span>
                  <span>•</span>
                  <span>Docente: {ACADEMIC_INFO.teacher}</span>
                  <span>•</span>
                  <span>{ACADEMIC_INFO.date}</span>
                </div>
              </div>

              {/* 1. INTRODUCCIÓN */}
              <article id="sec-intro" className="mb-14 scroll-mt-24">
                <div className="flex items-center justify-between border-b pb-2 mb-4 border-sage-200/50 dark:border-slate-800">
                  <h2 className={`font-heading text-xl sm:text-2xl font-bold ${themeClasses.headingColor} flex items-center gap-2`}>
                    <span className="text-sage-600 dark:text-sage-400 font-mono text-sm">01.</span> Introducción
                  </h2>
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => readSectionAlone(ESSAY_SECTIONS[0])}
                      title="Escuchar esta sección"
                      className="p-1.5 rounded-lg text-slate-500 hover:text-sage-600 hover:bg-sage-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleCopySection(ESSAY_SECTIONS[0])}
                      title="Copiar texto con cita APA"
                      className="p-1.5 rounded-lg text-slate-500 hover:text-sage-600 hover:bg-sage-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      {copiedSectionId === 'sec-intro' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <p className="mb-4 text-justify leading-relaxed">
                  <span className="float-left text-4xl font-heading font-bold text-sage-700 dark:text-sage-400 pr-2 leading-none">
                    S
                  </span>
                  egún el estudio de García realizado en 2025 en su blog titulado{' '}
                  <em>“Ayuda en acción”</em>, se determinó que:{' '}
                  <strong className="font-semibold text-sage-800 dark:text-sage-300">
                    “Los valores humanos son el ADN de nuestra ética y moral”
                  </strong>
                  , puesto que nacen de la necesidad del ser humano de definir aquellas actitudes o acciones que culturalmente son consideradas correctas o inadecuadas. Su correcta aplicación en la vida cotidiana puede marcar la diferencia entre una experiencia incómoda o negativa y una situación capaz de enriquecer a una persona en personalidad e identidad.
                </p>

                <p className="text-justify leading-relaxed">
                  La práctica de los valores busca orientar el comportamiento humano para favorecer una convivencia sana y facilitar la comunicación con quienes nos rodean. Es precisamente aquí donde surge una controversia que la filosofía se ha cuestionado durante siglos:{' '}
                  <em className="font-semibold text-sage-700 dark:text-sage-300">
                    ¿una persona debe recibir un trato respetuoso únicamente cuando sus acciones demuestran que lo merece, o debe ser respetada independientemente de su comportamiento?
                  </em>{' '}
                  Esta interrogante constituye el punto de partida de la presente reflexión.
                </p>
              </article>

              {/* 2. OBJETIVO */}
              <article id="sec-objetivo" className="mb-14 scroll-mt-24">
                <div className="flex items-center justify-between border-b pb-2 mb-4 border-sage-200/50 dark:border-slate-800">
                  <h2 className={`font-heading text-xl sm:text-2xl font-bold ${themeClasses.headingColor} flex items-center gap-2`}>
                    <span className="text-sage-600 dark:text-sage-400 font-mono text-sm">02.</span> Objetivo
                  </h2>
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => readSectionAlone(ESSAY_SECTIONS[1])}
                      title="Escuchar esta sección"
                      className="p-1.5 rounded-lg text-slate-500 hover:text-sage-600 hover:bg-sage-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleCopySection(ESSAY_SECTIONS[1])}
                      title="Copiar texto con cita APA"
                      className="p-1.5 rounded-lg text-slate-500 hover:text-sage-600 hover:bg-sage-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      {copiedSectionId === 'sec-objetivo' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className={`p-6 rounded-2xl border-l-4 font-sans text-sm sm:text-base leading-relaxed ${themeClasses.callout}`}>
                  <p className="font-medium text-justify">
                    Como grupo, hemos enfocado el propósito de nuestro ensayo en analizar la importancia del respeto como valor fundamental de la convivencia, relacionándolo con el concepto de dignidad humana. A partir de situaciones evidenciadas dentro de nuestra institución educativa, buscamos determinar si el respeto debe considerarse un valor universal correspondiente a toda persona o si, por el contrario, se ve comprometido por las acciones que realiza.
                  </p>
                </div>
              </article>

              {/* 3. DESARROLLO */}
              <article id="sec-desarrollo" className="mb-14 scroll-mt-24">
                <div className="flex items-center justify-between border-b pb-2 mb-4 border-sage-200/50 dark:border-slate-800">
                  <h2 className={`font-heading text-xl sm:text-2xl font-bold ${themeClasses.headingColor} flex items-center gap-2`}>
                    <span className="text-sage-600 dark:text-sage-400 font-mono text-sm">03.</span> Desarrollo
                  </h2>
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => readSectionAlone(ESSAY_SECTIONS[2])}
                      title="Escuchar esta sección"
                      className="p-1.5 rounded-lg text-slate-500 hover:text-sage-600 hover:bg-sage-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleCopySection(ESSAY_SECTIONS[2])}
                      title="Copiar texto con cita APA"
                      className="p-1.5 rounded-lg text-slate-500 hover:text-sage-600 hover:bg-sage-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      {copiedSectionId === 'sec-desarrollo' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <p className="mb-4 text-justify leading-relaxed">
                  Para dar inicio al cuerpo de nuestro ensayo, consideramos necesario definir qué es el respeto. Con la ayuda de la Fundación Wiese y su estudio sobre <em>Los Principales Valores que los Niños Deben Conocer</em> (2023), concluimos que el respeto es uno de los valores fundamentales para la convivencia, debido a que implica reconocer en uno mismo y en los demás los derechos, capacidades y dignidad que poseen como personas. Por ende, respetar a alguien no significa valorarlo únicamente por sus cualidades, comportamiento o semejanzas con nosotros, sino reconocer que posee un valor humano que no desaparece simplemente porque pensemos diferente o desaprobemos sus acciones.
                </p>

                <p className="mb-4 text-justify leading-relaxed">
                  Respetar no implica únicamente tratar a los demás como nos gustaría ser tratados. También significa aceptar aquello que no nos resulta común, comprender que nuestro pensamiento no constituye necesariamente la única forma correcta de interpretar la realidad y procurar el bienestar de los demás sin sobrepasar sus límites ni vulnerar su dignidad.
                </p>

                {/* Callout Quote */}
                <blockquote className={`my-6 pl-4 pr-4 py-4 border-l-4 rounded-r-2xl italic ${themeClasses.callout}`}>
                  <div className="flex items-start gap-2">
                    <Quote className="w-5 h-5 text-sage-600 dark:text-sage-400 flex-shrink-0 mt-0.5" />
                    <p className="text-justify font-serif">
                      “En ocasiones se confunde el respeto con la obligación de estar de acuerdo con los demás, siendo que es posible respetar a una persona y, al mismo tiempo, cuestionar sus ideas o desaprobar sus acciones. Expresar desacuerdo no constituye una falta de respeto.”
                    </p>
                  </div>
                </blockquote>

                <p className="mb-4 text-justify leading-relaxed">
                  Lo que puede convertir el desacuerdo en una conducta irrespetuosa es imponer nuestro punto de vista como una verdad absoluta, menospreciar las opiniones ajenas o considerar inferior a quien piensa de manera diferente. Esta diferencia resulta especialmente importante cuando nuestras emociones intervienen en la manera en que tratamos a los demás.
                </p>

                <p className="mb-4 text-justify leading-relaxed">
                  En muchas situaciones, como lo ha evidenciado el Instituto Nacional Electoral en su artículo <em>“Faro Democrático”</em> (2020), la postura que poseemos frente a una persona puede verse influenciada por la opinión que tenemos de ella, por comportamientos anteriores o incluso por las semejanzas y diferencias que existen entre ambos. De esta manera, podemos llegar a considerar que alguien merece un trato diferente simplemente porque nos agrada o nos desagrada.
                </p>

                <p className="mb-4 text-justify leading-relaxed">
                  Podría entonces argumentarse que el respeto debe ganarse mediante las acciones. Después de todo, es lógico pensar: <em>¿por qué deberíamos respetar a alguien que constantemente nos falta al respeto, actúa injustamente o perjudica a los demás?</em> Para responder esto, es vital diferenciar entre respetar el valor humano que tiene esa persona y aprobar un comportamiento negativo, puesto que rechazar o contraponerse a una acción no representa necesariamente vulnerar su criterio e irrespetar a quien lo realiza.
                </p>

                <p className="text-justify leading-relaxed">
                  El hecho de que alguien piense, actúe o se comporte de una manera que no compartimos no debería convertirse en una justificación para humillarlo o minimizar su dignidad. Una persona puede realizar acciones equivocadas y, por ello, perder nuestra confianza o admiración, pero esto no significa que deje de merecer un trato humano y adecuado. Por esta razón, consideramos que las acciones sí influyen en nuestras relaciones, pero no deberían determinar si una persona merece ser respetada. Las acciones pueden hacer que nos acerquemos más o establezcamos distancia y límites; sin embargo, no deben ser un criterio para decidir si esa persona merece ser tratada con dignidad.
                </p>
              </article>

              {/* 4. EJEMPLOS EN EL ENTORNO ESCOLAR */}
              <article id="sec-ejemplos" className="mb-14 scroll-mt-24">
                <div className="flex items-center justify-between border-b pb-2 mb-4 border-sage-200/50 dark:border-slate-800">
                  <h2 className={`font-heading text-xl sm:text-2xl font-bold ${themeClasses.headingColor} flex items-center gap-2`}>
                    <span className="text-sage-600 dark:text-sage-400 font-mono text-sm">04.</span> Ejemplos en el Entorno Escolar
                  </h2>
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => readSectionAlone(ESSAY_SECTIONS[3])}
                      title="Escuchar esta sección"
                      className="p-1.5 rounded-lg text-slate-500 hover:text-sage-600 hover:bg-sage-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleCopySection(ESSAY_SECTIONS[3])}
                      title="Copiar texto con cita APA"
                      className="p-1.5 rounded-lg text-slate-500 hover:text-sage-600 hover:bg-sage-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      {copiedSectionId === 'sec-ejemplos' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <p className="mb-4 text-justify leading-relaxed">
                  Dentro de nuestra institución educativa hemos logrado evidenciar situaciones que reflejan claramente este problema: jóvenes que se burlan de niños y no toman en serio sus opiniones; estudiantes que, dominados por el enojo, discuten con docentes porque consideran equivocadas sus decisiones; o compañeros que excluyen a otros porque no comparten determinados gustos. En todos estos casos aparece una misma dificultad: confundir las diferencias personales con una supuesta diferencia en el valor o dignidad de las personas.
                </p>

                <p className="text-justify leading-relaxed">
                  Por ello, consideramos que los valores fundamentales deben mantenerse como principios de convivencia, aunque la manera de expresarlos pueda adaptarse a las diferentes circunstancias. El respeto debe aplicarse tanto al compañero como al conocido, al docente, al familiar, al amigo o a cualquier otra persona con quien establezcamos una relación. Lo que debe cambiar no es el valor que reconocemos en el otro, sino la forma en que expresamos nuestras diferencias, emociones y desacuerdos.
                </p>
              </article>

              {/* 5. CONCLUSIÓN */}
              <article id="sec-conclusion" className="mb-14 scroll-mt-24">
                <div className="flex items-center justify-between border-b pb-2 mb-4 border-sage-200/50 dark:border-slate-800">
                  <h2 className={`font-heading text-xl sm:text-2xl font-bold ${themeClasses.headingColor} flex items-center gap-2`}>
                    <span className="text-sage-600 dark:text-sage-400 font-mono text-sm">05.</span> Conclusión
                  </h2>
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => readSectionAlone(ESSAY_SECTIONS[4])}
                      title="Escuchar esta sección"
                      className="p-1.5 rounded-lg text-slate-500 hover:text-sage-600 hover:bg-sage-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleCopySection(ESSAY_SECTIONS[4])}
                      title="Copiar texto con cita APA"
                      className="p-1.5 rounded-lg text-slate-500 hover:text-sage-600 hover:bg-sage-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      {copiedSectionId === 'sec-conclusion' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="p-6 sm:p-8 bg-gradient-to-br from-sage-700 to-sage-900 text-white rounded-3xl shadow-xl font-sans mb-4">
                  <div className="flex items-center gap-2 text-cream-300 font-bold text-xs uppercase tracking-widest mb-2">
                    <Sparkles className="w-4 h-4 text-cream-300" />
                    <span>Resolución Filosófica del Dilema</span>
                  </div>
                  
                  <p className="text-lg sm:text-xl font-heading font-bold mb-4 leading-snug">
                    ¿Entonces, merece respeto toda persona por el solo hecho de serlo, o el respeto se gana con las acciones?
                  </p>

                  <div className="space-y-3 text-sm sm:text-base leading-relaxed text-slate-100">
                    <p className="font-semibold text-cream-100">
                      Sí, toda persona merece respeto fundamental solo por el hecho de ser persona, porque posee valor propio independiente de sus acciones.
                    </p>
                    <p className="text-justify text-slate-200">
                      Pero precisamente porque esperamos vivir en una sociedad basada en el respeto, también tenemos la responsabilidad de practicarlo frente a los demás. Podemos cuestionar las acciones de una persona sin menospreciarlas, establecer límites sin humillarla y estar en desacuerdo sin convertir la diferencia en desprecio.
                    </p>
                  </div>
                </div>
              </article>

              {/* 6. BIBLIOGRAFÍA */}
              <article id="sec-bibliografia" className="scroll-mt-24">
                <div className="flex items-center justify-between border-b pb-2 mb-4 border-sage-200/50 dark:border-slate-800">
                  <h2 className={`font-heading text-xl sm:text-2xl font-bold ${themeClasses.headingColor} flex items-center gap-2`}>
                    <span className="text-sage-600 dark:text-sage-400 font-mono text-sm">06.</span> Referencias Bibliográficas
                  </h2>
                  <button
                    onClick={() => handleCopySection(ESSAY_SECTIONS[5])}
                    title="Copiar todas las referencias APA"
                    className="p-1.5 rounded-lg text-slate-500 hover:text-sage-600 hover:bg-sage-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1 text-xs"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar Todo</span>
                  </button>
                </div>

                <div className="font-sans text-xs sm:text-sm space-y-4">
                  <div className="pl-6 -indent-6 leading-relaxed">
                    <strong>Beach, M.</strong> (9 de 1 de 2007). <em>National Library of Medicine</em>. Obtenido de ¿Qué significa "respeto"? Explorando la obligación moral de los profesionales de la salud de respetar a los pacientes:{' '}
                    <a
                      href="https://pmc.ncbi.nlm.nih.gov/articles/PMC1852905/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sage-600 dark:text-sage-400 underline break-all hover:text-sage-800"
                    >
                      https://pmc.ncbi.nlm.nih.gov/articles/PMC1852905/
                    </a>
                  </div>

                  <div className="pl-6 -indent-6 leading-relaxed">
                    <strong>Fundación Wiese.</strong> (1 de 2 de 2023). <em>Fundación Wiese</em>. Obtenido de Lista de 10 valores ciudadanos que deben conocer los niños:{' '}
                    <a
                      href="https://www.fundacionwiese.org/blog/es/valores-ciudadanos-que-deben-conocer-los-ninos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sage-600 dark:text-sage-400 underline break-all hover:text-sage-800"
                    >
                      https://www.fundacionwiese.org/blog/es/valores-ciudadanos-que-deben-conocer-los-ninos
                    </a>
                  </div>

                  <div className="pl-6 -indent-6 leading-relaxed">
                    <strong>García, N.</strong> (24 de 10 de 2025). <em>Ayuda en Acción</em>. Obtenido de Qué son los valores humanos y los 10 valores más importantes:{' '}
                    <a
                      href="https://ayudaenaccion.org/blog/educacion/valores-humanos-mas-importantes/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sage-600 dark:text-sage-400 underline break-all hover:text-sage-800"
                    >
                      https://ayudaenaccion.org/blog/educacion/valores-humanos-mas-importantes/
                    </a>
                  </div>

                  <div className="pl-6 -indent-6 leading-relaxed">
                    <strong>Instituto Nacional Electoral.</strong> (2020). <em>FARO DEMOCRÁTICO</em>. Obtenido de DERECHOS HUMANOS: La Dignidad:{' '}
                    <a
                      href="https://farodemocratico.ine.mx/la-dignidad/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sage-600 dark:text-sage-400 underline break-all hover:text-sage-800"
                    >
                      https://farodemocratico.ine.mx/la-dignidad/
                    </a>
                  </div>
                </div>
              </article>

              {/* Back to top button inside paper */}
              <div className="mt-12 pt-6 border-t border-slate-200/50 dark:border-slate-800 flex justify-end font-sans">
                <a
                  href="#hero"
                  className="text-xs text-slate-500 hover:text-sage-600 dark:hover:text-sage-400 flex items-center gap-1.5 transition-colors"
                >
                  <ArrowUp className="w-4 h-4" />
                  <span>Volver al inicio</span>
                </a>
              </div>

            </div>
          </main>

        </div>

      </div>
    </section>
  );
};
