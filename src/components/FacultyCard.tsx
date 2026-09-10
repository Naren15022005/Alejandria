'use client';

import React from 'react';
import { Faculty } from '@/types/learning';
import { 
  ArrowRight, Sparkles, Cpu, TrendingUp, Palette, Crown, Compass, 
  ShieldCheck, Landmark, Activity, Scale, GraduationCap, Code, 
  DollarSign, Languages, Video, FileText, Zap, Rocket, Link as LinkIcon, Cloud,
  Database, Network, Smartphone, Gamepad2, BarChart3, Layers
} from 'lucide-react';

interface FacultyCardProps {
  faculty: Faculty;
  onSelectFaculty: (faculty: Faculty) => void;
  featured?: boolean;
}

export const FacultyCard: React.FC<FacultyCardProps> = ({ faculty, onSelectFaculty, featured = false }) => {
  const getFacultyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-4 h-4 text-[#b88e4c]" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-[#b88e4c]" />;
      case 'Cloud':
        return <Cloud className="w-4 h-4 text-[#b88e4c]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 text-[#2d4a3e]" />;
      case 'Database':
        return <Database className="w-4 h-4 text-[#2d4a3e]" />;
      case 'Network':
        return <Network className="w-4 h-4 text-[#b88e4c]" />;
      case 'Smartphone':
        return <Smartphone className="w-4 h-4 text-[#8c3b30]" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-4 h-4 text-[#8c3b30]" />;
      case 'Palette':
        return <Palette className="w-4 h-4 text-[#1e293b]" />;
      case 'BarChart3':
        return <BarChart3 className="w-4 h-4 text-[#2d4a3e]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-4 h-4 text-[#8c3b30]" />;
      case 'DollarSign':
        return <DollarSign className="w-4 h-4 text-[#2d4a3e]" />;
      case 'Rocket':
        return <Rocket className="w-4 h-4 text-[#8c3b30]" />;
      case 'Layers':
        return <Layers className="w-4 h-4 text-[#1e293b]" />;
      case 'FileText':
        return <FileText className="w-4 h-4 text-[#1e293b]" />;
      case 'Languages':
        return <Languages className="w-4 h-4 text-[#b88e4c]" />;
      case 'Zap':
        return <Zap className="w-4 h-4 text-[#b88e4c]" />;
      case 'Video':
        return <Video className="w-4 h-4 text-[#8c3b30]" />;
      case 'Link':
        return <LinkIcon className="w-4 h-4 text-[#2d4a3e]" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-[#2d4a3e]" />;
      case 'Activity':
        return <Activity className="w-4 h-4 text-[#b88e4c]" />;
      case 'Scale':
        return <Scale className="w-4 h-4 text-[#8c3b30]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-4 h-4 text-[#2d4a3e]" />;
      case 'Compass':
        return <Compass className="w-4 h-4 text-[#b88e4c]" />;
      case 'Crown':
        return <Crown className="w-4 h-4 text-[#b88e4c]" />;
      default:
        return <Compass className="w-4 h-4 text-[#b88e4c]" />;
    }
  };

  return (
    <div
      onClick={() => onSelectFaculty(faculty)}
      className="group cursor-pointer rounded-xl bg-white border border-[#e8e4dc] hover:border-[#1a1917] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between p-5 sm:p-7 md:p-8 space-y-5 sm:space-y-6 relative overflow-hidden"
    >
      <div className="space-y-4 sm:space-y-6">
        {/* Top Header: Roman Index & Faculty Code */}
        <div className="flex items-center justify-between border-b border-[#f4f0e6] pb-3.5 sm:pb-4">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#f4f0e6] flex items-center justify-center border border-[#e2dcd0] shrink-0">
              {getFacultyIcon(faculty.icon)}
            </div>
            <div>
              <span className="font-mono font-bold text-[11px] sm:text-xs tracking-wider text-[#1a1917] block">
                {faculty.code}
              </span>
              <span className="font-serif italic text-[10px] sm:text-[11px] text-[#8c8577]">
                "{faculty.latinMotto}"
              </span>
            </div>
          </div>

          <span className="font-serif font-bold text-xl sm:text-2xl text-[#e8e4dc] group-hover:text-[#b88e4c] transition-colors shrink-0">
            {faculty.code.replace('FAC-', '').replace('ESC-', '')}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1a1917] group-hover:text-[#b88e4c] transition-colors leading-snug">
          {faculty.name}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#6b665e] leading-relaxed font-sans line-clamp-3">
          {faculty.description}
        </p>

        {/* Competencies List */}
        <div className="pt-1 sm:pt-2 flex flex-wrap gap-1.5 sm:gap-2">
          {faculty.keyCompetencies?.map((comp, idx) => (
            <span
              key={idx}
              className="text-[10px] sm:text-[11px] font-sans font-medium text-[#4a463f] bg-[#fbf9f5] border border-[#e8e4dc] px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-lg"
            >
              {comp}
            </span>
          ))}
        </div>
      </div>

      {/* Footer: Sistema Alejandría & Action Button */}
      <div className="pt-4 sm:pt-5 border-t border-[#f4f0e6] flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 sm:gap-4">
        {/* Alejandria System Badge */}
        <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f4f0e6] border border-[#e2dcd0] flex items-center justify-center text-[#b88e4c] shrink-0">
            <Landmark className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#b88e4c]" />
          </div>
          <div className="text-xs truncate">
            <p className="font-serif font-bold text-[#1a1917] truncate">Sistema Alejandría</p>
            <p className="text-[10px] text-[#948e82] truncate">Programa Oficial Académico</p>
          </div>
        </div>

        {/* Action button */}
        <button className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-[#1a1917] group-hover:bg-[#b88e4c] text-white text-xs font-serif font-bold flex items-center gap-1.5 transition-colors shrink-0 ml-auto sm:ml-0">
          <span>Explorar</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
