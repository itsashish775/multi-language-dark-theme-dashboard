"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import ThemeSwitcher from "@/app/components/ThemeSwitcher";

type Language = { code: string; label: string };

type HeaderProps = Readonly<{
  selectedModel: string;
  setSelectedModel: (model: string) => void;
  currentLocale: string;
  onToggleMobileMenu: () => void;
  onToggleSidebar: () => void;
}>;

export default function Header({
  selectedModel,
  setSelectedModel,
  currentLocale,
  // languages,
  // onSelectLanguage,
  onToggleMobileMenu,
  onToggleSidebar,
}: HeaderProps) {
  return (
    <div className='p-4 border-b border-border flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <Button
          variant='ghost'
          size='icon'
          className='lg:hidden'
          onClick={onToggleMobileMenu}
        >
          <Menu className='w-4 h-4' />
        </Button>

        <Button
          variant='ghost'
          size='icon'
          className='hidden lg:flex'
          onClick={onToggleSidebar}
        >
          <Menu className='w-4 h-4' />
        </Button>

        {/* Model selection dropdown can be replaced with a simple button or left as is if needed */}
        <Button
          variant='outline'
          className='flex items-center gap-2 bg-transparent'
        >
          <span>{selectedModel}</span>
          <ChevronDown className='w-4 h-4' />
        </Button>
      </div>

      <div className='flex items-center gap-2'>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
}
