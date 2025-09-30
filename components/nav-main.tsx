"use client";

import Link from "next/link";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface Item {
  title: string;
  url: string;
  isActive?: boolean;
}

export function NavMain({ items }: { items: Item[] }) {
  return (
    <SidebarGroup>
      <SidebarMenu className="space-y-1">
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              <Link
                href={item.url}
                className={`
                flex items-center w-full px-4 py-3 rounded-lg text-base font-medium
                transition-colors duration-200
                ${
                  item.isActive
                    ? "bg-blue-500 text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
                }
              `}
              >
                {item.title}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
