import { useTranslations } from "next-intl";
type WelcomeContentProps = Readonly<{
  currentLocale: string;
}>;

export default function WelcomeContent({ currentLocale }: WelcomeContentProps) {
  const t = useTranslations("Welcome");
  return (
    <div className='flex-1 flex flex-col items-center justify-center p-8' dir={currentLocale === "ar" ? "rtl" : "ltr"}>
      <div className='max-w-2xl w-full text-center space-y-6'>
        <h1 className='text-4xl font-bold text-balance'>{t("title")}</h1>
        <p className='text-muted-foreground text-balance leading-relaxed'>{t("description")}</p>
      </div>
    </div>
  );
}


