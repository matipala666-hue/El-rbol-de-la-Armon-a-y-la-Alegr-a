import React, { useState } from 'react';
import { TREE_NODES } from '../data/essayData';
import { TreeNodeData } from '../types';
import { 
  ChevronLeft, 
  ChevronRight, 
  MousePointerClick, 
  Sparkles, 
  BookOpen, 
  Check, 
  Leaf, 
  Volume2
} from 'lucide-react';

export const InteractiveTree: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'detail' | 'branches'>('detail');

  const selectedNode = TREE_NODES.find((n) => n.id === selectedId) || TREE_NODES[0];

  const handleSelectNode = (id: number) => {
    setSelectedId(id);
    playSoftChime();
  };

  const handleNext = () => {
    const nextId = selectedId === TREE_NODES.length ? 1 : selectedId + 1;
    handleSelectNode(nextId);
  };

  const handlePrev = () => {
    const prevId = selectedId === 1 ? TREE_NODES.length : selectedId - 1;
    handleSelectNode(prevId);
  };

  // Subtle web audio synthetic bell chime on click
  const playSoftChime = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520 + selectedId * 60, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.36);
    } catch {
      // AudioContext might be blocked until user gesture, ignore safely
    }
  };

  return (
    <section id="arbol" className="py-16 lg:py-20 bg-cream-100/60 dark:bg-slate-900/60 border-y border-sage-200/70 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-100 dark:bg-slate-800 text-sage-800 dark:text-sage-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Leaf className="w-3.5 h-3.5 text-sage-600 dark:text-sage-400" />
            <span>Visualización Conceptual</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-slate-900 dark:text-cream-50">
            El Árbol Interactivo de la Armonía
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Cada ramificación y fruto del árbol representa una premisa fundamental de nuestro ensayo sobre la dignidad y el respeto incondicional. Pulsa en cada nodo para profundizar.
          </p>
        </div>

        {/* Tree Interactive Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* SVG Tree Canvas Canvas Col */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-3xl shadow-xl border border-sage-200/80 dark:border-slate-800 flex flex-col justify-between relative overflow-hidden">
            
            {/* Top helper indicator */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-sage-700 dark:text-sage-400 flex items-center gap-1.5">
                <MousePointerClick className="w-4 h-4 animate-bounce" />
                <span>Haz clic en los 5 nodos circulares</span>
              </span>
              <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                <span>Nodo activo:</span>
                <span className="font-bold text-sage-700 dark:text-sage-300">#{selectedId}</span>
              </div>
            </div>

            {/* Interactive SVG Tree */}
            <div className="relative w-full aspect-[4/3] max-h-[460px] flex items-center justify-center my-auto">
              <svg viewBox="0 0 800 600" className="w-full h-full select-none">
                <defs>
                  {/* Gradients */}
                  <linearGradient id="trunkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#415a44" />
                    <stop offset="50%" stopColor="#283b32" />
                    <stop offset="100%" stopColor="#1a2721" />
                  </linearGradient>
                  
                  <linearGradient id="foliageGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#7a9f7a" />
                    <stop offset="100%" stopColor="#3a5a40" />
                  </linearGradient>

                  <linearGradient id="foliageGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#84a98c" />
                    <stop offset="100%" stopColor="#52796f" />
                  </linearGradient>

                  <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Background Soft Aura Circle */}
                <circle cx="400" cy="270" r="230" fill="currentColor" className="text-sage-100/50 dark:text-sage-950/40" />
                <circle cx="400" cy="270" r="180" fill="currentColor" className="text-cream-100/60 dark:text-slate-900/30" />

                {/* Ground Grass Line */}
                <ellipse cx="400" cy="565" rx="280" ry="16" fill="#283b32" opacity="0.15" />

                {/* Root System (Fundamentos Ontológicos) */}
                <g stroke="#283b32" strokeWidth="5" strokeLinecap="round" opacity="0.85">
                  <path d="M 370 550 Q 300 580 220 590" />
                  <path d="M 390 555 Q 360 590 330 600" />
                  <path d="M 410 555 Q 450 590 480 600" />
                  <path d="M 430 550 Q 500 580 580 590" />
                </g>
                <text x="400" y="585" textAnchor="middle" className="text-[11px] font-sans font-semibold fill-slate-400 dark:fill-slate-500 uppercase tracking-wider">
                  Raíces: Dignidad Humana Universal
                </text>

                {/* Main Tree Trunk and Strong Branches */}
                <path 
                  d="M 360 555 
                     C 370 440, 385 360, 400 290 
                     C 400 230, 310 180, 240 160 
                     M 400 290 
                     C 405 220, 500 170, 580 150 
                     M 400 290 
                     C 390 210, 345 135, 320 90 
                     M 400 290 
                     C 410 205, 465 135, 500 90
                     M 360 555 L 440 555 L 420 370 L 380 370 Z" 
                  fill="url(#trunkGrad)" 
                  stroke="#1a2721" 
                  strokeWidth="5" 
                  strokeLinejoin="round" 
                />

                {/* Lush Foliage Clusters (Canopy) */}
                <g className="transition-transform duration-700">
                  {/* Node 2 Left Canopy */}
                  <circle cx="240" cy="160" r="58" fill="url(#foliageGrad1)" opacity="0.9" className="hover:opacity-100" />
                  <circle cx="215" cy="180" r="40" fill="#3a5a40" opacity="0.6" />
                  
                  {/* Node 3 Right Canopy */}
                  <circle cx="580" cy="150" r="58" fill="url(#foliageGrad1)" opacity="0.9" />
                  <circle cx="605" cy="170" r="40" fill="#3a5a40" opacity="0.6" />

                  {/* Node 4 Upper Left Canopy */}
                  <circle cx="320" cy="90" r="52" fill="url(#foliageGrad2)" opacity="0.9" />

                  {/* Node 5 Upper Right Canopy */}
                  <circle cx="500" cy="90" r="52" fill="url(#foliageGrad2)" opacity="0.9" />

                  {/* Node 1 Central Heart Canopy */}
                  <circle cx="400" cy="180" r="68" fill="url(#foliageGrad1)" opacity="0.95" />
                  <circle cx="400" cy="220" r="45" fill="#3a5a40" opacity="0.75" />
                </g>

                {/* Connection Ring Lights to Active Node */}
                {TREE_NODES.map((node) => {
                  const isSelected = node.id === selectedId;
                  return (
                    <g key={`conn-${node.id}`}>
                      {isSelected && (
                        <circle
                          cx={node.cx}
                          cy={node.cy}
                          r="42"
                          fill="none"
                          stroke={node.color}
                          strokeWidth="2.5"
                          strokeDasharray="4 3"
                          className="animate-spin"
                          style={{ transformOrigin: `${node.cx}px ${node.cy}px`, animationDuration: '8s' }}
                        />
                      )}
                    </g>
                  );
                })}

                {/* 5 Interactive Clickable Nodes */}
                {TREE_NODES.map((node) => {
                  const isSelected = node.id === selectedId;
                  return (
                    <g
                      key={`node-${node.id}`}
                      className="cursor-pointer transition-all duration-300 group"
                      onClick={() => handleSelectNode(node.id)}
                    >
                      {/* Pulse aura when selected */}
                      {isSelected && (
                        <circle
                          cx={node.cx}
                          cy={node.cy}
                          r="34"
                          fill={node.color}
                          opacity="0.3"
                          className="animate-pulse"
                        />
                      )}

                      {/* Main Node Circle Button */}
                      <circle
                        cx={node.cx}
                        cy={node.cy}
                        r={isSelected ? "28" : "24"}
                        fill={isSelected ? node.color : "#ffffff"}
                        stroke={isSelected ? "#ffffff" : "#283b32"}
                        strokeWidth={isSelected ? "4" : "3"}
                        className="transition-all duration-200 group-hover:scale-110 drop-shadow-md"
                        style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
                      />

                      {/* Number Text inside node */}
                      <text
                        x={node.cx}
                        y={node.cy + 6}
                        textAnchor="middle"
                        className={`font-heading font-black text-base select-none pointer-events-none transition-colors ${
                          isSelected ? 'fill-white' : 'fill-slate-900'
                        }`}
                      >
                        {node.id}
                      </text>

                      {/* Text label underneath */}
                      <rect
                        x={node.cx - 55}
                        y={node.cy + 34}
                        width="110"
                        height="20"
                        rx="10"
                        fill={isSelected ? '#1a2721' : '#f4f7f4'}
                        stroke={isSelected ? node.color : '#c7d7c7'}
                        strokeWidth="1"
                        className="transition-all opacity-90 group-hover:opacity-100"
                      />
                      <text
                        x={node.cx}
                        y={node.cy + 48}
                        textAnchor="middle"
                        className={`text-[10px] font-sans font-bold select-none pointer-events-none ${
                          isSelected ? 'fill-cream-100' : 'fill-slate-800'
                        }`}
                      >
                        {node.id === 1 && "Dignidad Innata"}
                        {node.id === 2 && "Respeto Universal"}
                        {node.id === 3 && "Acción vs Valor"}
                        {node.id === 4 && "Desacuerdo Sano"}
                        {node.id === 5 && "Paz Escolar"}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Quick Node Selector Pills */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-center gap-2">
              {TREE_NODES.map((n) => (
                <button
                  key={n.id}
                  onClick={() => handleSelectNode(n.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center space-x-1.5 ${
                    selectedId === n.id
                      ? 'bg-sage-700 text-white shadow-md scale-105'
                      : 'bg-sage-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-sage-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <span className="w-4 h-4 rounded-full bg-white/20 text-[10px] flex items-center justify-center font-bold">
                    {n.id}
                  </span>
                  <span>{n.title.split(' ')[0]} {n.title.split(' ')[1] || ''}</span>
                </button>
              ))}
            </div>

          </div>

          {/* Dynamic Node Detail Panel Col */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-3xl shadow-xl border border-sage-200/80 dark:border-slate-800 flex flex-col justify-between min-h-[460px] relative transition-all">
            
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2.5">
                  <span
                    className="w-9 h-9 rounded-xl text-white font-bold flex items-center justify-center text-base shadow-sm"
                    style={{ backgroundColor: selectedNode.color }}
                  >
                    {selectedNode.id}
                  </span>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sage-600 dark:text-sage-400 block">
                      Dimensión Filosófica
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {selectedNode.philosophicalBranch}
                    </span>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-sage-100 dark:bg-slate-800 text-sage-800 dark:text-sage-300">
                  Nodo {selectedNode.id} de {TREE_NODES.length}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 dark:text-cream-50 mb-1">
                {selectedNode.title}
              </h3>
              <p className="text-xs font-semibold text-sage-700 dark:text-cream-400 mb-4 uppercase tracking-wide">
                {selectedNode.subtitle}
              </p>

              {/* Body Text */}
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 text-justify">
                {selectedNode.body}
              </p>

              {/* Quote Card */}
              <div className="bg-sage-50/80 dark:bg-slate-900/90 p-4 rounded-2xl border-l-4 border-sage-600 text-slate-800 dark:text-slate-200 font-serif italic text-xs sm:text-sm leading-relaxed mb-4">
                {selectedNode.quote}
              </div>

              {/* Relevance in Essay */}
              <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-sage-600 dark:text-sage-400 flex-shrink-0" />
                <span>
                  Tratado en la sección <strong className="text-slate-700 dark:text-slate-300">03. Desarrollo</strong> del ensayo grupal.
                </span>
              </div>
            </div>

            {/* Navigation Footer */}
            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <button
                onClick={handlePrev}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-sage-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Anterior</span>
              </button>

              <div className="flex gap-1.5">
                {TREE_NODES.map((n) => (
                  <span
                    key={n.id}
                    className={`h-2 rounded-full transition-all ${
                      n.id === selectedId
                        ? 'w-6 bg-sage-600'
                        : 'w-2 bg-slate-200 dark:bg-slate-700'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-sage-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1"
              >
                <span>Siguiente</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
