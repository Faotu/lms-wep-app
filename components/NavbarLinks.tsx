"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

const NavbarLinks = () => {
  const pathname = usePathname();

  const isInstructorPage = pathname?.startsWith("/instructor");
  const isPlayerPage = pathname?.includes("/chapter");

  return (
    <div className="flex gap-x-2 ml-auto">
      {isInstructorPage || isPlayerPage ? (
        <Link href="/">
          <Button size="sm" variant="ghost" className="bg-red-500">
            <LogOut className="h-4 w-4 mr-2" />
            <h1 className="text-white"> Exit</h1>
          </Button>
        </Link>
      ) : (
        <Link href="/instructor/courses">
          <Button size="sm" variant="ghost">
            Instructor Environment
          </Button>
        </Link>
      )}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default NavbarLinks;
