'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { FacultyCard } from '@/components/FacultyCard';
import { PracticalModuleCard } from '@/components/PracticalModuleCard';
import { CourseDetailModal } from '@/components/CourseDetailModal';
import { InteractiveDrillViewer } from '@/components/InteractiveDrillViewer';
import { SCHOOLS } from '@/data/mockModules';
import { Faculty, PracticalModule, UserSkillStats } from '@/types/learning';
import { ArrowLeft, Search, Landmark } from 'lucide-react';

import { SchoolCurriculumView } from '@/components/SchoolCurriculumView';

export default function EscuelasPage() {
  const [schools] = useState<Faculty[]>(SCHOOLS);
  const [selectedSchool, setSelectedSchool] = useState<Faculty | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [previewCourse, setPreviewCourse] = useState<PracticalModule | null>(null);
  const [activeClassroomCourse, setActiveClassroomCourse] = useState<PracticalModule | null>(null);

  const [userStats, setUserStats] = useState<UserSkillStats>({
    level: 5,
    currentXp: 890,
    nextLevelXp: 1500,
    dayStreak: 14,
    completedPractices: 18,
  });

  const handleEarnXp = (xp: number) => {
    setUserStats((prev) => ({
      ...prev,
      currentXp: prev.currentXp + xp,
      completedPractices: prev.completedPractices + 1,
    }));
  };

  const filteredSchools = schools.filter((esc) => {
    const query = searchQuery.toLowerCase();
    return (
      esc.name.toLowerCase().includes(query) ||
      esc.description.toLowerCase().includes(query) ||
      esc.code.toLowerCase().includes(query) ||
      esc.keyCompetencies?.some((comp) => comp.toLowerCase().includes(query))
    );
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f5] text-[#1a1917] font-sans selection:bg-[#b88e4c]/20 selection:text-[#1a1917]">
      {/* Minimalist Navbar */}
      <Navbar stats={userStats} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8 space-y-6 sm:space-y-10">

        {!selectedSchool ? (
          /* VIEW A: FULL SCHOOLS CATALOG DIRECTORY */
          <div className="space-y-8 sm:space-y-10">
            {/* Header Banner */}
            <section className="space-y-3 sm:space-y-4 max-w-3xl border-b border-[#e8e4dc] pb-6 sm:pb-8">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#b88e4c]">
                  ALEJANDRÍA · ESPECIALIZACIÓN TÁCTICA
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1a1917] leading-tight tracking-tight">
                Escuelas Especializadas
              </h1>

              <p className="text-sm sm:text-base text-[#6b665e] leading-relaxed font-sans max-w-2xl">
                Directorio oficial completo con las 17 Escuelas Tácticas de Alejandría. Programas intensivos orientados al dominio práctico de tecnologías y metodologías de vanguardia.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-6 text-xs text-[#6b665e] font-sans font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b88e4c]" />
                  17 Escuelas Tácticas
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2d4a3e]" />
                  Proyectos de Producción
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1e293b]" />
                  Evaluación Táctica Inmediata
                </span>
              </div>
            </section>

            {/* Search Bar */}
            <section className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-[#948e82] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Buscar escuela por nombre o competencia..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#e8e4dc] focus:border-[#1a1917] rounded-xl text-xs font-sans text-[#1a1917] placeholder:text-[#948e82] outline-none transition-colors"
                />
              </div>

              <div className="text-xs font-serif text-[#6b665e]">
                Mostrando <strong>{filteredSchools.length}</strong> de <strong>{schools.length}</strong> escuelas
              </div>
            </section>

            {/* Full Symmetric 2-Column Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {filteredSchools.map((esc) => (
                <FacultyCard
                  key={esc.id}
                  faculty={esc}
                  onSelectFaculty={(school) => setSelectedSchool(school)}
                />
              ))}
            </section>
          </div>
        ) : (
          /* VIEW B: SELECTED SCHOOL CURRICULUM VIEW WITH LEARNING PATHS */
          <SchoolCurriculumView
            school={selectedSchool}
            onBack={() => setSelectedSchool(null)}
            onSelectCourse={(c) => setPreviewCourse(c)}
          />
        )}

      </main>

      {/* Course Detail Modal */}
      {previewCourse && (
        <CourseDetailModal
          course={previewCourse}
          onClose={() => setPreviewCourse(null)}
          onStartCourse={(c) => {
            setPreviewCourse(null);
            setActiveClassroomCourse(c);
          }}
        />
      )}

      {/* Classroom Reader Mode Modal */}
      {activeClassroomCourse && (
        <InteractiveDrillViewer
          module={activeClassroomCourse}
          onClose={() => setActiveClassroomCourse(null)}
          onCompleteExercise={handleEarnXp}
        />
      )}

      {/* Minimalist Footer */}
      <footer className="border-t border-[#e8e4dc] py-8 text-center text-xs text-[#948e82]">
        <p>Alejandría © {new Date().getFullYear()} — Biblioteca & Centro de Conocimiento Absoluto</p>
      </footer>
    </div>
  );
}
