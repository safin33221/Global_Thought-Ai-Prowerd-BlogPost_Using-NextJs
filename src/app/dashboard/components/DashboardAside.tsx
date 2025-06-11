"use client"
import { useState } from "react";
import {
  Home,
  ShoppingCart,
  LayoutGrid,
  MessageCircle,
  Settings,
  CreditCard,
  User,
  HelpCircle,
  Menu as MenuIcon,
  X
} from "lucide-react";
import clsx from "clsx";

const menuItems = [
  { label: "Dashboard", icon: Home, href: "/dashboard" },
  { label: "My blog", icon: ShoppingCart, href: "/blog" },
  { label: "Create Blog", icon: LayoutGrid, href: "/blog/create" },
  { label: "Customer Review", icon: MessageCircle, href: "/reviews" },
];

const otherItems = [
  { label: "Settings", icon: Settings, href: "/settings" },
  { label: "Payment", icon: CreditCard, href: "/payment" },
  { label: "Accounts", icon: User, href: "/accounts" },
  { label: "Help", icon: HelpCircle, href: "/help" },
];


import React from 'react';
import Link from "next/link";

const DashboardAside = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");

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
          isActive ? "bg-white text-indigo-600 shadow" : "text-gray-400 hover:text-white hover:bg-indigo-500"
        )}
      >
        <Icon className="w-5 h-5" />
        {item.label}
      </Link>
    );
  };


  return (
    <aside className=" min-h-screen w-72 border  p-4 fixed md:static z-50 md:z-auto transition-all duration-300">
      <div className="flex items-center justify-between mb-6 md:hidden">

        <button onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6 " />}
        </button>
      </div>

      <div className={clsx("space-y-6", { hidden: !open && window.innerWidth < 768, block: open || window.innerWidth >= 768 })}>
        <div>
          <h2 className="text-sm text-indigo-200 font-semibold mb-2">MENU</h2>
          <div className="space-y-1">
            {menuItems.map(renderLink)}
          </div>
        </div>
        <div>
          <h2 className="text-sm text-indigo-200 font-semibold mb-2">OTHERS</h2>
          <div className="space-y-1">
            {otherItems.map(renderLink)}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DashboardAside;
