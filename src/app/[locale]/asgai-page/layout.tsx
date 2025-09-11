"use client";

import { ReactNode, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Sidebar from "../../components/asg-ai/Sidebar";
import Header from "../../components/asg-ai/Header";
import SearchDialog from "../../components/asg-ai/SearchDialog";

const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिंदी" },
  { code: "ar", label: "عربي" },
];

export default function ASGAISectionLayout({ children }: { children: ReactNode }) {
  const [selectedModel, setSelectedModel] = useState("ChatGPT");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const segments = pathname.split("/").filter(Boolean);
  const currentLocale = segments[0];
  const restOfPath = segments.slice(1).join("/");

  const handleSelect = (code: string) => {
    if (code !== currentLocale) {
      router.push(`/${code}/${restOfPath}`);
    }
  };

  return (
    <div className='flex h-screen bg-background text-foreground'>
      {mobileMenuOpen && (
        <button
          type='button'
          className='fixed inset-0 bg-black/50 z-40 lg:hidden'
          aria-label='Close mobile menu overlay'
          onClick={() => setMobileMenuOpen(false)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setMobileMenuOpen(false);
          }}
        />
      )}

      <Sidebar
        sidebarCollapsed={sidebarCollapsed}
        mobileMenuOpen={mobileMenuOpen}
        currentLocale={currentLocale}
        onSearch={() => setSearchOpen(true)}
      />

      <div className='flex-1 flex flex-col min-w-0'>
        <Header
          selectedModel={selectedModel}
          setSelectedModel={setSelectedModel}
          currentLocale={currentLocale}
          onToggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
          onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
        />

        {children}
        <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} currentLocale={currentLocale} />
      </div>
    </div>
  );
}


