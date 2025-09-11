"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic, Plus, SendHorizontal } from "lucide-react";
import { useTranslations } from "next-intl";

type ChatInputProps = Readonly<{
  message: string;
  onChangeMessage: (value: string) => void;
  currentLocale: string;
}>;

export default function ChatInput({
  message,
  onChangeMessage,
  currentLocale,
}: ChatInputProps) {
  const t = useTranslations("ChatInput");
  return (
    <div
      className='p-4 border-t border-border'
      dir={currentLocale === "ar" ? "rtl" : "ltr"}
    >
      <div className='max-w-4xl mx-auto'>
        <div className='flex items-center gap-2 bg-sidebar rounded-lg border border-border p-2'>
          <Button size='sm' variant='transparent'>
            <Plus className='w-4 h-4' />
          </Button>
          <Input
            value={message}
            onChange={(e) => onChangeMessage(e.target.value)}
            placeholder={t("placeholder")}
            className='flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0'
          />
          <Button size='sm' variant='transparent'>
            <Mic className='w-4 h-4' />
          </Button>
          <Button size='sm' variant={"transparent"}>
            <SendHorizontal className='w-4 h-5 text-secondary' />
          </Button>
        </div>

        <div className='text-center mt-2'>
          <p className='text-xs text-muted-foreground'>
            {t("footer")}{" "}
            <span className='text-secondary ml-1'>{t("privacy")}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
