"use client";
import { Link } from "react-router";
import ThemeToggle from "../../lib/themes/theme-toggle";
import { MobileNavbar } from "./mobile-navbar";
import { NavbarLinks } from "./navbar-links";

interface NavbarProps {
  navLinks?: Array<{ name: String; href: string }>;
  showInput?: Boolean;
  hideMobileNav?: Boolean;
  hideAll?: boolean;
}

export const Navbar = ({
  navLinks,
  showInput,
  hideMobileNav,
  hideAll,
}: NavbarProps) => {
  return (
    <header className={`min-w-full ${hideAll && "hidden"}`}>
      <nav
        className={`fixed top-0 left-0 right-0 md:rounded-full backdrop-blur md:bg-purple-100 dark:bg-slate-950/40 bg-opacity-50 md:border border-purple-500/60 md:w-[80%] md:mt-5 z-[60] flex container dark:text-white gap-4`}
      >
        <div className="flex items-center w-full py-2 gap-2">
          <MobileNavbar
            hideMobileNav={hideMobileNav}
            links={navLinks}
            showInput={showInput}
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
        <div className="hidden md:flex items-center space-x-4">
          <NavbarLinks links={navLinks} />
        </div>
        <div className="flex justify-center items-center">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};
