'use client';

import React, { useState } from 'react';
import { PracticalModule, Exercise } from '@/types/learning';
import { ChevronLeft, CheckCircle, XCircle, ArrowRight, BookOpen, Award, RotateCcw, CheckCircle2, ShieldCheck } from 'lucide-react';

interface DrillViewerProps {
  module: PracticalModule;
  onClose: () => void;
  onCompleteExercise: (xpEarned: number) => void;
}

export const InteractiveDrillViewer: React.FC<DrillViewerProps> = ({
  module,
  onClose,
  onCompleteExercise,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [completedExercises, setCompletedExercises] = useState<boolean[]>(
    new Array(module.exercises.length).fill(false)
  );

  const currentExercise: Exercise = module.exercises[currentIndex];
  const isCorrect = selectedOption === currentExercise?.correctOptionIndex;

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null || isAnswered) return;
    setIsAnswered(true);

    if (selectedOption === currentExercise.correctOptionIndex) {
      const nextCompleted = [...completedExercises];
      nextCompleted[currentIndex] = true;
      setCompletedExercises(nextCompleted);
      onCompleteExercise(currentExercise.xpPoints);
    }
  };

  const handleNext = () => {
    if (currentIndex < module.exercises.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsFinished(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1a1917]/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="w-full max-w-4xl paper-modal rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[600px] shadow-2xl relative">
        
        {/* Top Editorial Bar */}
        <div className="flex items-center justify-between border-b border-[#e8e4dc] pb-4 mb-6">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-serif font-bold text-[#6b665e] hover:text-[#1a1917] transition-colors bg-[#f4f0e6] px-3 py-1.5 rounded-xl border border-[#e2dcd0]"
          >
            <ChevronLeft className="w-4 h-4 text-[#b88e4c]" />
            <span>Volver al Catálogo</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#b88e4c] bg-[#f4f0e6] px-3 py-1 rounded-lg border border-[#e2dcd0]">
              {module.category}
            </span>
            <span className="text-xs font-mono text-[#6b665e]">
              Lección {currentIndex + 1} de {module.exercises.length}
            </span>
          </div>
        </div>

        {/* FINISHED SCREEN */}
        {isFinished ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 py-8">
            <div className="w-20 h-20 rounded-full bg-[#f4f0e6] border-2 border-[#b88e4c] flex items-center justify-center shadow-lg">
              <Award className="w-10 h-10 text-[#b88e4c]" />
            </div>

            <div className="space-y-2 max-w-md">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2d4a3e] bg-[#2d4a3e]/10 px-3 py-1 rounded-full border border-[#2d4a3e]/20">
                Curso Completado
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#1a1917] font-bold">
                ¡Felicidades! Has culminado este módulo
              </h2>
              <p className="text-xs sm:text-sm text-[#6b665e] leading-relaxed">
                Has resuelto con éxito los casos prácticos de <strong className="text-[#1a1917]">{module.title}</strong>.
              </p>
            </div>

            <div className="flex items-center gap-4 bg-[#fbf9f5] border border-[#e8e4dc] p-4 rounded-2xl w-full max-w-md justify-around text-xs">
              <div className="text-center">
                <p className="text-[#6b665e]">Profesor</p>
                <p className="font-bold text-[#1a1917]">{module.instructor.name}</p>
              </div>
              <div className="h-8 w-px bg-[#e8e4dc]" />
              <div className="text-center">
                <p className="text-[#6b665e]">Recompensa XP</p>
                <p className="font-bold text-[#b88e4c] font-mono">+{module.exercises.reduce((a, b) => a + b.xpPoints, 0)} XP</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleReset}
                className="px-5 py-2.5 rounded-xl border border-[#e8e4dc] bg-white text-[#1a1917] font-serif font-bold text-xs flex items-center gap-2 hover:bg-[#f4f0e6] transition-all"
              >
                <RotateCcw className="w-4 h-4 text-[#6b665e]" />
                <span>Repasar Módulo</span>
              </button>

              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-[#1a1917] text-white font-serif font-bold text-xs flex items-center gap-2 hover:bg-[#b88e4c] transition-all shadow-md"
              >
                <span>Explorar Más Cursos</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* CLASSROOM LESSON BODY */
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 mb-6">
            
            {/* Sidebar Syllabus */}
            <div className="lg:col-span-4 border-r border-[#e8e4dc] pr-4 space-y-4 hidden lg:block">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#b88e4c]">Profesor de la Clase</span>
                <p className="font-serif font-bold text-xs text-[#1a1917]">{module.instructor.name}</p>
                <p className="text-[11px] text-[#6b665e]">{module.instructor.organization}</p>
              </div>

              <div className="pt-3 border-t border-[#e8e4dc] space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1a1917]">Temario de la Lección</span>
                <div className="space-y-1.5">
                  {module.exercises.map((ex, idx) => (
                    <div
                      key={ex.id || idx}
                      onClick={() => { setCurrentIndex(idx); setSelectedOption(null); setIsAnswered(false); }}
                      className={`p-2.5 rounded-xl cursor-pointer text-xs font-serif flex items-center justify-between border transition-all ${
                        currentIndex === idx
                          ? 'bg-[#1a1917] text-white border-[#1a1917]'
                          : completedExercises[idx]
                          ? 'bg-[#2d4a3e]/10 text-[#2d4a3e] border-[#2d4a3e]/20'
                          : 'bg-[#fbf9f5] text-[#6b665e] border-[#e8e4dc] hover:border-[#b88e4c]'
                      }`}
                    >
                      <span className="line-clamp-1">{idx + 1}. {ex.title}</span>
                      {completedExercises[idx] && <CheckCircle2 className="w-3.5 h-3.5 text-[#2d4a3e] shrink-0" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Reading & Practice Pane */}
            <div className="lg:col-span-8 space-y-5">
              <div>
                <h2 className="text-xl sm:text-2xl font-serif text-[#1a1917] font-bold leading-snug mb-2">
                  {currentExercise.title}
                </h2>
                <div className="p-4 rounded-2xl bg-[#f4f0e6] border border-[#e2dcd0] text-[#1a1917] text-xs sm:text-sm leading-relaxed">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#b88e4c] block mb-1">Caso de Estudio Real:</span>
                  <p>{currentExercise.scenario}</p>
                </div>
              </div>

              <p className="font-serif font-bold text-xs sm:text-sm text-[#1a1917]">
                {currentExercise.taskInstructions}
              </p>

              {/* Options */}
              {currentExercise.options && (
                <div className="space-y-2.5">
                  {currentExercise.options.map((option, idx) => {
                    let cardStyle = "bg-white border-[#e8e4dc] text-[#1a1917] hover:border-[#b88e4c] hover:bg-[#fbf9f5]";

                    if (selectedOption === idx) {
                      cardStyle = "bg-[#f4f0e6] border-[#b88e4c] text-[#1a1917] font-semibold";
                    }

                    if (isAnswered) {
                      if (idx === currentExercise.correctOptionIndex) {
                        cardStyle = "bg-[#2d4a3e]/15 border-[#2d4a3e] text-[#2d4a3e] font-bold";
                      } else if (selectedOption === idx) {
                        cardStyle = "bg-[#8c3b30]/15 border-[#8c3b30] text-[#8c3b30] font-bold";
                      }
                    }

                    return (
                      <div
                        key={idx}
                        onClick={() => handleSelectOption(idx)}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 text-xs sm:text-sm ${cardStyle}`}
                      >
                        <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-serif font-bold shrink-0 ${
                          selectedOption === idx ? 'bg-[#1a1917] text-white' : 'bg-[#f4f0e6] text-[#6b665e]'
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="flex-1 leading-relaxed">{option}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Feedback Explanation */}
              {isAnswered && (
                <div className={`p-4 rounded-2xl border ${isCorrect ? 'bg-[#2d4a3e]/10 border-[#2d4a3e]/30 text-[#2d4a3e]' : 'bg-[#8c3b30]/10 border-[#8c3b30]/30 text-[#8c3b30]'}`}>
                  <div className="flex items-center gap-2 font-serif font-bold text-xs sm:text-sm mb-1">
                    {isCorrect ? (
                      <>
                        <CheckCircle className="w-5 h-5 text-[#2d4a3e]" />
                        <span>¡Respuesta Correcta! (+{currentExercise.xpPoints} XP)</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5 text-[#8c3b30]" />
                        <span>Respuesta Incorrecta — Análisis de la Solución</span>
                      </>
                    )}
                  </div>
                  <p className="text-xs text-[#4a463f] leading-relaxed mt-2 font-sans">
                    <strong className="text-[#1a1917] uppercase font-bold text-[10px] tracking-wider block mb-1">Análisis Estratégico:</strong> {currentExercise.explanationQuick}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Footer Bar */}
        {!isFinished && (
          <div className="flex items-center justify-between border-t border-[#e8e4dc] pt-4">
            <span className="text-xs font-mono font-bold text-[#b88e4c]">
              Recompensa: +{currentExercise.xpPoints} XP
            </span>

            {!isAnswered ? (
              <button
                onClick={handleCheckAnswer}
                disabled={selectedOption === null}
                className="px-6 py-2.5 rounded-xl bg-[#1a1917] hover:bg-[#b88e4c] disabled:opacity-40 disabled:cursor-not-allowed text-white font-serif font-bold text-xs sm:text-sm transition-all shadow-md"
              >
                Comprobar Respuesta
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-[#2d4a3e] hover:bg-[#1a1917] text-white font-serif font-bold text-xs sm:text-sm shadow-md flex items-center gap-2 transition-all"
              >
                <span>{currentIndex < module.exercises.length - 1 ? 'Siguiente Lección' : 'Ver Certificación Final'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
