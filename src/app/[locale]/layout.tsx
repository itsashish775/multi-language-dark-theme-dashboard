import { NextIntlClientProvider } from "next-intl";
import getRequestConfig from "@/i18n/request";
import ThemeProviderWrapper from "@/app/providers/ThemeProviderWrapper";

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { children, params: paramsPromise } = props;
  const params = await paramsPromise;
  const { locale, messages } = await getRequestConfig({
    requestLocale: Promise.resolve(params.locale || "en"),
  });

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
