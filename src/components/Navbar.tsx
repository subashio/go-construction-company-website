"use client";

import { navLinks } from "@/constants/common";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export default function Navbar({
  textColor,
  image,
}: {
  textColor?: string;
  image?: string;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Determine scroll direction and visibility
      if (scrollY > lastScrollY && scrollY > 100) {
        // Scrolling down
        setIsHidden(true);
      } else if (scrollY < lastScrollY) {
        // Scrolling up
        setIsHidden(false);
      }
      // Add background and shadow when scrolled
      setIsScrolled(scrollY > 50);

      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/50 backdrop-blur-md shadow-md"
          : "bg-transparent",
        isHidden ? "-translate-y-full" : "translate-y-0"
      )}>
      <MaxWidthWrapper className="flex items-center h-20 justify-between">
        {isScrolled ? (
          <Link href="/">
            <img
              src="/logos/dark-logo.png"
              className="h-14 transition-transform duration-300 hover:scale-105"
              alt="go construction logo image"
            />
          </Link>
        ) : (
          <Link href="/">
            <img
              src={image}
              className="h-14 transition-transform duration-300 hover:scale-105"
              alt="go construction logo image"
            />
          </Link>
        )}
        {/* Desktop Navigation */}
        <ul
          className={cn(
            "md:flex hidden font-semibold items-center h-full gap-6 ",
            isScrolled ? "text-black" : textColor
          )}>
          {navLinks.map((link, index) => (
            <li key={index} className="group relative">
              <Link
                href={link.href}
                className={cn(
                  link.className,
                  "relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full"
                )}>
                {link.name}
              </Link>
            </li>
          ))}
          <Link
            href="/Contact"
            className={cn(
              buttonVariants({
                variant: "default",
                className:
                  " bg-gradient-to-r from-red-900 to-red-700  hover:bg-red-800 text-white w-28 h-9 transition-all duration-300 hover:scale-105 rounded-full ",
              })
            )}>
            Contact Us
          </Link>
        </ul>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger
            className={cn(
              "text-black md:hidden hover:scale-105 transition-all duration-300",
              isScrolled ? "text-black" : textColor
            )}>
            <Menu className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent className="w-full p-0">
            <img
              src="/logos/dark-logo.png"
              className="mb-8 h-14 mt-4"
              alt="go construction logo image"
            />
            <SheetHeader className="flex flex-col font-semibold  px-2 gap-2 text-black">
              {navLinks.map((link, index) => (
                <SheetTitle
                  key={index}
                  className="w-full hover:bg-orange-50/50 rounded-md group py-2 transition-all duration-300">
                  <Link
                    href={link.href}
                    className="w-full  flex text-black mx-2 justify-center group-hover:text-orange-400 transition-all duration-300">
                    {link.name}
                  </Link>
                </SheetTitle>
              ))}
            </SheetHeader>
            <div className="border-t flex flex-col items-center gap-6 py-8 mt-4">
              <h1 className="text-xl font-bold">Ready to work together?</h1>
              <Link
                href="/Contact"
                className="flex items-center h-10 px-6 bg-gradient-to-r from-red-900 to-red-700 text-white hover:bg-red-800 hover:scale-105 transition-all duration-300 rounded-full shadow-md">
                Contact us
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </MaxWidthWrapper>
    </header>
  );
}
