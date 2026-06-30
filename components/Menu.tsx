"use client";

import Link from "next/link";
import React from "react";
import { menuItems } from "@/app/config/menuItems";

function Menu() {
  return (
    <div className="mt-4 text-sm">  
      {menuItems.map((section) => (
        <div key={section.title} className="flex flex-col gap-2">
          <span
          className="hidden lg:block text-gray-400 font-light my-4 ">
          {section.title}</span>

          {section.items.map((item) => {
            const Icon = item.icon;

            return (
              <Link href={item.href} 
               key={item.label}
               className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 rounded-md   hover:bg-custom-sky-light hover:text-custom-sky transition-colors duration-300">
        
                <Icon size={20} />
                <span className="hidden lg:block">{item.label}</span>
              </Link>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Menu;