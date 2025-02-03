"use client";

import { navLinks } from "@/constants/common";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";

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
  const location = usePathname();
  const [isHovered, setIsHovered] = useState(false);

  const isHomePage = location === "/";
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
      {/* Top Header for Daily Updates */}
      {!isScrolled && isHomePage && (
        <div
          role="banner"
          className={cn(
            "w-full bg-black/50 backdrop-blur-xl text-white text-sm font-medium p-2",
            "flex items-center justify-center overflow-hidden"
          )}>
          <div className="overflow-hidden whitespace-nowrap">
            <motion.div
              className="flex gap-2 z-30 "
              animate={{
                x: isHovered ? "50" : "-100%", // Pause at the start (0) when hovered
              }}
              transition={{
                x: {
                  repeat: Infinity, // Continuous loop
                  duration: 15, // Duration of one loop
                  ease: "linear", // Smooth scrolling
                },
              }}
              onMouseEnter={() => setIsHovered(true)} // Pause on hover
              onMouseLeave={() => setIsHovered(false)} // Resume animation when hover ends
            >
              <p className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent animate-gradient">
                ⭐ Daily Updates: Amazing houses for sale! Contact us today for
                the best deals. Contact us
                <span className="mx-2 text-white/80">
                  <Link href="/Contact" className="hover:underline">
                    Click Here
                  </Link>
                </span>
                or visit our website!
              </p>
              <p className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent animate-gradient">
                ⭐ Daily Updates: Amazing houses for sale! Contact us today for
                the best deals. Contact us
                <span className="mx-2 text-white/80">
                  <Link href="/Contact" className="hover:underline">
                    Click Here
                  </Link>
                </span>
                or visit our website!
              </p>
              <p className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent animate-gradient">
                ⭐ Daily Updates: Amazing houses for sale! Contact us today for
                the best deals. Contact us
                <span className="mx-2 text-white/80">
                  <Link href="/Contact" className="hover:underline">
                    Click Here
                  </Link>
                </span>
                or visit our website!
              </p>
              <p className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent animate-gradient">
                ⭐ Daily Updates: Amazing houses for sale! Contact us today for
                the best deals. Contact us
                <span className="mx-2 text-white/80">
                  <Link href="/Contact" className="hover:underline">
                    Click Here
                  </Link>
                </span>
                or visit our website!
              </p>
              <p className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent animate-gradient">
                ⭐ Daily Updates: Amazing houses for sale! Contact us today for
                the best deals. Contact us
                <span className="mx-2 text-white/80">
                  <Link href="/Contact" className="hover:underline">
                    Click Here
                  </Link>
                </span>
                or visit our website!
              </p>
            </motion.div>
          </div>
        </div>
      )}

      <MaxWidthWrapper className="flex items-center h-20 w-full justify-between">
        {isScrolled ? (
          <Link href="/">
            <Image
              width={726}
              height={268}
              src="/logos/dark-logo.png"
              className="h-20 w-full transition-transform duration-300 hover:scale-105"
              alt="Go construction logo image"
            />
          </Link>
        ) : (
          <Link href="/">
            <Image
              width={726}
              height={268}
              src={image || "/logos/logo.png"}
              className="h-20 w-full transition-transform duration-300 hover:scale-105"
              alt="Go construction logo image"
            />
          </Link>
        )}
        {/* Desktop Navigation */}
        <nav
          className={cn(
            "md:flex hidden font-semibold items-center h-full gap-6 ",
            isScrolled ? "text-black" : textColor
          )}>
          {navLinks.map((link, index) => (
            <div key={index} className="group relative">
              <Link
                href={link.href}
                className={cn(
                  link.className,
                  "relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full"
                )}>
                {link.name}
              </Link>
            </div>
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
        </nav>

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
            <Image
              width={197}
              height={59}
              src="/logos/dark-logo.png"
              className="mb-8 h-14 mt-4"
              alt="Go construction logo image"
            />
            <SheetHeader className="flex flex-col font-semibold  px-2 gap-2 text-black">
              {navLinks.map((link, index) => (
                <nav
                  key={index}
                  className="w-full hover:bg-orange-50/50 rounded-md group py-2 transition-all duration-300">
                  <Link
                    href={link.href}
                    className="w-full text-lg flex text-black mx-2 justify-center group-hover:text-orange-400 transition-all duration-300">
                    {link.name}
                  </Link>
                </nav>
              ))}
            </SheetHeader>
            <div className="border-t flex flex-col items-center gap-6 py-8 mt-4">
              <h2 className="text-xl font-bold">Ready to work together?</h2>
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
