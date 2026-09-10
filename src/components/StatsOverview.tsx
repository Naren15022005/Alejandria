'use client';

import React from 'react';
import { UserSkillStats } from '@/types/learning';
import { Award, BookOpen, ShieldCheck, Flame } from 'lucide-react';

interface StatsOverviewProps {
  stats: UserSkillStats;
}

export const StatsOverview: React.FC<StatsOverviewProps> = ({ stats }) => {
  const xpPercent = Math.min(100, Math.round((stats.currentXp / stats.nextLevelXp) * 100));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Level & XP Card */}
      <div className="paper-card rounded-2xl p-5 border border-[#e8e4dc] bg-white">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#6b665e]">Nivel de Dominio</span>
          <div className="w-8 h-8 rounded-lg bg-[#f4f0e6] flex items-center justify-center text-[#b88e4c]">
            <Award className="w-4 h-4" />
          </div>
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-2xl font-serif font-bold text-[#1a1917]">Nivel {stats.level}</span>
          <span className="text-xs font-mono font-bold text-[#b88e4c]">{stats.currentXp} XP</span>
        </div>
        <div className="space-y-1">
          <div className="w-full h-1.5 bg-[#e8e4dc] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#b88e4c] rounded-full transition-all duration-700"
              style={{ width: `${xpPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Streak Card */}
      <div className="paper-card rounded-2xl p-5 border border-[#e8e4dc] bg-white">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#6b665e]">Racha de Lectura</span>
          <div className="w-8 h-8 rounded-lg bg-[#f4f0e6] flex items-center justify-center text-[#8c3b30]">
            <Flame className="w-4 h-4 text-[#8c3b30]" />
          </div>
        </div>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-2xl font-serif font-bold text-[#1a1917]">{stats.dayStreak} Días</span>
          <span className="text-xs font-bold text-[#8c3b30]">Constante</span>
        </div>
        <p className="text-[11px] text-[#6b665e] mt-1">Hábito de estudio diario mantenido</p>
      </div>

      {/* Exercises Completed Card */}
      <div className="paper-card rounded-2xl p-5 border border-[#e8e4dc] bg-white">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#6b665e]">Casos Resueltos</span>
          <div className="w-8 h-8 rounded-lg bg-[#f4f0e6] flex items-center justify-center text-[#2d4a3e]">
            <BookOpen className="w-4 h-4 text-[#2d4a3e]" />
          </div>
        </div>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-2xl font-serif font-bold text-[#1a1917]">{stats.completedPractices}</span>
          <span className="text-xs font-bold text-[#2d4a3e]">Lecciones</span>
        </div>
        <p className="text-[11px] text-[#6b665e] mt-1">Casos de estudio evaluados</p>
      </div>

      {/* Mastery Certification Card */}
      <div className="paper-card rounded-2xl p-5 border border-[#e8e4dc] bg-white">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#6b665e]">Certificación</span>
          <div className="w-8 h-8 rounded-lg bg-[#f4f0e6] flex items-center justify-center text-[#1e293b]">
            <ShieldCheck className="w-4 h-4 text-[#1e293b]" />
          </div>
        </div>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-2xl font-serif font-bold text-[#1a1917]">4.95 ★</span>
          <span className="text-xs font-bold text-[#1e293b]">Promedio</span>
        </div>
        <p className="text-[11px] text-[#6b665e] mt-1">Aprobación ejecutiva continua</p>
      </div>
    </div>
  );
};
