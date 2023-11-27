"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface SidebarItemsProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

const SidebarItems = ({ icon: Icon, label, href }: SidebarItemsProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-neutral-500 text-sm font-[500] pl-6 transition-all hover:text-neutral-500 hover:bg-neutral-300/20",
        isActive && "text-violet-200/20 hover:bg-violet-300/20 text-violet-700"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn("text-neutral-500", isActive && "text-violet-700")}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-violet-700 h-full transition-all",
          isActive && "opacity-100"
        )}
      />
    </button>
  );
};

export default SidebarItems;
