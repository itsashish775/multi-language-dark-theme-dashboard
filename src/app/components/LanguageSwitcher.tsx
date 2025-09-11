"use client";
import { usePathname, useRouter } from "next/navigation";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe, ChevronDown } from "lucide-react";

const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिंदी" },
  { code: "ar", label: "عربي" },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const segments = pathname.split("/").filter(Boolean);
  const currentLocale = segments[0];
  const restOfPath = segments.slice(1).join("/");

  const onSelectLanguage = (code: string) => {
    if (code !== currentLocale) {
      router.push(`/${code}/${restOfPath}`);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='flex items-center gap-2'>
          <Globe className='w-4 h-4' />
          <span className='hidden sm:inline'>
            {languages.find((l) => l.code === currentLocale)?.label || "Language"}
          </span>
          <ChevronDown className='w-4 h-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {languages.map((lang) => (
          <DropdownMenuItem key={lang.code} onClick={() => onSelectLanguage(lang.code)}>
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
