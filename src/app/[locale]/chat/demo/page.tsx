"use client";

import { EditProfile } from "@/components/Dialogs/EditProfile";
import MainBodyLayout from "@/app/components/Layouts/MainBodyLayout";

export default function ASGAIInterfacePage() {
  return (
    <MainBodyLayout className='p-6 space-y-6'>
      <EditProfile />
    </MainBodyLayout>
  );
}
