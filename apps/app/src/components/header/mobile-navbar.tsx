"use client";

import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@repo/ui/components/ui/sheet";
import { NavbarLinks } from "./navbar-links";
import { Button } from "@repo/ui/components/ui/button";
import { Link } from "react-router";

interface NavbarProps {
  links?: Array<{ name: String; href: string }>;
  hideMobileNav?: Boolean;
}

export const MobileNavbar = ({ links, hideMobileNav }: NavbarProps) => {
  return (
    <>
      {!hideMobileNav && (
        <div className="md:hidden cursor-pointer">
          <Sheet>
            <SheetTrigger asChild>
              <Menu size={40} />
            </SheetTrigger>
            <SheetContent side={"left"} className="z-[70]">
              <div
                className="absolute inset-0 blur-xl z-0"
                style={{
                  background:
                    "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
                }}
              ></div>
              <SheetHeader>
                <SheetTitle className="">
                  <div className="flex items-center space-x-4">
                    <div className="font-bold flex text-2xl gap-3 justify-center items-center">
                      QuickPortfolio
                    </div>
                  </div>
                </SheetTitle>
                <SheetDescription className="w-full z-10">
                  <div className="flex flex-col items-start justify-center mt-5 gap-3 min-w-full">
                    <NavbarLinks links={links} />
                    <Button size={"sm"} className="w-full">
                      <Link to="/auth/login">Login</Link>
                    </Button>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      )}
    </>
  );
};
