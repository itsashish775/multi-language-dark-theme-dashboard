import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/ReduxStore/hooks";
import { useGetProfileQuery } from "@/ReduxStore/reducers/auth/auth.api";
import { useTranslations } from "next-intl";
import { useState } from "react";
type WelcomeContentProps = Readonly<{
  currentLocale: string;
}>;

export default function WelcomeContent({ currentLocale }: WelcomeContentProps) {
  const t = useTranslations("Welcome");
  const [isLoading, setIsLoading] = useState(false);
  // const { data, isLoading: isloading1 } = useGetProfileQuery();

  // const user = useAppSelector((state) => state);
  // console.log(user);

  // const dispatch = useAppDispatch();
  return (
    <div
      className='flex-1 flex flex-col items-center justify-center p-8 max-h-screen overflow-y-auto'
      dir={currentLocale === "ar" ? "rtl" : "ltr"}
    >
      <div className='max-w-2xl w-full text-center space-y-6'>
        <h1 className='text-4xl font-bold text-balance'>{t("title")}</h1>
        <p className='text-muted-foreground text-balance leading-relaxed'>
          {t("description")}
        </p>
      </div>
      
      <Button
        variant={"default"}
        isLoading={isLoading}
        onClick={() => {
          setIsLoading(true);
          setTimeout(() => setIsLoading(false), 2000);
        }}
      >
        hello
      </Button>
    </div>
  );
}
