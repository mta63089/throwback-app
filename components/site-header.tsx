"use client";

import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { GiftIcon, MenuIcon, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import Search from "./search";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";

const navItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Projects", href: "/projects" },
  { name: "Team", href: "/team" },
  { name: "Calendar", href: "/calendar" },
  { name: "Documents", href: "/documents" },
];

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeNavItem, setActiveNavItem] = React.useState("Dashboard");
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.8]);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "left-0 right-0 top-0 border-b-3 border-gray-300 transition-all duration-300",
        isScrolled ? "shadow-md" : ""
      )}
      style={{ opacity: headerOpacity }}
    >
      <div className="container mx-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Image
                src={"/logo.svg"}
                alt="Throwback Flower Logo"
                className="size-8"
                width={100}
                height={100}
              />
              <Link href="/" className="mr-6 flex items-center space-x-2">
                <span className="text-3xl tracking-tighter font-black text-secondary">
                  {siteConfig.title}
                </span>
              </Link>
            </div>
            <div className="items-center flex">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="link" size="sm" className="text-lg">
                    <MenuIcon className="size-8" />
                    Categories
                  </Button>
                </DropdownMenuTrigger>
              </DropdownMenu>
            </div>
            <div className="relative">
              <Search />
            </div>
            <div className="flex justify-between">
              <Button variant="link">Sign in</Button>
              <Button variant="link">
                <GiftIcon className="size-8" />
              </Button>
              <Button variant="link">
                <ShoppingCartIcon className="size-8" />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex h-12 justify-center-safe gap-8">
          <Link href="/gifts">
            <Button variant="link">
              <GiftIcon />
              Gifts
            </Button>
          </Link>
          <Link href="#">
            <Button variant="link">New Arrivals</Button>
          </Link>
          <Link href="#">
            <Button variant="link">Home Favorites</Button>
          </Link>
          <Link href="#">
            <Button variant="link">Fashion Finds</Button>
          </Link>
          <Link href="#">
            <Button variant="link">Registry</Button>
          </Link>
          <Link href="#">
            <Button variant="link">Gift Cards</Button>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
