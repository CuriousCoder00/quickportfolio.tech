"use client";
import { Link, useLocation } from "react-router";
import ThemeToggle from "../../lib/themes/theme-toggle";
import { MobileNavbar } from "./mobile-navbar";
import { NavbarLinks } from "./navbar-links";
import { Button } from "@repo/ui/components/ui/button";
import { navLinks } from "../../lib/data/links";

export const Navbar = () => {
  const path = useLocation().pathname;
  return (
    <header className={`min-w-full`}>
      <nav className="fixed top-0 left-0 right-0 md:rounded-full backdrop-blur-xl md:bg-purple-100 dark:bg-slate-950/40 bg-opacity-50 md:border border-purple-500/60 md:w-[80%] lg:w-[60%] md:mt-5 z-[60] flex container dark:text-white gap-4 min-h-16 shadow-md dark:shadow-purple-700/60 backdrop-filter">
        <div className="flex items-center w-full py-2 gap-2">
          <MobileNavbar
            hideMobileNav={path === "/auth/login" || path === "/auth/register"}
            links={navLinks}
          />
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="font-bold flex text-2xl gap-3 justify-center items-center"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r dark:from-purple-500 dark:to-orange-200 from-purple-700 to-orange-700">
                QuickPortfolio
              </span>
            </Link>
          </div>
        </div>
        <div
          className={`${path === "/auth/login" || path === "/auth/register" ? "hidden" : "hidden md:flex items-center space-x-4"} `}
        >
          <NavbarLinks links={navLinks} />
        </div>
        <div className="flex justify-center items-center gap-3">
          <Button
            asChild
            size={"sm"}
            className={`${path === "/auth/login" || path === "/auth/register" ? "hidden" : ""} max-md:hidden p-0`}
          >
            <div className="items-center  justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <span
                className={`relative inline-block overflow-hidden rounded-md p-[1.5px] ${path === "/auth/login" || path === "/auth/register" ? "hidden" : ""}`}
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-gray-950  text-xs font-medium text-gray-50 backdrop-blur-3xl">
                  <Link
                    to="/auth/login"
                    className="inline-flex rounded-md text-center group items-center w-full justify-center   bg-gradient-to-tr from-zinc-300/5 via-purple-400/20 to-transparent    text-white border-input border-[1px] hover:bg-transparent/90 transition-colors sm:w-auto py-2 px-10"
                  >
                    Login
                  </Link>
                </div>
              </span>
            </div>
          </Button>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};
