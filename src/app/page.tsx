"use client";

import { useParams } from "next/navigation";
import { redirect } from "next/navigation";

// Optionally import supported locales from your config
// import { supportedLocales, defaultLocale } from "@/i18n/config";

export default function HomePage() {
  const params = useParams();

  // If there's a locale param, redirect to that locale's homepage, otherwise fallback
  const locale = typeof params?.locale === "string" ? params.locale : "en";
  // or use: const locale = params?.locale ?? "en";

  redirect(`/${locale}`);
}
