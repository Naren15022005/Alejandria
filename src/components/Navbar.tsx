'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserSkillStats } from '@/types/learning';

interface NavbarProps {
  stats: UserSkillStats;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ stats, searchQuery = '', onSearchChange }) => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isFacultades = pathname === '/facultades';
  const isEscuelas = pathname === '/escuelas';

  return (
    <header className="w-full bg-[#fbf9f5] border-b border-[#e8e4dc]/80">
      <div className="max-w-7xl w-full mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-3.5 flex items-center justify-between">
        {/* Minimalist Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <span className="font-serif font-bold text-lg sm:text-xl tracking-tight text-[#1a1917] group-hover:text-[#b88e4c] transition-colors">
            ALEJANDRÍA
          </span>
        </Link>

        {/* Dynamic Navigation Links on Right */}
        <nav className="flex items-center gap-3.5 sm:gap-6 text-xs font-serif font-bold text-[#6b665e]">
          {!isHome && (
            <Link 
              href="/" 
              className="text-[#1a1917] hover:text-[#b88e4c] transition-colors flex items-center gap-1"
            >
              <span>Inicio</span>
            </Link>
          )}

          {!isFacultades && (
            <Link 
              href="/facultades" 
              className="hover:text-[#1a1917] transition-colors"
            >
              Facultades
            </Link>
          )}

          {!isEscuelas && (
            <Link 
              href="/escuelas" 
              className="hover:text-[#1a1917] transition-colors"
            >
              Escuelas
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};
