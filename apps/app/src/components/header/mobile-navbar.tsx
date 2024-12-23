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
                    <Button asChild className="w-full p-0">
                      <div className="items-center  justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 w-full">
                        <span className="relative inline-block overflow-hidden rounded-md p-[1.5px] w-full h-full">
                          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] w-full h-full" />
                          <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md text-xs font-medium backdrop-blur-3xl dark:bg-black bg-white">
                            <Link
                              to="/auth/login"
                              className="inline-flex rounded-md text-center group items-center w-full justify-center   bg-gradient-to-tr dark:from-zinc-300/5 from-zinc-300 via-purple-400 dark:via-purple-400/20 to-transparent border-input border-[1px] dark:text-white text-black hover:bg-transparent/90 transition-colors sm:w-auto py-2 px-10"
                            >
                              Login
                            </Link>
                          </div>
                        </span>
                      </div>
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
