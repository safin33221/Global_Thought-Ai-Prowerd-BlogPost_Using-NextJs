'use client';

import { useState } from "react";
import {
  FileText,
  PlusCircle,
  Folder,
  BarChart,
  Files,
  Users,
  Tags,
  Settings,
  CreditCard,
  HelpCircle,
  Globe,
  UserCircle,
} from "lucide-react";
import clsx from "clsx";

import React from 'react';
import Link from "next/link";
import { useCurrentUserDetails } from "@/Hook/useCurrentUserDetails";
import ThemeToggle from "@/components/ThemeToggle";

// Accept onClose prop for mobile behavior
const DashboardAside = ({ onClose }: { onClose?: () => void }) => {
  const [active, setActive] = useState("Dashboard");
  const { userDetails } = useCurrentUserDetails();
  const role = userDetails?.role;

  const menuItems = [
    { label: "Analytics", icon: BarChart, href: "/dashboard/", roles: ["USER", "ADMIN"] },
    { label: "My Blog", icon: FileText, href: "/dashboard/blog/myBlog", roles: ["USER", "ADMIN"] },
    { label: "Create Post", icon: PlusCircle, href: "/dashboard/blog/create", roles: ["USER", "ADMIN"] },
    { label: "Drafts", icon: Folder, href: "/dashboard/drafts", roles: ["USER", "ADMIN"] },
    { label: "Ai Creator", icon: FileText, href: "/dashboard/blog/aiBlogCreate", roles: ["USER", "ADMIN"] },
    { label: "All Posts", icon: Files, href: "/dashboard/posts", roles: ["ADMIN"] },
    { label: "Users", icon: Users, href: "/dashboard/users", roles: ["ADMIN"] },
    { label: "Categories", icon: Tags, href: "/dashboard/categories", roles: ["ADMIN"] },
    { label: "Settings", icon: Settings, href: "/dashboard/settings", roles: ["ADMIN"] },
  ];

  const otherItems = [
    { label: "View site", icon: Globe, href: "/" },
    { label: "Settings", icon: Settings, href: "/dashboard/settings" },
    { label: "Payment", icon: CreditCard, href: "/dashboard/payment" },
    { label: "Accounts", icon: UserCircle, href: "/dashboard/profile" },
    { label: "Help", icon: HelpCircle, href: "/dashboard/help" },
  ];

  const renderLink = (item: { label: string; icon: React.ElementType; href: string }) => {
    const Icon = item.icon;
    const isActive = item.label === active;

    return (
      <Link
        key={item.label}
        href={item.href}
        onClick={() => {
          setActive(item.label);
          onClose?.(); // Close sidebar on mobile
        }}
        className={clsx(
          "flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all",
          isActive ? "bg-primary text-secondary  shadow" : "hover:text-white hover:bg-indigo-500"
        )}
      >
        <Icon className="w-5 h-5" />
        {item.label}
      </Link>
    );
  };

  return (
    <aside className="min-h-screen w-72 md:w-64 md:p-4 mx-5">
      <div>
        <div>
          <h1 className="text-2xl font-bold">Global Thought</h1>
          <p>{userDetails?.name}</p>
        </div>
        <div className="border my-7"></div>
        <div className="space-y-1">
          {menuItems.filter((item) => item.roles.includes(role ?? "USER")).map(renderLink)}
        </div>
      </div>
      <div className="border my-5"></div>
      <div>
        <div className=" items-center hidden md:block justify-center mb-3">
          <ThemeToggle />
        </div>
        <div className="space-y-1">
          {otherItems.map(renderLink)}
        </div>
      </div>
    </aside>
  );
};

export default DashboardAside;
