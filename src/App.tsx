import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveTree } from './components/InteractiveTree';
import { TheoryGrid } from './components/TheoryGrid';
import { EssayReader } from './components/EssayReader';
import { DilemmaPoll } from './components/DilemmaPoll';
import { SchoolCases } from './components/SchoolCases';
import { CommitmentMirror } from './components/CommitmentMirror';
import { BibliographySection } from './components/BibliographySection';
import { Footer } from './components/Footer';
import { CheckCircle2, Info } from 'lucide-react';

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleGlobalAudioToggle = () => {
    if (!('speechSynthesis' in window)) {
      showToast("Tu navegador no soporta síntesis de voz Web Speech.");
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      showToast("Narración detenida");
    } else {
      window.speechSynthesis.cancel();
      const introText = "Ensayo de Filosofía: El Árbol de la Armonía y la Alegría. ¿Merece respeto toda persona por el solo hecho de serlo, o el respeto se gana con las acciones? Por el Grupo 4 de segundo de Bachillerato: Flores, Jiménez, Palacios, Ruíz y Zapata. Unidad Educativa Santa María Eufrasia, Quito Ecuador.";
      const utterance = new SpeechSynthesisUtterance(introText);
      utterance.lang = 'es-ES';
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
      setIsPlayingAudio(true);
      showToast("Reproduciendo resumen auditivo");
    }
  };

  // Section observer for Navbar highlighting
  useEffect(() => {
    const sections = ['hero', 'arbol', 'conceptos', 'lector', 'dilema', 'ejemplos', 'espejo', 'bibliografia'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 180;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cream-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 font-sans selection:bg-sage-600 selection:text-white transition-colors">
      
      {/* Sticky Top Navbar */}
      <Navbar
        isPlayingAudio={isPlayingAudio}
        onToggleAudio={handleGlobalAudioToggle}
        activeSection={activeSection}
      />

      {/* Main Page Layout */}
      <main>
        {/* 1. Hero Academic Banner */}
        <Hero />

        {/* 2. Interactive SVG Tree of Harmony */}
        <InteractiveTree />

        {/* 3. Four Theoretical Pillars */}
        <TheoryGrid />

        {/* 4. Complete Essay Paper Reader */}
        <EssayReader
          onShowToast={showToast}
          isPlayingAudio={isPlayingAudio}
          setIsPlayingAudio={setIsPlayingAudio}
        />

        {/* 5. Dilemma Poll & Cohort Results */}
        <DilemmaPoll onShowToast={showToast} />

        {/* 6. Real School Cases & Decision Simulator */}
        <SchoolCases onShowToast={showToast} />

        {/* 7. Peace Leaves Wall (Espejo de Paz) */}
        <CommitmentMirror onShowToast={showToast} />

        {/* 8. APA Bibliography Section */}
        <BibliographySection onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs sm:text-sm px-4 py-3 rounded-2xl shadow-2xl border border-sage-500/40 flex items-center space-x-2 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
