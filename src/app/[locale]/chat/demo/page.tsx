"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EditProfile } from "@/components/Dialogs/EditProfile";

export default function ASGAIInterfacePage() {
  return <EditProfile />;
}
