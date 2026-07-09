"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import {
  Activity,
  Box,
  Home,
  Menu,
  Plus,
  Power,
} from "lucide-react";

import {
  Button
} from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { logoutAdmin } from "@/actions/admin";


export default function NavBar() {

  const pathname = usePathname();


  const links = [
    {
      title:"Home",
      path:"/",
      icon:Home,
    },
    {
      title:"Dashboard",
      path:"/dashboard",
      icon:Activity,
    },
    {
      title:"Orders",
      path:"/dashboard/orders",
      icon:Box,
    },
    {
      title:"Add Order",
      path:"/dashboard/add",
      icon:Plus,
    },
  ];


  return (

    <header className="
      flex
      h-16
      items-center
      border-b
      border-gray-100
      bg-white
      px-4
      lg:px-8
    ">


      {/* MOBILE MENU */}

      <Sheet>

        <SheetTrigger asChild>

          <Button
            variant="outline"
            size="icon"
            className="
            rounded-xl
            border-gray-200
            md:hidden
            "
          >

            <Menu className="h-5 w-5"/>

          </Button>

        </SheetTrigger>


        <SheetContent
          side="left"
          className="
          w-72
          bg-white
          p-0
          "
        >

          <div className="border-b p-6">

            <h2 className="text-xl font-extrabold text-[#111111]">
              Maseru<span className="text-[#25D366]">Plug</span>
            </h2>

            <p className="text-sm text-gray-500">
              Business Manager
            </p>

          </div>


          <nav className="space-y-2 p-4">


            {links.map((item)=>{

              const Icon=item.icon;

              return (

                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-4 py-3 transition",

                    pathname===item.path
                    ?
                    "bg-[#25D366]/10 text-[#25D366]"
                    :
                    "text-gray-600 hover:bg-gray-100"
                  )}
                >

                  <Icon className="h-5 w-5"/>

                  {item.title}

                </Link>

              )

            })}


          </nav>


        </SheetContent>


      </Sheet>


      <div className="flex-1"/>


      {/* LOGOUT */}

      <Button
        onClick={()=>logoutAdmin()}
        variant="ghost"
        size="icon"
        className="
        rounded-xl
        hover:bg-red-50
        hover:text-red-600
        "
      >

        <Power className="h-5 w-5"/>

      </Button>


    </header>

  );
}