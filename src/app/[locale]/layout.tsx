// app/[locale]/layout.tsx  (or wherever your locale layout is)
import getRequestConfig from "@/i18n/request";
import AppProviders from "../providers/AppProvider";
import { Toaster } from "@/components/ui/sonner";

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { children, params } = props;
  const { locale: requestedLocale = 'en' } = await params;

  // getRequestConfig should return { locale, messages }
  const { locale, messages } = await getRequestConfig({
    requestLocale: Promise.resolve(requestedLocale),
  });

  return (
    <html lang={locale}>
      <body>
        <AppProviders locale={locale} messages={messages ?? {}}>
          {children}
          <div className='absolute top-4 right-4 z-50'>
            <Toaster />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
