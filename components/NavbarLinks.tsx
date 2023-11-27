"use client";

import { UserButton } from "@clerk/nextjs";
import React from "react";

const NavbarLinks = () => {
  return (
    <div className="flex gap-x-2 ml-auto">
      <UserButton />
    </div>
  );
};

export default NavbarLinks;
