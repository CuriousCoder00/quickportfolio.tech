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
      <nav className="fixed top-0 left-0 right-0 md:rounded-full backdrop-blur md:bg-purple-100 dark:bg-slate-950/40 bg-opacity-50 md:border border-purple-500/60 md:w-[80%] lg:w-[60%] md:mt-5 z-[60] flex container dark:text-white gap-4 min-h-16">
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
            size={"sm"}
            className={`${path === "/auth/login" || path === "/auth/register" ? "hidden" : ""} h-8 px-4 max-md:hidden`}
          >
            <Link to="/auth/login">Login</Link>
          </Button>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};
