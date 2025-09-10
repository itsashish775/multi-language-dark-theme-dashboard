"use client";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../components/LanguageSwitcher";
import ThemeSwitcher from "../components/ThemeSwitcher";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <>
      
      <header className='flex justify-between items-center px-8 py-4 border-b border-gray-300 bg-[var(--background)]'>
        <h1 className='m-0 text-xl font-semibold'>{t("title")}</h1>

        <nav className='flex items-center gap-6'>
          {/* Language Links */}
          <div className='text-sm space-x-4'>
            <LanguageSwitcher />
          </div>

          {/* Switchers */}
          <div className='flex gap-4'>
            <ThemeSwitcher />
          </div>
        </nav>
      </header>

      <main>
        <div className=''>Ashish</div>
        <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      </main>
    </>
  );
}
