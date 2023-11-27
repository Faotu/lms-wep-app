import React from "react";
import Logo from "./logo";
import SidebarPage from "./SidebarPage";

const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto  bg-[#E7D9BC] shadow-sm">
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SidebarPage />
      </div>
    </div>
  );
};

export default Sidebar;
