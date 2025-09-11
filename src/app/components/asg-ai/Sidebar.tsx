"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Library, FolderPlus, MessageSquare, Plus, Search, Settings } from "lucide-react";
import { useTranslations } from "next-intl";

type SidebarProps = Readonly<{
  sidebarCollapsed: boolean;
  mobileMenuOpen: boolean;
  currentLocale: string;
  onSearch?: () => void;
}>;

export function Sidebar({ sidebarCollapsed, mobileMenuOpen, currentLocale, onSearch }: SidebarProps) {
  const t = useTranslations("Sidebar");

  const sidebarItems = [
    { icon: Plus, label: t("newChat"), action: () => {} },
    { icon: Search, label: t("search"), action: onSearch || (() => {}) },
    { icon: MessageSquare, label: t("liveChats"), action: () => {} },
    { icon: Library, label: t("library"), action: () => {} },
    { icon: FolderPlus, label: t("createFolder"), action: () => {} },
  ];

  return (
    <div
      className={`
        ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        ${sidebarCollapsed ? "w-16" : "w-64"}
        fixed lg:relative z-50 h-full bg-sidebar border-r border-sidebar-border flex flex-col transition-all duration-300 ease-in-out
      `}
    >
      <div className='p-4 border-b border-sidebar-border'>
        <div className={`flex items-center mb-4 ${sidebarCollapsed ? 'justify-center' : 'gap-2'}`}>
          <div className='flex-shrink-0'>
            <img
              src='/asg-logo.png'
              alt='ASG Logo'
              className={`object-contain ${sidebarCollapsed ? 'w-8 h-8' : 'w-40 h-10'} transition-all duration-200`}
            />
          </div>
          {/* Company name/subtitle removed, expand logo when sidebar is expanded */}
          {/* The image already expands via className, nothing else needed here */}
        </div>

        {!sidebarCollapsed ? (
          <Button className='w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground'>
            <Plus className='w-4 h-4 mr-2' />
            Start a new chat
          </Button>
        ) : (
          <Button size='icon' className='w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground'>
            <Plus className='w-4 h-4' />
          </Button>
        )}
      </div>

      <div className='flex-1 p-2 space-y-1' dir={currentLocale === "ar" ? "rtl" : "ltr"}>
        {sidebarItems.slice(1).map((item) => (
          <Button
            key={item.label}
            variant='ghost'
            className={`${sidebarCollapsed ? "w-12 h-12 p-0" : "w-full justify-start"} hover:bg-sidebar-accent text-sidebar-foreground`}
            onClick={item.action}
          >
            <item.icon className='w-4 h-4' />
            {!sidebarCollapsed && <span className='ml-2 text-sm'>{item.label}</span>}
          </Button>
        ))}
      </div>

      <div className='p-4 border-t border-sidebar-border'>
        <div className={`flex items-center ${sidebarCollapsed ? "justify-center" : "gap-2"}`}>
          <Avatar className='w-8 h-8 flex-shrink-0'>
            {/* <AvatarImage src='/professional-woman-diverse.png' /> */}
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
          {!sidebarCollapsed && (
            <>
              <div className='flex-1 min-w-0'>
                <p className='text-sm font-medium text-sidebar-foreground truncate'>Ananya Singh</p>
              </div>
              <Settings className='w-4 h-4 text-muted-foreground flex-shrink-0' />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;


