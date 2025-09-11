"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import LanguageSwitcher from "../components/LanguageSwitcher";
import ThemeSwitcher from "../components/ThemeSwitcher";
import { LogIn, User } from "lucide-react";
import Image from "next/image";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "@/lib/authConfig";

export default function LoginPage() {
  const { instance, accounts } = useMsal();
  const t = useTranslations("LoginPage");
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split("/").filter(Boolean)[0] || "en";

  const handleLogin = async () => {
    try {
      const response = await instance.loginPopup(loginRequest);

      // ✅ Get access token for APIs (Graph or your backend)
      const account = response.account;
      const tokenResponse = await instance.acquireTokenSilent({
        ...loginRequest,
        account,
      });

      console.log("Access Token:", tokenResponse.accessToken);

      // After successful login → redirect
      router.push(`/${locale}/chat`);
    } catch (error) {
      console.error("MSAL login failed:", error);
    }
  };

  return (
    <div className='relative flex flex-col min-h-screen bg-neutral text-neutral overflow-hidden'>
      {/* Background lines */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute left-0 top-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl opacity-20' />
        <div className='absolute right-0 bottom-0 w-[600px] h-[600px] bg-gradient-to-tl from-primary/30 to-transparent rounded-full blur-3xl opacity-20' />
      </div>

      {/* Header */}
      <header className='flex justify-between items-center px-8 py-4'>
        <div></div>

        <nav className='flex items-center gap-6'>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </nav>
      </header>

      {/* Main Content */}
      <main className='flex flex-1 items-center justify-center px-4'>
        <Card className='w-full max-w-md bg-background text-center shadow-2xl rounded-xl border border-foreground'>
          <CardHeader>
            <div className='flex justify-center mb-2'>
              <Image
                src='/asg-logo.png'
                alt='ASG Logo'
                width={250}
                height={80}
              />
            </div>
            <CardTitle className='text-lg font-medium'>
              {t("welcome")} <span className='text-neutral'>{t("title")}</span>
            </CardTitle>
            <p className='text-sm text-neutral-400 mt-1'>{t("subtitle")}</p>
          </CardHeader>

          <CardContent className='space-y-4'>
            <Button
              variant={"secondary"}
              className='w-full py-3'
              onClick={handleLogin}
              // onClick={() => router.push(`/${locale}/chat`)}
            >
              <svg
                className='w-4 h-4 sm:w-5 sm:h-5'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <rect x='3' y='3' width='7' height='7' fill='white' />
                <rect x='14' y='3' width='7' height='7' fill='white' />
                <rect x='3' y='14' width='7' height='7' fill='white' />
                <rect x='14' y='14' width='7' height='7' fill='white' />
              </svg>
              {t("continueWithMicrosoft")}
            </Button>

            <div className='flex items-center gap-2'>
              <Separator className='flex-1 bg-neutral-700' />
              <span className='text-xs text-neutral-400'>{t("or")}</span>
              <Separator className='flex-1 bg-neutral-700' />
            </div>

            <Button
              variant={"transparent"}
              className='w-full py-3 text-primary hover:text-secondary'
            >
              <User className='mr-2 h-5 w-5' />
              {t("loginAsGuest")}
            </Button>
          </CardContent>

          <CardFooter className='flex justify-center text-xs text-neutral-500'>
            © Alsulaiman Group 2025. {t("rightsReserved")}
          </CardFooter>
        </Card>
      </main>

      {/* Footer */}
      {/* <footer className="text-center py-4 text-xs text-neutral-500">
        <a href="#" className="hover:underline">
          {t("privacyPolicy")}
        </a>{" "}
        |{" "}
        <a href="#" className="hover:underline">
          {t("termsConditions")}
        </a>
      </footer> */}
    </div>
  );
}
