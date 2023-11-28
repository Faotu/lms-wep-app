"use client";

import React from "react";

import { BarChart, Compass, Layout, List } from "lucide-react";
import SidebarItems from "./SidebarItems";
import { usePathname } from "next/navigation";
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

const instructorRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/instructor/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/instructor/analytics",
  },
];

const SidebarPage = () => {
  const pathname = usePathname();
  const isInstructorPage = pathname?.includes("/instructor");
  const routes = isInstructorPage ? instructorRoutes : visitorRoutes;
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
