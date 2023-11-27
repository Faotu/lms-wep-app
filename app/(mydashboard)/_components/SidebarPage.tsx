"use client";

import React from "react";

import { Compass, Layout } from "lucide-react";
import SidebarItems from "./SidebarItems";
const visitorRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },
];

const SidebarPage = () => {
  const routes = visitorRoutes;
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItems
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};

export default SidebarPage;
