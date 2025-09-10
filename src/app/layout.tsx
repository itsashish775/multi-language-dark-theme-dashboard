
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import getRequestConfig from "@/i18n/request";


export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale, messages } = await getRequestConfig({
    requestLocale: Promise.resolve(params.locale || "hi"), // ✅ wrap in Promise
  });
  const dir = locale === "ar" ? "rtl" : "ltr";
  return (
    <html lang={locale} dir={dir}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
