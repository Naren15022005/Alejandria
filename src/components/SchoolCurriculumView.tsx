'use client';

import React, { useState } from 'react';
import { Faculty, PracticalModule, LearningPath, LearningCategory } from '@/types/learning';
import { PracticalModuleCard } from '@/components/PracticalModuleCard';
import { 
  ArrowLeft, Landmark, Brain, Code, Layout, Server, Layers, 
  Smartphone, Monitor, Globe, Cpu, Terminal, Cloud, CheckCircle2, 
  Database, Link as LinkIcon, Compass, ChevronDown, ChevronRight, ChevronLeft, Sparkles,
  Search, ShieldCheck, Clock, BookOpen, GitBranch, Play, Check, X,
  Navigation, Eye, Factory, Truck, BarChart3, TrendingUp, Zap, GitBranch as GitBranchIcon
} from 'lucide-react';

interface SchoolCurriculumViewProps {
  school: Faculty;
  onBack: () => void;
  onSelectCourse: (course: PracticalModule) => void;
}

export const SchoolCurriculumView: React.FC<SchoolCurriculumViewProps> = ({
  school,
  onBack,
  onSelectCourse,
}) => {
  const [activeTab, setActiveTab] = useState<'categories' | 'tree' | 'catalog' | 'practices'>(
    school.categories && school.categories.length > 0 ? 'categories' : 'tree'
  );
  
  const [selectedCategory, setSelectedCategory] = useState<LearningCategory | null>(null);
  
  // Independent open state for each category
  const [openCategories, setOpenCategories] = useState<string[]>(
    () => school.categories?.map((c) => c.id) || []
  );

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPath, setSelectedPath] = useState<LearningPath | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('Todos');

  const toggleCategory = (catId: string) => {
    setOpenCategories((prev) =>
      prev.includes(catId) ? prev.filter((id) => id !== catId) : [...prev, catId]
    );
  };

  const toggleAllCategories = () => {
    if (!school.categories) return;
    if (openCategories.length > 0) {
      setOpenCategories([]);
    } else {
      setOpenCategories(school.categories.map((c) => c.id));
    }
  };

  const handleCategorySelect = (category: LearningCategory) => {
    setSelectedCategory(category);
    setActiveTab('tree');
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setActiveTab('categories');
  };

  // Determine which categories/paths to show
  const categoriesToShow = selectedCategory ? [selectedCategory] : (school.categories || []);
  const pathsForActiveCategory = selectedCategory 
    ? selectedCategory.paths || [] 
    : school.categories?.flatMap(c => c.paths || []) || [];

  const getPathIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Brain': return <Brain className="w-4 h-4 text-[#b88e4c]" />;
      case 'Code': return <Code className="w-4 h-4 text-[#b88e4c]" />;
      case 'Layout': return <Layout className="w-4 h-4 text-[#2d4a3e]" />;
      case 'Server': return <Server className="w-4 h-4 text-[#8c3b30]" />;
      case 'Layers': return <Layers className="w-4 h-4 text-[#1e293b]" />;
      case 'Smartphone': return <Smartphone className="w-4 h-4 text-[#8c3b30]" />;
      case 'Monitor': return <Monitor className="w-4 h-4 text-[#1e293b]" />;
      case 'Globe': return <Globe className="w-4 h-4 text-[#b88e4c]" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-[#2d4a3e]" />;
      case 'Terminal': return <Terminal className="w-4 h-4 text-[#1a1917]" />;
      case 'Cloud': return <Cloud className="w-4 h-4 text-[#b88e4c]" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-4 h-4 text-[#2d4a3e]" />;
      case 'Database': return <Database className="w-4 h-4 text-[#2d4a3e]" />;
      case 'Link': return <LinkIcon className="w-4 h-4 text-[#2d4a3e]" />;
      case 'Compass': return <Compass className="w-4 h-4 text-[#b88e4c]" />;
      case 'Navigation': return <Navigation className="w-4 h-4 text-[#b88e4c]" />;
      case 'Eye': return <Eye className="w-4 h-4 text-[#8c3b30]" />;
      case 'Factory': return <Factory className="w-4 h-4 text-[#2d4a3e]" />;
      case 'Truck': return <Truck className="w-4 h-4 text-[#1e293b]" />;
      case 'BarChart3': return <BarChart3 className="w-4 h-4 text-[#b88e4c]" />;
      case 'TrendingUp': return <TrendingUp className="w-4 h-4 text-[#8c3b30]" />;
      case 'Zap': return <Zap className="w-4 h-4 text-[#b88e4c]" />;
      case 'GitBranch': return <GitBranchIcon className="w-4 h-4 text-[#2d4a3e]" />;
      default: return <Sparkles className="w-4 h-4 text-[#b88e4c]" />;
    }
  };

  const getDifficultyBadge = (difficulty?: string) => {
    switch (difficulty) {
      case 'Principiante':
        return 'bg-[#2d4a3e]/10 text-[#2d4a3e] border-[#2d4a3e]/20';
      case 'Intermedio':
        return 'bg-[#b88e4c]/10 text-[#b88e4c] border-[#b88e4c]/20';
      case 'Avanzado':
        return 'bg-[#8c3b30]/10 text-[#8c3b30] border-[#8c3b30]/20';
      case 'Ejecutivo':
        return 'bg-[#1a1917] text-white border-[#1a1917]';
      default:
        return 'bg-[#f4f0e6] text-[#6b665e] border-[#e2dcd0]';
    }
  };

  // Flatten all paths across categories for search and filter (catalog tab)
  const allPaths: (LearningPath & { categoryTitle: string })[] = [];
  school.categories?.forEach((cat) => {
    cat.paths?.forEach((path) => {
      allPaths.push({
        ...path,
        categoryTitle: cat.title,
      });
    });
  });

  const filteredPaths = allPaths.filter((path) => {
    const matchesSearch = 
      path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      path.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      path.topics?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesDiff = selectedDifficulty === 'Todos' || path.difficulty === selectedDifficulty;
    return matchesSearch && matchesDiff;
  });

  const totalHours = allPaths.reduce((acc, p) => acc + (p.estimatedHours || 0), 0);
  const categoryTotalHours = pathsForActiveCategory.reduce((acc, p) => acc + (p.estimatedHours || 0), 0);

  return (
    <div className="space-y-8">
      {/* Top Breadcrumb & Navigation */}
      <div className="flex items-center justify-end gap-4">
        <div className="flex items-center gap-2 text-xs font-mono text-[#8c8577]">
          <span>Escuelas</span>
          <span>/</span>
          <span className="font-bold text-[#1a1917]">{school.code}</span>
        </div>
      </div>

      {/* LUXURY EXECUTIVE ACADEMIC BANNER */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e8e4dc] shadow-sm space-y-6 relative overflow-hidden">
        {/* Top Header Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#f4f0e6] pb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono font-bold text-xs text-[#b88e4c] bg-[#fbf9f5] px-3 py-1 rounded-lg border border-[#e2dcd0]">
              {school.code}
            </span>
            <div className="h-4 w-[1px] bg-[#e8e4dc]" />
            <span className="font-serif font-semibold text-xs text-[#1a1917]">
              Escuela de Formación Táctica Nº {school.romanNumeral}
            </span>
          </div>

          <span className="font-serif italic text-xs text-[#b88e4c] bg-[#fbf9f5] px-3.5 py-1 rounded-full border border-[#e8e4dc]">
            "{school.latinMotto}"
          </span>
        </div>

        {/* School Name & Description */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f4f0e6] border border-[#e2dcd0] flex items-center justify-center text-[#b88e4c]">
              {getPathIcon(school.icon)}
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a1917] tracking-tight">
              {school.name}
            </h1>
          </div>

          <p className="text-xs sm:text-sm text-[#5c574f] leading-relaxed font-sans max-w-3xl sm:pl-13">
            {school.description}
          </p>
        </div>

        {/* Key Competencies Chips */}
        {school.keyCompetencies && (
          <div className="flex flex-wrap gap-2 pt-1 sm:pl-13">
            {school.keyCompetencies.map((comp, idx) => (
              <span 
                key={idx} 
                className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#3a3732] bg-[#fbf9f5] border border-[#e8e4dc] px-3 py-1 rounded-full"
              >
                <Check className="w-3.5 h-3.5 text-[#b88e4c]" />
                <span>{comp}</span>
              </span>
            ))}
          </div>
        )}

        {/* Executive Metric Indicators Bar */}
        <div className="pt-6 border-t border-[#f4f0e6] grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 font-sans">
          <div className="sm:pr-6 sm:border-r border-[#f4f0e6] space-y-1">
            <div className="flex items-center gap-1.5 text-[#8c8577] text-xs">
              <Brain className="w-3.5 h-3.5 text-[#b88e4c]" />
              <span>Pilares Principales</span>
            </div>
            <p className="font-serif font-bold text-base text-[#1a1917]">
              {school.categories?.length || 2} Pilares
            </p>
          </div>

          <div className="sm:px-6 sm:border-r border-[#f4f0e6] space-y-1">
            <div className="flex items-center gap-1.5 text-[#8c8577] text-xs">
              <GitBranch className="w-3.5 h-3.5 text-[#b88e4c]" />
              <span>Rutas Especializadas</span>
            </div>
            <p className="font-serif font-bold text-base text-[#b88e4c]">
              {allPaths.length} Rutas
            </p>
          </div>

          <div className="sm:px-6 sm:border-r border-[#f4f0e6] space-y-1">
            <div className="flex items-center gap-1.5 text-[#8c8577] text-xs">
              <Clock className="w-3.5 h-3.5 text-[#b88e4c]" />
              <span>Horas de Instrucción</span>
            </div>
            <p className="font-serif font-bold text-base text-[#1a1917]">
              ~{totalHours || 550} Horas
            </p>
          </div>

          <div className="sm:pl-6 space-y-1">
            <div className="flex items-center gap-1.5 text-[#8c8577] text-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2d4a3e]" />
              <span>Acreditación Oficial</span>
            </div>
            <p className="font-serif font-bold text-base text-[#2d4a3e]">
              Sistema Alejandría
            </p>
          </div>
        </div>
      </section>

      {/* NAVIGATION SWITCHER TABS */}
      <div className="flex items-center justify-between flex-wrap gap-4 border-b border-[#e8e4dc] pb-4">
        <div className="flex items-center gap-2 bg-[#f4f0e6] p-1 rounded-2xl border border-[#e2dcd0]">
          {school.categories && school.categories.length > 0 && (
            <button
              onClick={handleBackToCategories}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-serif font-bold transition-all ${
                activeTab === 'categories'
                  ? 'bg-white text-[#1a1917] shadow-2xs'
                  : 'text-[#6b665e] hover:text-[#1a1917]'
              }`}
            >
              <Layout className="w-3.5 h-3.5 text-[#b88e4c]" />
              <span>Pilares ({school.categories.length})</span>
            </button>
          )}
          <button
            onClick={() => setActiveTab('tree')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-serif font-bold transition-all ${
              activeTab === 'tree'
                ? 'bg-white text-[#1a1917] shadow-2xs'
                : 'text-[#6b665e] hover:text-[#1a1917]'
            }`}
          >
            <GitBranch className="w-3.5 h-3.5 text-[#b88e4c]" />
            <span>{selectedCategory ? 'Árbol: ' + selectedCategory.title : 'Árbol Curricular'}</span>
          </button>

          <button
            onClick={() => setActiveTab('catalog')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-serif font-bold transition-all ${
              activeTab === 'catalog'
                ? 'bg-white text-[#1a1917] shadow-2xs'
                : 'text-[#6b665e] hover:text-[#1a1917]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-[#b88e4c]" />
            <span>Catálogo de Rutas ({allPaths.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('practices')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-serif font-bold transition-all ${
              activeTab === 'practices'
                ? 'bg-white text-[#1a1917] shadow-2xs'
                : 'text-[#6b665e] hover:text-[#1a1917]'
            }`}
          >
            <Terminal className="w-3.5 h-3.5 text-[#b88e4c]" />
            <span>Casos Prácticos ({school.courses.length})</span>
          </button>
        </div>

        {/* Search & Filter Bar */}
        {activeTab === 'catalog' && (
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 text-[#948e82] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar ruta..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 bg-white border border-[#e8e4dc] focus:border-[#1a1917] rounded-xl text-xs font-sans text-[#1a1917] outline-none"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#948e82]">
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="bg-white border border-[#e8e4dc] focus:border-[#1a1917] rounded-xl text-xs font-sans text-[#1a1917] px-3 py-1.5 outline-none"
            >
              <option value="Todos">Todas las Dificultades</option>
              <option value="Principiante">Principiante</option>
              <option value="Intermedio">Intermedio</option>
              <option value="Avanzado">Avanzado</option>
              <option value="Ejecutivo">Ejecutivo</option>
            </select>
          </div>
        )}
      </div>

      {/* TAB 0: CATEGORIES CARDS VIEW (Pilares) - DISABLED FOR DEBUG */}
      {/* {activeTab === 'categories' && (
        <section className="space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#b88e4c]">
                {school.code} · PILARES DE ESPECIALIZACIÓN
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1a1917] mt-1">
                Selecciona un pilar para explorar sus rutas de aprendizaje
              </h2>
              <p className="text-xs sm:text-sm text-[#6b665e] mt-1 max-w-2xl">
                Cada pilar agrupa rutas especializadas coherentes. Haz clic para ver el árbol curricular detallado.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {school.categories?.map((category, catIndex) => (
              <div
                key={category.id}
                onClick={() => handleCategorySelect(category)}
                className="group cursor-pointer bg-white rounded-xl p-5 border border-[#e8e4dc] hover:border-[#b88e4c] hover:shadow-md transition-all duration-300 flex flex-col space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#f4f0e6] border border-[#e2dcd0] flex items-center justify-center text-[#b88e4c] shrink-0">
                    {getPathIcon(category.icon)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="font-mono text-[10px] font-bold text-[#b88e4c] block mb-1">
                      Pilar 0{catIndex + 1}
                    </span>
                    <h3 className="font-serif font-bold text-base text-[#1a1917] group-hover:text-[#b88e4c] transition-colors line-clamp-1">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {category.description && (
                  <p className="text-xs text-[#6b665e] line-clamp-2 leading-relaxed font-sans">
                    {category.description}
                  </p>
                )}

                <div className="pt-2 border-t border-[#f4f0e6] flex items-center justify-between text-xs">
                  <span className="font-mono text-[#8c8577]">
                    {category.paths?.length || 0} rutas
                  </span>
                  <span className="font-serif font-bold text-[#b88e4c] group-hover:text-[#1a1917] flex items-center gap-1">
                    Explorar
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )} */}

      {/* SIMPLE CATEGORIES TAB */}
      {activeTab === 'categories' && (
        <section className="space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#b88e4c]">
                {school.code} · PILARES DE ESPECIALIZACIÓN
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1a1917] mt-1">
                Selecciona un pilar para explorar sus rutas de aprendizaje
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {school.categories?.map((category, catIndex) => (
              <div
                key={category.id}
                onClick={() => handleCategorySelect(category)}
                className="group cursor-pointer bg-white rounded-xl p-5 border border-[#e8e4dc] hover:border-[#b88e4c] hover:shadow-md transition-all duration-300 flex flex-col space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#f4f0e6] border border-[#e2dcd0] flex items-center justify-center text-[#b88e4c] shrink-0">
                    {getPathIcon(category.icon)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="font-mono text-[10px] font-bold text-[#b88e4c] block mb-1">
                      Pilar 0{catIndex + 1}
                    </span>
                    <h3 className="font-serif font-bold text-base text-[#1a1917] group-hover:text-[#b88e4c] transition-colors line-clamp-1">
                      {category.title}
                    </h3>
                  </div>
                </div>
                <div className="pt-2 border-t border-[#f4f0e6] flex items-center justify-between text-xs">
                  <span className="font-mono text-[#8c8577]">
                    {category.paths?.length || 0} rutas
                  </span>
                  <span className="font-serif font-bold text-[#b88e4c] group-hover:text-[#1a1917] flex items-center gap-1">
                    Explorar
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* TAB 1: VISUAL CURRICULUM TREE */}
      {activeTab === 'tree' && (
        <section className="space-y-6">
          {/* Main Tree Header Card */}
          <div className="bg-white rounded-2xl p-5 border border-[#e8e4dc] flex items-center justify-between flex-wrap gap-4 shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#f4f0e6] border border-[#e2dcd0] text-[#b88e4c] flex items-center justify-center font-mono font-bold text-xs">
                {school.code}
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-[#1a1917]">
                  {selectedCategory ? `Rutas de: ${selectedCategory.title}` : `Estructura Curricular Táctica: ${school.name}`}
                </h3>
                <p className="text-xs text-[#6b665e]">
                  {selectedCategory ? 'Haz clic en cualquier ruta para ver su detalle completo.' : 'Haz clic en cualquier pilar para desplegar o replegar sus rutas especializadas de instrucción.'}
                </p>
              </div>
</div>

            <div className="flex items-center justify-end gap-2">
              {selectedCategory && (
                <button
                  onClick={handleBackToCategories}
                  className="text-xs font-serif font-bold text-[#6b665e] hover:text-[#1a1917] transition-colors flex items-center gap-1"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  Volver a Pilares
                </button>
              )}

              {!selectedCategory && (
                <button
                  onClick={toggleAllCategories}
                  className="text-xs font-serif font-bold text-[#b88e4c] hover:text-[#1a1917] transition-colors bg-[#fbf9f5] border border-[#e8e4dc] px-3.5 py-1.5 rounded-xl"
                >
                  {openCategories.length > 0 ? 'Plegar Todos los Pilares' : 'Desplegar Todos los Pilares'}
                </button>
              )}
            </div>
          </div>

          {/* Hierarchy Connector List - SIMPLIFIED */}
          <div className="space-y-4">
            <p className="text-xs text-[#6b665e] text-center py-8 border-t border-[#e8e4dc]">
              Árbol curricular: {categoriesToShow.length} pilar(es) — {categoriesToShow.reduce((acc, c) => acc + (c.paths?.length || 0), 0)} rutas totales
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {categoriesToShow.map((category, catIndex) => (
                <div key={category.id} className="bg-white rounded-xl p-4 border border-[#e8e4dc] hover:border-[#b88e4c] transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#f4f0e6] border border-[#e2dcd0] flex items-center justify-center text-xs font-serif font-bold text-[#1a1917]">
                      0{catIndex + 1}
                    </div>
                    <h4 className="font-serif font-bold text-base text-[#1a1917]">{category.title}</h4>
                  </div>
                  <p className="text-xs text-[#6b665e] mb-3">{category.paths?.length || 0} rutas</p>
                  <button 
                    onClick={() => { setSelectedCategory(category); setActiveTab('tree'); }}
                    className="text-xs font-serif font-bold text-[#b88e4c] hover:text-[#1a1917] flex items-center gap-1 w-full justify-center"
                  >
                    Ver rutas <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TAB 2: COMPLETE CATALOG OF ALL RUTAS */}
      {activeTab === 'catalog' && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-xs text-[#6b665e] font-serif">
              Mostrando <strong>{filteredPaths.length}</strong> de <strong>{allPaths.length}</strong> rutas especializadas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredPaths.map((path) => (
              <div
                key={path.id}
                onClick={() => setSelectedPath(path)}
                className="bg-white rounded-2xl p-5 border border-[#e8e4dc] hover:border-[#b88e4c] hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-xl bg-[#f4f0e6] border border-[#e2dcd0] flex items-center justify-center">
                      {getPathIcon(path.icon)}
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border ${getDifficultyBadge(path.difficulty)}`}>
                      {path.difficulty || 'Especializada'}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-[#b88e4c] uppercase font-bold tracking-wider">
                      {path.categoryTitle}
                    </span>
                    <h4 className="font-serif font-bold text-lg text-[#1a1917] group-hover:text-[#b88e4c] transition-colors">
                      {path.title}
                    </h4>
                  </div>

                  <p className="text-xs text-[#6b665e] leading-relaxed font-sans line-clamp-3">
                    {path.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-[#f4f0e6]">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[#8c8577]">
                      {path.topics?.length || 0} temas
                    </span>
                    <span className="font-serif font-bold text-[#1a1917]">
                      Ver detalle →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* TAB 3: PRACTICAL DRILLS & COURSES */}
      {activeTab === 'practices' && (
        <section className="space-y-6">
          <div className="border-b border-[#e8e4dc] pb-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#b88e4c]">
              MÓDULOS DE EVALUACIÓN PRÁCTICA
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1a1917] mt-1">
              Casos de Estudio e Instrucción Ejecutiva
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {school.courses.map((course) => (
              <PracticalModuleCard
                key={course.id}
                module={course}
                onSelect={(c) => onSelectCourse(c)}
              />
            ))}
          </div>
        </section>
      )}

      {/* ROUTE DETAIL MODAL */}
      {selectedPath && (
        <div className="fixed inset-0 z-50 bg-[#1a1917]/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full border border-[#e8e4dc] space-y-6 shadow-xl relative">
            <div className="flex items-center justify-between border-b border-[#f4f0e6] pb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#f4f0e6] border border-[#e2dcd0] flex items-center justify-center">
                  {getPathIcon(selectedPath.icon)}
                </div>
                <div>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border ${getDifficultyBadge(selectedPath.difficulty)}`}>
                    {selectedPath.difficulty || 'Ruta Técnica'}
                  </span>
                  <h3 className="font-serif font-bold text-xl text-[#1a1917] mt-0.5">
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

            <div className="space-y-3">
              <h4 className="text-xs font-serif font-bold uppercase tracking-wider text-[#b88e4c]">
                Descripción de la Ruta Técnica
              </h4>
              <p className="text-xs sm:text-sm text-[#6b665e] leading-relaxed font-sans bg-[#fbf9f5] p-4 rounded-2xl border border-[#e8e4dc]">
                {selectedPath.description}
              </p>
            </div>

            {selectedPath.topics && (
              <div className="space-y-3">
                <h4 className="text-xs font-serif font-bold uppercase tracking-wider text-[#1a1917]">
                  Temario y Competencias de Producción
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedPath.topics.map((top, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#1a1917] bg-white border border-[#e8e4dc] p-2.5 rounded-xl font-medium">
                      <Check className="w-3.5 h-3.5 text-[#2d4a3e]" />
                      <span>{top}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-[#f4f0e6] flex items-center justify-between flex-wrap gap-4">
              <div className="text-xs font-mono text-[#8c8577]">
                <span>Duración estimada: </span>
                <strong className="text-[#1a1917]">{selectedPath.estimatedHours || 45} horas</strong>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedPath(null)}
                  className="px-4 py-2.5 rounded-xl border border-[#e8e4dc] text-xs font-serif font-bold text-[#6b665e] hover:text-[#1a1917] transition-colors"
                >
                  Volver
                </button>
                <button
                  onClick={() => {
                    setSelectedPath(null);
                    if (school.courses[0]) onSelectCourse(school.courses[0]);
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
      )}
    </div>
  );
};
