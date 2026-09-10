'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { FacultyCard } from '@/components/FacultyCard';
import { PracticalModuleCard } from '@/components/PracticalModuleCard';
import { CourseDetailModal } from '@/components/CourseDetailModal';
import { InteractiveDrillViewer } from '@/components/InteractiveDrillViewer';
import { FACULTIES } from '@/data/mockModules';
import { Faculty, PracticalModule, UserSkillStats } from '@/types/learning';
import { ArrowLeft, Landmark } from 'lucide-react';

import { FacultyCurriculumView } from '@/components/FacultyCurriculumView';
import { SchoolCurriculumView } from '@/components/SchoolCurriculumView';

export default function FacultadesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [faculties] = useState<Faculty[]>(FACULTIES);
  const [selectedFacultyId, setSelectedFacultyId] = useState<string | null>(null);
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);

  const [previewCourse, setPreviewCourse] = useState<PracticalModule | null>(null);
  const [activeClassroomCourse, setActiveClassroomCourse] = useState<PracticalModule | null>(null);

  const [userStats, setUserStats] = useState<UserSkillStats>({
    level: 5,
    currentXp: 890,
    nextLevelXp: 1500,
    dayStreak: 14,
    completedPractices: 18,
  });

  // Initialize selectedFaculty from URL on mount
  useEffect(() => {
    const facultyId = searchParams.get('faculty');
    if (facultyId) {
      const faculty = faculties.find(f => f.id === facultyId);
      if (faculty) {
        setSelectedFacultyId(facultyId);
        setSelectedFaculty(faculty);
      }
    }
  }, [searchParams, faculties]);

  const handleEarnXp = (xp: number) => {
    setUserStats((prev) => ({
      ...prev,
      currentXp: prev.currentXp + xp,
      completedPractices: prev.completedPractices + 1,
    }));
  };

  const handleSelectFaculty = (faculty: Faculty) => {
    setSelectedFaculty(faculty);
    setSelectedFacultyId(faculty.id);
    router.push(`/facultades?faculty=${faculty.id}`);
  };

  const handleBackToFaculties = () => {
    setSelectedFaculty(null);
    setSelectedFacultyId(null);
    router.push('/facultades');
  };

  // Faculty detail component
  const FacultyDetail = () => {
    if (!selectedFaculty) return null;
    if (selectedFaculty.categories && selectedFaculty.categories.length > 0) {
      return (
        <FacultyCurriculumView
          faculty={selectedFaculty}
          onBack={handleBackToFaculties}
          onSelectCourse={(c) => setPreviewCourse(c)}
          onSelectPath={(path) => console.log('Path selected:', path.title)}
        />
      );
    }
    return (
      <SchoolCurriculumView
        school={selectedFaculty}
        onBack={handleBackToFaculties}
        onSelectCourse={(c) => setPreviewCourse(c)}
      />
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f5] text-[#1a1917] font-sans selection:bg-[#b88e4c]/20 selection:text-[#1a1917]">
      {/* Minimalist Navbar */}
      <Navbar stats={userStats} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8 space-y-6 sm:space-y-10">

        {!selectedFaculty ? (
          /* VIEW A: FULL FACULTIES CATALOG DIRECTORY */
          <div className="space-y-8 sm:space-y-10">
            {/* Header Banner */}
            <section className="space-y-3 sm:space-y-4 max-w-3xl border-b border-[#e8e4dc] pb-6 sm:pb-8">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#b88e4c]">
                  ALEJANDRÍA · DIRECTORIO ACADÉMICO
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1a1917] leading-tight tracking-tight">
                Facultades del Conocimiento
              </h1>

              <p className="text-sm sm:text-base text-[#6b665e] leading-relaxed font-sans max-w-2xl">
                Directorio oficial completo con las 8 Facultades Académicas de Alejandría. Selecciona cualquier facultad para explorar sus programas ejecutivos y casos de producción.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-6 text-xs text-[#6b665e] font-sans font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b88e4c]" />
                  8 Facultades Oficiales
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2d4a3e]" />
                  Casos Prácticos Reales
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1e293b]" />
                  Certificación del Sistema
                </span>
              </div>
            </section>

            {/* Full Symmetric 2-Column Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {faculties.map((fac) => (
                <FacultyCard
                  key={fac.id}
                  faculty={fac}
                  onSelectFaculty={handleSelectFaculty}
                />
              ))}
            </section>
          </div>
        ) : (
          /* VIEW B: SELECTED FACULTY CURRICULUM VIEW WITH LEARNING PATHS */
          <FacultyDetail />
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
