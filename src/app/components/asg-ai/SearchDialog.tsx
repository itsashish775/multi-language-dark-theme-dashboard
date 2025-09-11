"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";

type SearchDialogProps = Readonly<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentLocale: string;
}>;

export default function SearchDialog({ open, onOpenChange, currentLocale }: SearchDialogProps) {
  const t = useTranslations("Sidebar");
  const isArabic = currentLocale === "ar";
  const isHindi = currentLocale === "hi";

  let placeholder = "Search chats...";
  let submitLabel = "Search";
  let helperText = "Search across recent chats and history.";

  if (isHindi) {
    placeholder = "चैट में खोजें...";
    submitLabel = "खोजें";
    helperText = "हाल की चैट और इतिहास में खोजें।";
  }

  if (isArabic) {
    placeholder = "ابحث في المحادثات...";
    submitLabel = "بحث";
    helperText = "ابحث عبر الدردشات الحديثة والسجل.";
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent dir={isArabic ? "rtl" : "ltr"}>
        <DialogHeader>
          <DialogTitle className='flex items-center gap-2'>
            <Search className='w-4 h-4' />
            {t("search")}
          </DialogTitle>
        </DialogHeader>

        <div className='flex items-center gap-2'>
          <Input placeholder={placeholder} />
          <Button>{submitLabel}</Button>
        </div>

        <div className='mt-4 text-sm text-muted-foreground'>
          {helperText}
        </div>
      </DialogContent>
    </Dialog>
  );
}


