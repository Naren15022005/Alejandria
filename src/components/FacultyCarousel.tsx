'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Faculty } from '@/types/learning';
import { FacultyCard } from '@/components/FacultyCard';
import { ChevronLeft, ChevronRight, Pause, Play, ArrowRight } from 'lucide-react';

interface FacultyCarouselProps {
  faculties: Faculty[];
  onSelectFaculty: (faculty: Faculty) => void;
  onViewAll?: () => void;
  title?: string;
  buttonText?: string;
}

export const FacultyCarousel: React.FC<FacultyCarouselProps> = ({ 
  faculties, 
  onSelectFaculty, 
  onViewAll,
  title = 'Directorio de Facultades',
  buttonText = 'Ver todas las facultades'
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % faculties.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + faculties.length) % faculties.length);
  };

  // Auto-play timer (5 seconds interval)
  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [currentIndex, isPaused, faculties.length]);

  return (
    <div 
      className="relative space-y-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Controls Bar Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-[#e8e4dc] pb-3.5">
        <div className="flex items-center justify-between sm:justify-start gap-2.5 sm:gap-3">
          <span className="text-xs font-serif font-bold text-[#1a1917] uppercase tracking-wider">
            {title}
          </span>
          <span className="font-mono text-[11px] sm:text-xs text-[#b88e4c] bg-[#f4f0e6] px-2.5 py-0.5 rounded-full border border-[#e2dcd0]">
            {currentIndex + 1} de {faculties.length}
          </span>
        </div>

        {/* Action Button & Carousel Controls */}
        <div className="flex items-center justify-between sm:justify-end gap-2.5 sm:gap-3">
          {onViewAll && (
            <button
              onClick={onViewAll}
              className="text-xs font-serif font-bold text-[#1a1917] hover:text-[#b88e4c] flex items-center gap-1.5 transition-colors bg-white border border-[#e8e4dc] hover:border-[#1a1917] px-3 sm:px-3.5 py-1.5 rounded-xl shadow-sm"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#b88e4c]" />
            </button>
          )}

          <div className="flex items-center gap-1 bg-white border border-[#e8e4dc] p-1 rounded-xl shrink-0">
            <button
              onClick={prevSlide}
              className="p-1.5 rounded-lg hover:bg-[#f4f0e6] text-[#6b665e] hover:text-[#1a1917] transition-all"
              aria-label="Facultad anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-1.5 rounded-lg hover:bg-[#f4f0e6] text-[#6b665e] hover:text-[#1a1917] transition-all"
              title={isPaused ? 'Reanudar carrusel' : 'Pausar carrusel'}
            >
              {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={nextSlide}
              className="p-1.5 rounded-lg hover:bg-[#f4f0e6] text-[#6b665e] hover:text-[#1a1917] transition-all"
              aria-label="Siguiente facultad"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Sliding Viewport */}
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {faculties.map((faculty) => (
            <div key={faculty.id} className="w-full shrink-0 px-1">
              <FacultyCard
                faculty={faculty}
                onSelectFaculty={onSelectFaculty}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Dots Indicators */}
      <div className="flex items-center justify-center gap-2 pt-1">
        {faculties.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? 'w-8 bg-[#1a1917]'
                : 'w-2 bg-[#e8e4dc] hover:bg-[#b88e4c]'
            }`}
            aria-label={`Ir a la facultad ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
