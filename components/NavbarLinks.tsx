"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

const NavbarLinks = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isInstructorPage = pathname?.startsWith("/instructor");
  const isPlayerPage = pathname?.includes("/chapter");

  return (
    <div className="flex gap-x-2 ml-auto">
      {isInstructorPage || isPlayerPage ? (
        <Button variant="ghost">
          <LogOut className="h-4 w4 mr-2" />
          Exit
        </Button>
      ) : (
        <Link href="/instructor/courses">
          <Button size="sm" variant="ghost">
            Instructor Mode
          </Button>
        </Link>
      )}
      <UserButton />
    </div>
  );
};

export default NavbarLinks;
