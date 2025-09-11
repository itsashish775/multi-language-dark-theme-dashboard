// app/providers/AppProviders.tsx
"use client";

import { NextIntlClientProvider } from "next-intl";
import ThemeProviderWrapper from "@/app/providers/ThemeProviderWrapper";
// If you're using MSAL add it here too:
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "@/lib/authConfig";
const msalInstance = new PublicClientApplication(msalConfig);

export default function AppProviders({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
  messages: Record<string, any>;
}) {
  // locale must be a plain string (not undefined / Promise)
  return (
    <NextIntlClientProvider locale={locale ?? "en"} messages={messages}>
      <ThemeProviderWrapper>
        <MsalProvider instance={msalInstance}>{children}</MsalProvider>
      </ThemeProviderWrapper>
    </NextIntlClientProvider>
  );
}
