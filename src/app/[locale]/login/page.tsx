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
import { LogIn, User } from "lucide-react";
import Image from "next/image";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "@/lib/authConfig";
import { toast } from "sonner";

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
      toast.success("Login successful!");
    } catch (error) {
      toast.error("MSAL login failed:" + error);
      console.error("MSAL login failed:", error);
    }
  };

  return (
      <Card className='max-w-3xl w-[672px] bg-background text-center shadow-2xl rounded-xl px-12 py-14'>
        <CardHeader>
          <div className='flex justify-center mb-2'>
            <Image src='/asg-logo.png' alt='ASG Logo' width={250} height={80} />
          </div>
          <CardTitle className='text-4xl font-medium'>
            {t("welcome")} <span className='text-neutral'>{t("title")}</span>
          </CardTitle>
          <p className='text-sm text-neutral-400 mt-1'>{t("subtitle")}</p>
        </CardHeader>

        <CardContent className='space-y-4'>
          <Button
            // variant={"secondary"}
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

          <div
            // variant={"transparent"}
            className='w-full flex justify-center py-3 text-base font-medium cursor-pointer hover:font-medium'
          >
            <User className='mr-4 h-5 w-5' />
            <div>{t("loginAsGuest")}</div>
          </div>
        </CardContent>

        <CardFooter className='flex justify-center content-center text-xs text-neutral-500'>
          © Alsulaiman Group 2025. {t("rightsReserved")}
        </CardFooter>
      </Card>
  );
}
