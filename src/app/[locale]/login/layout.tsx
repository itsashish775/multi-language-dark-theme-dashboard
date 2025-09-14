"use client";

import { ReactNode } from "react";

import ThemeSwitcher from "@/app/components/ThemeSwitcher";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <div className='relative flex flex-col min-h-screen bg-gradient-to-br from-[#181c2a] via-[#232946] to-[#2d3250] text-neutral overflow-hidden'>
      {/* Optional: Extra gradient overlays */}
      <div className='absolute inset-0 -z-10 pointer-events-none'>
        <div className='absolute left-0 top-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl opacity-20' />
        <div className='absolute right-0 bottom-0 w-[600px] h-[600px] bg-gradient-to-tl from-primary/30 to-transparent rounded-full blur-3xl opacity-20' />
      </div>

      {/* Header */}
      <header className='flex justify-between items-center px-8 py-4'>
        <div></div>
        <nav className='flex items-center gap-6'>
          <LanguageSwitcher />
          <ThemeSwitcher />
        </nav>
      </header>
      <main className='flex-grow flex items-center justify-center px-4'>
        {children}
      </main>
    </div>
  );
}
