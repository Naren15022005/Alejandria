'use client';

import React from 'react';
import { PracticalModule } from '@/types/learning';
import { ArrowUpRight } from 'lucide-react';

interface ModuleCardProps {
  module: PracticalModule;
  onSelect: (module: PracticalModule) => void;
}

export const PracticalModuleCard: React.FC<ModuleCardProps> = ({ module, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(module)}
      className="bg-white hover:bg-[#fbf9f5] rounded-xl p-6 cursor-pointer flex flex-col justify-between transition-all duration-300 border border-[#e8e4dc] hover:border-[#1a1917] group space-y-6"
    >
      <div className="space-y-3">
        {/* Category & Time */}
        <div className="flex items-center justify-between text-xs text-[#6b665e]">
          <span className="font-mono uppercase tracking-wider text-[10px] text-[#b88e4c] font-semibold">
            {module.category}
          </span>
          <span>{module.estimatedHours}h de lectura</span>
        </div>

        {/* Title */}
        <h3 className="font-serif font-bold text-xl text-[#1a1917] group-hover:text-[#b88e4c] transition-colors leading-snug">
          {module.title}
        </h3>

        {/* Tagline */}
        <p className="text-xs text-[#6b665e] line-clamp-2 leading-relaxed font-sans">
          {module.tagline}
        </p>
      </div>

      {/* Footer: Instructor & Link */}
      <div className="pt-4 border-t border-[#f4f0e6] flex items-center justify-between text-xs">
        <span className="font-medium text-[#1a1917]">{module.instructor.name}</span>
        <span className="flex items-center gap-1 font-serif text-[#1a1917] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform font-bold">
          Explorar <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  );
};
