'use client';

import React, { useState } from 'react';
import { Faculty, PracticalModule, LearningPath, LearningCategory } from '@/types/learning';
import { 
  ArrowLeft, Landmark, Brain, Code, Layout, Server, Layers, 
  Smartphone, Monitor, Globe, Cpu, Terminal, Cloud, CheckCircle2, 
  Database, Link as LinkIcon, Compass, ChevronRight, Sparkles,
  ShieldCheck, Clock, BookOpen, GitBranch, Play, Check, X,
  Navigation, Eye, Factory, Truck, BarChart3, TrendingUp, Zap, GitBranch as GitBranchIcon
} from 'lucide-react';

interface FacultyCurriculumViewProps {
  faculty: Faculty;
  onBack: () => void;
  onSelectCourse: (course: PracticalModule) => void;
  onSelectPath: (path: LearningPath) => void;
}

export const FacultyCurriculumView: React.FC<FacultyCurriculumViewProps> = ({
  faculty,
  onBack,
  onSelectCourse,
  onSelectPath,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<LearningCategory | null>(null);
  const [selectedPath, setSelectedPath] = useState<LearningPath | null>(null);

  const categories = faculty.categories || [];
  const allPaths = categories.flatMap(c => c.paths || []);
  const totalHours = allPaths.reduce((acc, p) => acc + (p.estimatedHours || 0), 0);

  const getPathIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Brain': return <Brain className="w-5 h-5 text-[#b88e4c]" />;
      case 'Code': return <Code className="w-5 h-5 text-[#b88e4c]" />;
      case 'Layout': return <Layout className="w-5 h-5 text-[#2d4a3e]" />;
      case 'Server': return <Server className="w-5 h-5 text-[#8c3b30]" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#1e293b]" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-[#8c3b30]" />;
      case 'Monitor': return <Monitor className="w-5 h-5 text-[#1e293b]" />;
      case 'Globe': return <Globe className="w-5 h-5 text-[#b88e4c]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#2d4a3e]" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-[#1a1917]" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-[#b88e4c]" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-[#2d4a3e]" />;
      case 'Database': return <Database className="w-5 h-5 text-[#2d4a3e]" />;
      case 'Link': return <LinkIcon className="w-5 h-5 text-[#2d4a3e]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#b88e4c]" />;
      case 'Navigation': return <Navigation className="w-5 h-5 text-[#b88e4c]" />;
      case 'Eye': return <Eye className="w-5 h-5 text-[#8c3b30]" />;
      case 'Factory': return <Factory className="w-5 h-5 text-[#2d4a3e]" />;
      case 'Truck': return <Truck className="w-5 h-5 text-[#1e293b]" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-[#b88e4c]" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#8c3b30]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#b88e4c]" />;
      case 'GitBranch': return <GitBranchIcon className="w-5 h-5 text-[#2d4a3e]" />;
      default: return <Sparkles className="w-5 h-5 text-[#b88e4c]" />;
    }
  };

  const getDifficultyBadge = (difficulty?: string) => {
    switch (difficulty) {
      case 'Principiante': return 'bg-[#2d4a3e]/10 text-[#2d4a3e] border-[#2d4a3e]/20';
      case 'Intermedio': return 'bg-[#b88e4c]/10 text-[#b88e4c] border-[#b88e4c]/20';
      case 'Avanzado': return 'bg-[#8c3b30]/10 text-[#8c3b30] border-[#8c3b30]/20';
      case 'Ejecutivo': return 'bg-[#1a1917] text-white border-[#1a1917]';
      default: return 'bg-[#f4f0e6] text-[#6b665e] border-[#e2dcd0]';
    }
  };

  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty) {
      case 'Principiante': return '#2d4a3e';
      case 'Intermedio': return '#b88e4c';
      case 'Avanzado': return '#8c3b30';
      case 'Ejecutivo': return '#1a1917';
      default: return '#b88e4c';
    }
  };

  const handleCategorySelect = (category: LearningCategory) => {
    setSelectedCategory(category);
    setSelectedPath(null);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSelectedPath(null);
  };

  const handlePathSelect = (path: LearningPath) => {
    setSelectedPath(path);
    onSelectPath(path);
  };

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs font-mono text-[#8c8577]">
          <span>Facultades</span>
          <span>/</span>
          <span className="font-bold text-[#1a1917]">{faculty.code}</span>
        </div>
        <button
          onClick={onBack}
          className="text-xs font-serif font-bold text-[#6b665e] hover:text-[#1a1917] transition-colors flex items-center gap-1"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Volver a Facultades
        </button>
      </div>

      {/* FACULTY HEADER BANNER */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e8e4dc] shadow-sm space-y-6 relative overflow-hidden">
        {/* Top Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#f4f0e6] pb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono font-bold text-xs text-[#b88e4c] bg-[#fbf9f5] px-3 py-1 rounded-lg border border-[#e2dcd0]">
              {faculty.code}
            </span>
            <div className="h-4 w-[1px] bg-[#e8e4dc]" />
            <span className="font-serif font-semibold text-xs text-[#1a1917]">
              Facultad Nº {faculty.romanNumeral}
            </span>
          </div>
          <span className="font-serif italic text-xs text-[#b88e4c] bg-[#fbf9f5] px-3.5 py-1 rounded-full border border-[#e8e4dc]">
            &ldquo;{faculty.latinMotto}&rdquo;
          </span>
        </div>

        {/* Name & Description */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#f4f0e6] border border-[#e2dcd0] flex items-center justify-center text-[#b88e4c]">
              {getPathIcon(faculty.icon)}
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a1917] tracking-tight">
              {faculty.name}
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-[#5c574f] leading-relaxed font-sans max-w-3xl sm:pl-15">
            {faculty.description}
          </p>
        </div>

        {/* Metrics Bar */}
        <div className="pt-6 border-t border-[#f4f0e6] grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 font-sans">
          <div className="sm:pr-6 sm:border-r border-[#f4f0e6] space-y-1">
            <div className="flex items-center gap-1.5 text-[#8c8577] text-xs">
              <BookOpen className="w-3.5 h-3.5 text-[#b88e4c]" />
              <span>Pilares de Especialización</span>
            </div>
            <p className="font-serif font-bold text-base text-[#1a1917]">{categories.length} Pilares</p>
          </div>
          <div className="sm:px-6 sm:border-r border-[#f4f0e6] space-y-1">
            <div className="flex items-center gap-1.5 text-[#8c8577] text-xs">
              <GitBranch className="w-3.5 h-3.5 text-[#b88e4c]" />
              <span>Rutas de Aprendizaje</span>
            </div>
            <p className="font-serif font-bold text-base text-[#b88e4c]">{allPaths.length} Rutas</p>
          </div>
          <div className="sm:px-6 sm:border-r border-[#f4f0e6] space-y-1">
            <div className="flex items-center gap-1.5 text-[#8c8577] text-xs">
              <Clock className="w-3.5 h-3.5 text-[#b88e4c]" />
              <span>Horas de Instrucción</span>
            </div>
            <p className="font-serif font-bold text-base text-[#1a1917]">~{totalHours} Horas</p>
          </div>
          <div className="sm:pl-6 space-y-1">
            <div className="flex items-center gap-1.5 text-[#8c8577] text-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2d4a3e]" />
              <span>Acreditación Oficial</span>
            </div>
            <p className="font-serif font-bold text-base text-[#2d4a3e]">Sistema Alejandría</p>
          </div>
        </div>
      </section>

      {/* VIEW 1: PILLAR CARDS GRID */}
      {!selectedCategory && (
        <section className="space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#b88e4c]">
                {faculty.code} · PILARES DE ESPECIALIZACIÓN
              </span>
              <h2 className="text-lg sm:text-xl font-serif font-bold text-[#1a1917] mt-0.5">
                Selecciona un pilar para explorar sus rutas
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category, catIndex) => (
              <article
                key={category.id}
                onClick={() => handleCategorySelect(category)}
                className="group cursor-pointer bg-white rounded-xl p-5 border border-[#e8e4dc] hover:border-[#b88e4c] hover:shadow-xl hover:shadow-[#b88e4c]/15 transition-all duration-300 flex flex-col space-y-4 relative overflow-hidden"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b88e4c] to-[#d4a85c] opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f4f0e6] to-[#ebe5dc] border border-[#e2dcd0] flex items-center justify-center text-[#b88e4c] shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    {getPathIcon(category.icon)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="font-mono text-[10px] font-bold text-[#b88e4c] block mb-1">
                      Pilar 0{catIndex + 1}
                    </span>
                    <h3 className="font-serif font-bold text-lg text-[#1a1917] group-hover:text-[#b88e4c] transition-colors line-clamp-1 mb-1">
                      {category.title}
                    </h3>
                    {category.description && (
                      <p className="text-[11px] text-[#6b665e] line-clamp-2 leading-relaxed font-sans">
                        {category.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#f4f0e6] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[11px] text-[#8c8577]">
                    <BookOpen className="w-3.5 h-3.5 text-[#b88e4c]/60" />
                    <span className="font-medium">{category.paths?.length || 0} rutas</span>
                    <span className="text-[#e8e4dc]">·</span>
                    <span className="font-mono text-[#b88e4c]">
                      ~{category.paths?.reduce((acc, p) => acc + (p.estimatedHours || 0), 0) || 0}h
                    </span>
                  </div>
                  <span className="font-serif font-bold text-[#b88e4c] group-hover:text-[#1a1917] flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#fbf9f5] border border-[#e8e4dc] hover:bg-[#f4f0e6] transition-all">
                    Explorar
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* VIEW 2: PATHS GRID FOR SELECTED PILLAR */}
      {selectedCategory && (
        <section className="space-y-6">
          {/* Pillar Header */}
          <div className="bg-white rounded-2xl p-5 border border-[#e8e4dc] flex items-center justify-between flex-wrap gap-4 shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#f4f0e6] border border-[#e2dcd0] flex items-center justify-center text-[#b88e4c]">
                {getPathIcon(selectedCategory.icon)}
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-[#1a1917]">
                  {selectedCategory.title}
                </h3>
                <p className="text-xs text-[#6b665e]">
                  {selectedCategory.paths?.length || 0} rutas de aprendizaje especializadas
                </p>
              </div>
            </div>
            <button
              onClick={handleBackToCategories}
              className="text-xs font-serif font-bold text-[#6b665e] hover:text-[#1a1917] transition-colors flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#fbf9f5] border border-[#e8e4dc]"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Volver a Pilares
            </button>
          </div>

          {/* Paths Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedCategory.paths?.map((path, pIdx) => (
              <article
                key={path.id}
                onClick={() => handlePathSelect(path)}
                className="group cursor-pointer bg-white rounded-xl p-4 border border-[#e8e4dc] hover:border-[#b88e4c] hover:shadow-xl hover:shadow-[#b88e4c]/15 transition-all duration-300 flex flex-col justify-between space-y-3 relative overflow-hidden"
              >
                {/* Difficulty accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: getDifficultyColor(path.difficulty) }} />
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f4f0e6] to-[#ebe5dc] border border-[#e2dcd0] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {getPathIcon(path.icon)}
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${getDifficultyBadge(path.difficulty)} shadow-sm`}>
                      {path.difficulty || 'Técnica'}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-[#b88e4c] uppercase font-bold tracking-wider">
                      Ruta 0{pIdx + 1}
                    </span>
                    <h4 className="font-serif font-bold text-base text-[#1a1917] group-hover:text-[#b88e4c] transition-colors mt-0.5 line-clamp-1">
                      {path.title}
                    </h4>
                  </div>

                  <p className="text-[11px] text-[#6b665e] leading-relaxed font-sans line-clamp-2">
                    {path.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#f4f0e6] space-y-3">
                  {path.topics && path.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {path.topics.slice(0, 4).map((t, idx) => (
                        <span key={idx} className="text-[10px] font-sans text-[#4a463f] bg-[#fbf9f5] border border-[#e8e4dc] px-2 py-0.5 rounded font-medium hover:bg-[#f4f0e6] hover:border-[#b88e4c] transition-all">
                          {t}
                        </span>
                      ))}
                      {path.topics.length > 4 && (
                        <span className="text-[10px] font-sans text-[#b88e4c] font-bold flex items-center px-2 py-0.5">
                          +{path.topics.length - 4}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs pt-2 border-t border-[#f4f0e6]">
                    <span className="font-mono text-[#8c8577] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#b88e4c]/60" />
                      {path.estimatedHours || 0}h
                    </span>
                    <span className="font-serif font-bold text-[#b88e4c] group-hover:text-[#1a1917] flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#fbf9f5] border border-[#e8e4dc] hover:bg-[#f4f0e6] transition-all">
                      Ver detalle
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {(!selectedCategory.paths || selectedCategory.paths.length === 0) && (
            <div className="text-center py-12 bg-white rounded-xl border border-[#e8e4dc]">
              <p className="text-[#6b665e]">Este pilar no tiene rutas definidas aún.</p>
            </div>
          )}
        </section>
      )}

      {/* PATH DETAIL MODAL */}
      {selectedPath && (
        <div className="fixed inset-0 z-50 bg-[#1a1917]/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full border border-[#e8e4dc] space-y-6 shadow-xl relative">
            <div className="flex items-center justify-between border-b border-[#f4f0e6] pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#f4f0e6] border border-[#e2dcd0] flex items-center justify-center">
                  {getPathIcon(selectedPath.icon)}
                </div>
                <div>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border ${getDifficultyBadge(selectedPath.difficulty)}`}>
                    {selectedPath.difficulty || 'Ruta Técnica'}
                  </span>
                  <h3 className="font-serif font-bold text-xl text-[#1a1917] mt-1">
                    {selectedPath.title}
                  </h3>
                </div>
              </div>
              <button 
                onClick={() => setSelectedPath(null)}
                className="w-8 h-8 rounded-full bg-[#f4f0e6] hover:bg-[#e8e4dc] text-[#1a1917] flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-serif font-bold uppercase tracking-wider text-[#b88e4c] mb-2">
                  Descripción de la Ruta Técnica
                </h4>
                <p className="text-xs sm:text-sm text-[#6b665e] leading-relaxed font-sans bg-[#fbf9f5] p-4 rounded-2xl border border-[#e8e4dc]">
                  {selectedPath.description}
                </p>
              </div>

              {selectedPath.topics && selectedPath.topics.length > 0 && (
                <div>
                  <h4 className="text-xs font-serif font-bold uppercase tracking-wider text-[#1a1917] mb-3">
                    Temario y Competencias de Producción
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedPath.topics.map((top, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#1a1917] bg-white border border-[#e8e4dc] p-3 rounded-xl font-medium hover:bg-[#fbf9f5] transition-colors">
                        <Check className="w-4 h-4 text-[#2d4a3e] shrink-0" />
                        <span>{top}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-[#f4f0e6] flex items-center justify-between flex-wrap gap-4">
                <div className="text-xs font-mono text-[#8c8577] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Duración estimada: </span>
                  <strong className="text-[#1a1917]">{selectedPath.estimatedHours || 45} horas</strong>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedPath(null)}
                    className="px-4 py-2.5 rounded-xl border border-[#e8e4dc] text-xs font-serif font-bold text-[#6b665e] hover:text-[#1a1917] transition-colors"
                  >
                    Cerrar
                  </button>
                  <button
                    onClick={() => {
                      setSelectedPath(null);
                      if (faculty.courses[0]) onSelectCourse(faculty.courses[0]);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-[#1a1917] hover:bg-[#b88e4c] text-white text-xs font-serif font-bold transition-all shadow-xs flex items-center gap-2"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Iniciar Ruta de Entrenamiento</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};