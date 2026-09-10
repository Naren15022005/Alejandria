'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { FacultyCard } from '@/components/FacultyCard';
import { PracticalModuleCard } from '@/components/PracticalModuleCard';
import { CourseDetailModal } from '@/components/CourseDetailModal';
import { InteractiveDrillViewer } from '@/components/InteractiveDrillViewer';
import { MOCK_MODULES, FACULTIES, SCHOOLS } from '@/data/mockModules';
import { PracticalModule, Faculty, UserSkillStats } from '@/types/learning';
import { ArrowLeft, ArrowRight, BookOpen, GraduationCap, Landmark, ShieldCheck, Award } from 'lucide-react';

import { FacultyCarousel } from '@/components/FacultyCarousel';
import { SchoolCurriculumView } from '@/components/SchoolCurriculumView';

export default function Home() {
  const router = useRouter();
  const [faculties] = useState<Faculty[]>(FACULTIES);
  const [schools] = useState<Faculty[]>(SCHOOLS);
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);
  const [showFullGrid, setShowFullGrid] = useState<boolean>(false);
  const [showFullSchoolsGrid, setShowFullSchoolsGrid] = useState<boolean>(false);
  
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

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f5] text-[#1a1917] font-sans selection:bg-[#b88e4c]/20 selection:text-[#1a1917]">
      {/* Minimalist Navbar */}
      <Navbar stats={userStats} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8 space-y-6 sm:space-y-10">
        
        {/* VIEW 1: ACADEMIC FACULTIES HOMEPAGE */}
        {!selectedFaculty ? (
          <div className="space-y-8 sm:space-y-12">
            {/* Clean Institutional Hero Section */}
            <section className="space-y-3 sm:space-y-4 max-w-3xl border-b border-[#e8e4dc] pb-6 sm:pb-8">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#b88e4c]">
                  ALEJANDRÍA · ARCHIVO ACADÉMICO
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1a1917] leading-tight tracking-tight">
                Facultades del Conocimiento
              </h1>

              <p className="text-sm sm:text-base text-[#6b665e] leading-relaxed font-sans max-w-2xl">
                Un entorno de aprendizaje organizado formalmente por facultades y escuelas especializadas. Selecciona un programa para explorar sus casos prácticos.
              </p>

              {/* Honest Grounded Indicators */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-6 text-xs text-[#6b665e] font-sans font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b88e4c]" />
                  8 Facultades Especializadas
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2d4a3e]" />
                  17 Escuelas Tácticas
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1e293b]" />
                  Evaluación Táctica Inmediata
                </span>
              </div>
            </section>

            {/* SECCIÓN 1: CARRUSEL / GRILLA DE FACULTADES */}
            {!showFullGrid ? (
              <section>
                <FacultyCarousel
                  faculties={faculties}
                  onSelectFaculty={(faculty) => setSelectedFaculty(faculty)}
                  onViewAll={() => router.push('/facultades')}
                  title="Directorio de Facultades"
                  buttonText="Ver todas las facultades"
                />
              </section>
            ) : (
              <section className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#e8e4dc] pb-3">
                  <span className="text-xs font-serif font-bold text-[#1a1917] uppercase tracking-wider">
                    Catálogo Completo de Facultades ({faculties.length})
                  </span>

                  <button
                    onClick={() => setShowFullGrid(false)}
                    className="text-xs font-serif font-bold text-[#6b665e] hover:text-[#1a1917] transition-colors"
                  >
                    ← Volver a Vista Carrusel
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  {faculties.map((fac) => (
                    <FacultyCard
                      key={fac.id}
                      faculty={fac}
                      onSelectFaculty={(faculty) => setSelectedFaculty(faculty)}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* SECCIÓN 2: CARRUSEL / GRILLA DE ESCUELAS */}
            <section className="pt-6 space-y-6">
              <div className="space-y-1 border-b border-[#e8e4dc] pb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#b88e4c]">
                  ALEJANDRÍA · ESPECIALIZACIÓN TÁCTICA
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1a1917]">
                  Escuelas Especializadas
                </h2>
                <p className="text-xs sm:text-sm text-[#6b665e] max-w-2xl font-sans">
                  Programas intensivos enfocados en competencias técnicas avanzadas y herramientas de vanguardia.
                </p>
              </div>

              {!showFullSchoolsGrid ? (
                <FacultyCarousel
                  faculties={schools}
                  onSelectFaculty={(faculty) => setSelectedFaculty(faculty)}
                  onViewAll={() => router.push('/escuelas')}
                  title="Directorio de Escuelas"
                  buttonText="Ver todas las escuelas"
                />
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-[#e8e4dc] pb-3">
                    <span className="text-xs font-serif font-bold text-[#1a1917] uppercase tracking-wider">
                      Catálogo Completo de Escuelas ({schools.length})
                    </span>

                    <button
                      onClick={() => setShowFullSchoolsGrid(false)}
                      className="text-xs font-serif font-bold text-[#6b665e] hover:text-[#1a1917] transition-colors"
                    >
                      ← Volver a Vista Carrusel
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    {schools.map((esc) => (
                      <FacultyCard
                        key={esc.id}
                        faculty={esc}
                        onSelectFaculty={(faculty) => setSelectedFaculty(faculty)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </section>
          </div>
        ) : (
          /* VIEW 2: SELECTED PROGRAM CURRICULUM VIEW WITH LEARNING PATHS */
          <SchoolCurriculumView
            school={selectedFaculty}
            onBack={() => setSelectedFaculty(null)}
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
