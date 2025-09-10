"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Search,
  MessageSquare,
  Library,
  FolderPlus,
  Plus,
  Mic,
  Send,
  ChevronDown,
  Settings,
  Menu,
  Globe,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिंदी" },
  { code: "ar", label: "عربي" },
];

export default function ASGAIInterface() {
  const [message, setMessage] = useState("");
  const [selectedModel, setSelectedModel] = useState("ChatGPT");
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("Sidebar");

  const segments = pathname.split("/").filter(Boolean);
  const currentLocale = segments[0];
  const restOfPath = segments.slice(1).join("/");

  const handleSelect = (code: string) => {
    if (code !== currentLocale) {
      router.push(`/${code}/${restOfPath}`);
    }
  };

  const sidebarItems = [
    { icon: Plus, label: t("newChat"), action: () => {} },
    { icon: Search, label: t("search"), action: () => {} },
    { icon: MessageSquare, label: t("liveChats"), action: () => {} },
    { icon: Library, label: t("library"), action: () => {} },
    { icon: FolderPlus, label: t("createFolder"), action: () => {} },
  ];

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        ${sidebarCollapsed ? "w-16" : "w-64"}
        fixed lg:relative z-50 h-full bg-sidebar border-r border-sidebar-border flex flex-col transition-all duration-300 ease-in-out
      `}
      >
        {/* Logo and Header */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center flex-shrink-0">
              <span className="text-primary-foreground font-bold text-sm">ASG</span>
            </div>
            {!sidebarCollapsed && (
              <div className="min-w-0">
                <h1 className="text-sm font-semibold text-sidebar-foreground truncate">
                  مجموعة السليمان
                </h1>
                <p className="text-xs text-muted-foreground truncate">
                  Alsulaiman Group
                </p>
              </div>
            )}
          </div>

          {!sidebarCollapsed ? (
            <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Plus className="w-4 h-4 mr-2" />
              Start a new chat
            </Button>
          ) : (
            <Button
              size="icon"
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              <Plus className="w-4 h-4" />
            </Button>
          )}
        </div>

        {/* Navigation */}
        <div
          className="flex-1 p-2 space-y-1"
          dir={currentLocale === "ar" ? "rtl" : "ltr"}
        >
          {sidebarItems.slice(1).map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className={`
                ${sidebarCollapsed ? "w-12 h-12 p-0" : "w-full justify-start"}
                hover:bg-sidebar-accent text-sidebar-foreground
              `}
              onClick={item.action}
            >
              <item.icon className="w-4 h-4" />
              {!sidebarCollapsed && (
                <span className="ml-2 text-sm">{item.label}</span>
              )}
            </Button>
          ))}
        </div>

        {/* User Profile */}
        <div className="p-4 border-t border-sidebar-border">
          <div
            className={`flex items-center ${
              sidebarCollapsed ? "justify-center" : "gap-2"
            }`}
          >
            <Avatar className="w-8 h-8 flex-shrink-0">
              <AvatarImage src="/professional-woman-diverse.png" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            {!sidebarCollapsed && (
              <>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-sidebar-foreground truncate">
                    Ananya Singh
                  </p>
                </div>
                <Settings className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-4 h-4" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="hidden lg:flex"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            >
              <Menu className="w-4 h-4" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 bg-transparent"
                >
                  <span>{selectedModel}</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSelectedModel("ChatGPT")}>
                  ChatGPT
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedModel("GPT-4o")}>
                  GPT-4o
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedModel("GPT-4o Mini")}>
                  GPT-4o Mini
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
              <span className="text-xs">?</span>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span className="hidden sm:inline">
                    {languages.find((l) => l.code === currentLocale)?.label ||
                      "Language"}
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => handleSelect(lang.code)}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Welcome Content */}
        <div className="flex-1 flex flex-col items-center justify-center p-8">
          <div className="max-w-2xl w-full text-center space-y-6">
            <h1 className="text-4xl font-bold text-balance">
              Welcome To ASG AI
            </h1>

            <p className="text-muted-foreground text-balance leading-relaxed">
              Experience GPT-4o through ASG AI, optimized for content writing.
              This model excels at understanding context and providing detailed,
              accurate responses.
            </p>
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 bg-card rounded-lg border border-border p-2">
              <Button size="sm" variant="ghost">
                <Plus className="w-4 h-4" />
              </Button>
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask questions, or type '/' for commands"
                className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button size="sm" variant="ghost">
                <Mic className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost">
                <Send className="w-4 h-4" />
              </Button>
            </div>

            <div className="text-center mt-2">
              <p className="text-xs text-muted-foreground">
                © Alsulaiman Group 2024. All rights reserved.
                <span className="text-secondary ml-1">
                  Privacy Policy and Conditions
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
