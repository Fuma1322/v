"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import {
  Activity,
  Box,
  Home,
  MonitorSmartphone,
  Plus,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const sideBarLinks = [
    {
      title: "Home",
      path: "/",
      icon: Home,
    },
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: Activity,
    },
    {
      title: "Orders",
      path: "/dashboard/orders",
      icon: Box,
    },
    {
      title: "Add Order",
      path: "/dashboard/add-order",
      icon: Plus,
    },
  ];

  return (
    <aside className="hidden h-screen w-72 border-r border-gray-100 bg-white md:flex">

      <div className="flex w-full flex-col">

        {/* BRAND */}
        <div className="flex h-16 items-center border-b px-6">

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="rounded-xl bg-[#25D366]/10 p-2">
              <MonitorSmartphone
                className="h-5 w-5 text-[#25D366]"
              />
            </div>

            <div>
              <h1 className="text-lg font-extrabold text-[#111111]">
                Maseru<span className="text-[#25D366]">Plug</span>
              </h1>

              <p className="text-xs text-gray-500">
                Business Manager
              </p>
            </div>

          </Link>

        </div>


        {/* LINKS */}
        <nav className="flex-1 space-y-2 px-4 py-6">

          {sideBarLinks.map((item) => {

            const Icon = item.icon;

            const active =
              pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all",

                  active
                    ? "bg-[#25D366]/10 text-[#25D366]"
                    : "text-gray-600 hover:bg-gray-100 hover:text-[#111111]"
                )}
              >

                <Icon
                  className={cn(
                    "h-5 w-5",
                    active
                      ? "text-[#25D366]"
                      : "text-gray-500"
                  )}
                />

                {item.title}

              </Link>
            );

          })}

        </nav>


        {/* FOOTER */}
        <div className="border-t p-5">

          <p className="text-xs text-gray-400">
            Powered by
          </p>

          <p className="font-bold text-[#25D366]">
            MPLUG PTY LTD
          </p>

        </div>

      </div>

    </aside>
  );
}