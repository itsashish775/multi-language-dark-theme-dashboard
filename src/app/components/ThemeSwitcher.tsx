"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className='relative flex items-center w-16 h-8 rounded-full bg-background cursor-pointer transition-colors'
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {/* Sliding knob */}
      <div
        className={`absolute top-1 left-1 h-6 w-6 rounded-full bg-cyan-500 flex items-center justify-center transition-transform ${
          isDark ? "translate-x-0" : "translate-x-8"
        }`}
      >
        {isDark ? (
          <Moon className='h-4 w-4 text-white' />
        ) : (
          <Sun className='h-4 w-4 text-white' />
        )}
      </div>

      {/* Static icons */}
      <div className='absolute left-2 text-gray-400'>
        <Moon className='h-4 w-4' />
      </div>
      <div className='absolute right-2 text-gray-400'>
        <Sun className='h-4 w-4' />
      </div>
    </div>
  );
}
