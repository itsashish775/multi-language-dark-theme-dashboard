"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? (
        <Moon className='h-5 w-5' aria-label='Light mode' />
      ) : (
        <Sun className='h-5 w-5' aria-label='Dark mode' />
      )}
    </Button>
  );
}
