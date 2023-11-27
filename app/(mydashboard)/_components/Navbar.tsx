import React from "react";
import { MobileViewSidebar } from "./MobileViewSidebar";
import NavbarLinks from "@/components/NavbarLinks";

const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center shadow-sm bg-slate-100">
      <MobileViewSidebar />
      <NavbarLinks />
    </div>
  );
};

export default Navbar;
