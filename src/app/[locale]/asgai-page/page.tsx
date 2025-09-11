"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import WelcomeContent from "../../components/asg-ai/WelcomeContent";
import ChatInput from "../../components/asg-ai/ChatInput";

export default function ASGAIInterfacePage() {
  const [message, setMessage] = useState("");
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const currentLocale = segments[0];

  return (
    <>
      <WelcomeContent currentLocale={currentLocale} />
      <ChatInput message={message} onChangeMessage={setMessage} currentLocale={currentLocale} />
    </>
  );
}
