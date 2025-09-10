"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname(); // e.g., "/hi/page" or "/en/page"

  // Split pathname into segments and replace the first segment (locale)
  const segments = pathname.split("/").filter(Boolean); // ["hi", "page"]

  // Get rest of path after locale
  const restOfPath = segments.slice(1).join("/"); // "page" or ""

  return (
    <div className='text-sm font-medium text-gray-700 dark:text-gray-300 space-x-4 select-none'>
      <Link
        href={`/en/${restOfPath}`}
        className='hover:text-blue-600 dark:hover:text-blue-400'
      >
        English
      </Link>
      <span className='text-gray-400 dark:text-gray-500'>|</span>
      <Link
        href={`/hi/${restOfPath}`}
        className='hover:text-blue-600 dark:hover:text-blue-400'
      >
        हिंदी
      </Link>
      <span className='text-gray-400 dark:text-gray-500'>|</span>
      <Link
        href={`/ar/${restOfPath}`}
        className='hover:text-blue-600 dark:hover:text-blue-400'
      >
        عربي
      </Link>
    </div>
  );
}
