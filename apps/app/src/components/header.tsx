import { Link } from "react-router-dom";
import ThemeToggle from "../lib/themes/theme-toggle";

const Header = () => {
  return (
    <header className="fixed top-0 max-w-screen w-screen">
      <nav className="flex items-center justify-between mx-auto md:px-12 px-4 dark:bg-black bg-zinc-100 py-2 shadow dark:shadow-slate-600 w-full">
        <Link to={"/"}>QuickPortfolio</Link>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-blue-500">
            Get Started
          </a>
          <a href="/login" className="text-blue-500">
            Sign In
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
