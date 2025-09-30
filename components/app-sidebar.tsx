"use client";
import * as React from "react";
import { GalleryVerticalEnd } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// Sample sidebar data for Iddir Management System
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      items: [],
      isActive: true,
    },
    {
      title: "Members",
      url: "/dashboard/members",
      items: [],
    },
    {
      title: "Contributions",
      url: "/dashboard/contributions",
      items: [],
    },
    {
      title: "Expenses",
      url: "/dashboard/expenses",
      items: [],
    },
    {
      title: "Events",
      url: "/dashboard/events",
      items: [],
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      items: [],
    },
    {
      title: "Help",
      url: "/dashboard/help",
      items: [],
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar
      {...props}
      className="w-64 bg-white dark:bg-gray-800 shadow-md flex flex-col justify-between"
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/dashboard">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none ml-2">
                  <span className="font-semibold">Iddir Admin</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    v1.0.0
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a
                href="/dashboard/new-entry"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--primary-color)] text-white font-bold hover:bg-blue-600"
              >
                <span className="material-symbols-outlined">add</span>
                New Entry
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
