'use client';

import React from 'react';
import { PracticalModule } from '@/types/learning';
import { X, Star, Clock, Users, BookOpen, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

interface CourseDetailModalProps {
  course: PracticalModule;
  onClose: () => void;
  onStartCourse: (course: PracticalModule) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  onClose,
  onStartCourse,
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-[#1a1917]/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="w-full max-w-3xl paper-modal rounded-3xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#f4f0e6] text-[#6b665e] hover:text-[#1a1917] hover:bg-[#e8e4dc] transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge & Category */}
        <div className="space-y-4 pr-10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-md bg-[#f4f0e6] text-[#b88e4c] border border-[#e2dcd0]">
              {course.category}
            </span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-[#1a1917] text-white">
              {course.difficulty}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif text-[#1a1917] font-bold leading-tight">
            {course.title}
          </h2>

          {course.subtitle && (
            <p className="text-sm font-serif italic text-[#6b665e]">
              {course.subtitle}
            </p>
          )}

          <p className="text-xs sm:text-sm text-[#4a463f] leading-relaxed">
            {course.tagline}
          </p>

          {/* Metrics & Social Proof */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[#6b665e] pt-2 border-t border-[#e8e4dc]">
            <div className="flex items-center gap-1 text-[#b88e4c]">
              <Star className="w-4 h-4 fill-[#b88e4c]" />
              <span className="font-bold text-[#1a1917]">{course.rating}</span>
              <span>({course.reviewCount} valoraciones)</span>
            </div>

            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-[#8a3b32]" />
              <span>{course.enrolledCount.toLocaleString()} profesionales inscritos</span>
            </div>

            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-[#2d4a3e]" />
              <span>{course.estimatedHours} horas de estudio</span>
            </div>
          </div>
        </div>

        {/* Instructor Section */}
        <div className="my-6 p-4 rounded-2xl bg-[#fbf9f5] border border-[#e8e4dc] flex items-center gap-4">
          <img
            src={course.instructor.avatar}
            alt={course.instructor.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-[#b88e4c]"
          />
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#b88e4c]">Profesor de la Clase</span>
            <h4 className="font-serif font-bold text-[#1a1917] text-base">{course.instructor.name}</h4>
            <p className="text-xs text-[#6b665e]">{course.instructor.role} — <strong className="text-[#1a1917]">{course.instructor.organization}</strong></p>
          </div>
        </div>

        {/* What You Will Learn */}
        <div className="space-y-3 mb-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#1a1917]">Objetivos de Aprendizaje Ejecutivo</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {course.learningOutcomes.map((outcome, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#4a463f]">
                <CheckCircle2 className="w-4 h-4 text-[#2d4a3e] shrink-0 mt-0.5" />
                <span>{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Syllabus Overview */}
        <div className="space-y-3 mb-8">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#1a1917]">Temario y Casos Prácticos</h3>
          <div className="space-y-2">
            {course.exercises.map((ex, idx) => (
              <div key={ex.id || idx} className="p-3.5 rounded-xl border border-[#e8e4dc] bg-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#f4f0e6] flex items-center justify-center text-xs font-bold text-[#1a1917] font-mono">
                    0{idx + 1}
                  </div>
                  <div>
                    <h5 className="font-serif font-bold text-xs text-[#1a1917]">{ex.title}</h5>
                    <p className="text-[11px] text-[#6b665e] line-clamp-1">{ex.scenario}</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono font-bold text-[#b88e4c]">+{ex.xpPoints} XP</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#e8e4dc]">
          <div className="flex items-center gap-2 text-xs text-[#6b665e]">
            <ShieldCheck className="w-4 h-4 text-[#2d4a3e]" />
            <span>Acceso ilimitado a casos de estudio y certificado de finalización</span>
          </div>

          <button
            onClick={() => onStartCourse(course)}
            className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[#1a1917] hover:bg-[#b88e4c] text-white font-serif font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
          >
            <span>Iniciar Clase Virtual</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};
