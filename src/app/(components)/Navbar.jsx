"use client";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { navItems } from "../data/navItems";

export default function Component() {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [expandedSubItem, setExpandedSubItem] = useState(null);

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 z-10">
      {/* Mobile Navigation */}
      <div className="flex items-center justify-between w-full lg:hidden z-10">
        {/* Burger Icon */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon className="h-6 w-6 z-10" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] flex flex-col h-full z-10">
            {/* Logo Inside Sheet */}
            <div className="flex items-center justify-center mb-6 z-10">
              <MountainIcon className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold z-10">Your Logo</span>
            </div>

            {/* Add a visually hidden SheetTitle for accessibility */}
            <VisuallyHidden>
              <SheetTitle>Navigation Menu</SheetTitle>
            </VisuallyHidden>

            {/* Navigation Items */}
            <nav className="flex-1 overflow-y-auto z-10">
              <div className="grid gap-2 py-6 z-10">
                {Object.entries(navItems).map(([category, items]) => (
                  <div key={category}>
                    <button
                      onClick={() =>
                        setExpandedCategory((prev) =>
                          prev === category ? null : category
                        )
                      }
                      className="flex w-full items-center justify-between py-2 text-lg font-semibold z-10"
                    >
                      <span>{category}</span>
                      <ChevronDownIcon
                        className={`h-5 w-5 transition-transform z-10${
                          expandedCategory === category ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {expandedCategory === category && (
                      <div className="space-y-1 pl-4 z-10">
                        {items.map((item) => (
                          <div key={item.title}>
                            <div
                              className="flex items-center justify-between w-full z-10"
                              onClick={() => {
                                if (item.subItems) {
                                  setExpandedSubItem((prev) =>
                                    prev === item.title ? null : item.title
                                  );
                                }
                              }}
                            >
                              <Link
                                href={item.href || "#"}
                                className="flex w-full items-center py-2 text-base z-10"
                                prefetch={false}
                              >
                                {item.title}
                              </Link>
                              {item.subItems && (
                                <ChevronDownIcon
                                  className={`h-4 w-4 transition-transform z-10 ${
                                    expandedSubItem === item.title
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                />
                              )}
                            </div>
                            {item.subItems &&
                              expandedSubItem === item.title && (
                                <div className="pl-4 z-10">
                                  {item.subItems.map((subItem) => (
                                    <Link
                                      key={subItem.title}
                                      href={subItem.href || "#"}
                                      className="flex w-full items-center py-2 text-base z-10"
                                      prefetch={false}
                                    >
                                      {subItem.title}
                                    </Link>
                                  ))}
                                </div>
                              )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo Beside Burger Icon */}
        <MountainIcon className="h-8 w-8 z-10" />
      </div>

      {/* Desktop Navigation */}
      <nav className="mx-auto text-lg hidden lg:flex gap-6 z-10">
        <MountainIcon className="h-8 w-8 hover:cursor-pointer z-10" />
        {Object.entries(navItems).map(([category, items]) => (
          <div
            key={category}
            className="relative group z-10"
            onMouseEnter={() => setExpandedCategory(category)}
          >
            <Button
              variant="ghost"
              className="text-base font-medium text-gray-700 hover:text-blue-600 border-t-4 border-transparent hover:border-blue-500 z-10"
            >
              {category} <ChevronDownIcon className="h-4 w-4 ml-1 z-10" />
            </Button>
            {expandedCategory === category && (
              <div
                className="absolute bg-white shadow-lg rounded-lg p-2 space-y-2 min-w-[200px] mt-1 transition-opacity duration-300 z-10"
                onMouseEnter={() => setExpandedCategory(category)}
                onMouseLeave={() => setExpandedCategory(null)}
              >
                {items.map((item) => (
                  <div key={item.title}>
                    <div
                      className="flex items-center justify-between w-full cursor-pointer hover:bg-gray-100 hover:text-blue-600 rounded-lg transition-colors duration-200 p-1 z-10"
                      onClick={() => {
                        if (item.subItems) {
                          setExpandedSubItem((prev) =>
                            prev === item.title ? null : item.title
                          );
                        }
                      }}
                    >
                      <Link
                        href={item.href || "#"}
                        className="block px-4 py-2 text-sm text-gray-600 z-10"
                      >
                        {item.title}
                      </Link>
                      {item.subItems && (
                        <ChevronDownIcon
                          className={`h-4 w-4 transition-transform z-10${
                            expandedSubItem === item.title ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </div>
                    {item.subItems && expandedSubItem === item.title && (
                      <div className="pl-4">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href || "#"}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors duration-200 z-10"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
