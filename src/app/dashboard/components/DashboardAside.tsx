"use client"
import { useState } from "react";
import {
  FileText,
  PlusCircle,
  Folder,
  BarChart,
  User,
  Files,
  Users,
  Tags,
  Settings,
  MenuIcon,
  CreditCard,
  HelpCircle,
  X,
} from "lucide-react";
import clsx from "clsx";

const menuItems = [
  { label: "My Posts", icon: FileText, href: "/dashboard", roles: ["USER", "ADMIN"] },
  { label: "Create Post", icon: PlusCircle, href: "/dashboard/blog/create", roles: ["USER", "ADMIN"] },
  { label: "Drafts", icon: Folder, href: "/dashboard/drafts", roles: ["USER", "ADMIN"] },
  { label: "Analytics", icon: BarChart, href: "/dashboard/analytics", roles: ["USER", "ADMIN"] },
  { label: "Profile", icon: User, href: "/dashboard/profile", roles: ["USER", "ADMIN"] },
  // Admin-only
  { label: "All Posts", icon: Files, href: "/dashboard/posts", roles: ["ADMIN"] },
  { label: "Users", icon: Users, href: "/dashboard/users", roles: ["ADMIN"] },
  { label: "Categories", icon: Tags, href: "/dashboard/categories", roles: ["ADMIN"] },
  { label: "Settings", icon: Settings, href: "/dashboard/settings", roles: ["ADMIN"] },
];

const otherItems = [
  { label: "View site", icon: Settings, href: "/" },
  { label: "Settings", icon: Settings, href: "/dashboard/settings" },
  { label: "Payment", icon: CreditCard, href: "/dashboard/payment" },
  { label: "Accounts", icon: User, href: "/dashboard/profile" },
  { label: "Help", icon: HelpCircle, href: "/dashboard/help" },
];


import React from 'react';
import Link from "next/link";
import { useCurrentUserDetails } from "@/Hook/useCurrentUserDetails";


const DashboardAside = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");
  const { userDetails } = useCurrentUserDetails()

  const role = userDetails?.role

  const renderLink = (item: { label: string; icon: React.ElementType; href: string }) => {
    const Icon = item.icon;
    const isActive = item.label === active;

    return (
      <Link
        key={item.label}
        href={item.href}
        onClick={() => setActive(item.label)}
        className={clsx(
          "flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all",
          isActive ? "bg-white text-indigo-600 shadow" : " hover:text-white hover:bg-indigo-500"
        )}
      >
        <Icon className="w-5 h-5" />
        {item.label}
      </Link>
    );
  };


  return (
    <aside className=" min-h-screen w-64 border  p-4 fixed md:static z-50 md:z-auto transition-all duration-300">
      <div className="flex items-center justify-between mb-6 md:hidden">

        <button onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6 " />}
        </button>
      </div>

      <div className={clsx("space-y-6", { hidden: !open && window.innerWidth < 768, block: open || window.innerWidth >= 768 })}>
        <div>
          <div>
            <h1 className=" text-2xl font-bold " >Global Thought</h1>
            <p>{userDetails?.name}</p>
          </div>
          <div className=" border my-7"></div>
          <div className="space-y-1">
            {menuItems.filter((item) => item.roles.includes(role ?? "USER")).map(renderLink)}
          </div>
        </div>
        <div className="border  my-5">

        </div>
        <div>

          <div className="space-y-1">
            {otherItems.map(renderLink)}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DashboardAside;
