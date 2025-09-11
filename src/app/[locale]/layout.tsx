// app/[locale]/layout.tsx  (or wherever your locale layout is)
import getRequestConfig from "@/i18n/request";
import AppProviders from "../providers/AppProvider";

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { children, params } = props;
  const requestedLocale = params?.locale ?? "hi";

  // getRequestConfig should return { locale, messages }
  const { locale, messages } = await getRequestConfig({
    requestLocale: Promise.resolve(requestedLocale),
  });

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body>
        <AppProviders locale={locale} messages={messages ?? {}}>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
