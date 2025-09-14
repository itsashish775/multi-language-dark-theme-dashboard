// components/CommonDialog.tsx

import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";

import { ReactNode } from "react";

type CommonDialogProps = {
  children: ReactNode;
  triggerLabel?: string; // Optional, customizable trigger button
};

export default function CommonDialog({
  children,
  triggerLabel = "Open Dialog",
}: CommonDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>
          {triggerLabel}
        </button>
      </DialogTrigger>

      <DialogPortal>
        <DialogOverlay className='bg-dialog-background/50 fixed inset-0' />

        <DialogContent className='bg-dialog-foreground p-6 rounded-lg shadow-lg max-w-3xl w-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          {/* You can add a Close button if needed */}
          {/* <DialogClose className="absolute top-3 right-3 text-gray-500 hover:text-black">
            ✕
          </DialogClose> */}

          {/* Content from parent */}
          {children}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
