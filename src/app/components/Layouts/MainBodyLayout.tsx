"use client";

import { ReactNode } from "react";

type MainBodyLayoutProps = {
  children: ReactNode;
  className?: string;
};

export default function MainBodyLayout({
  children,
  className = "",
}: MainBodyLayoutProps) {
  return (
    <main className={`max-h-screen overflow-y-auto ${className}`}>
      {children}
    </main>
  );
}
