"use client";
import { Link, useLocation } from "react-router";

interface NavbarLinksProps {
  links?: Array<{ name: String; href: string }>;
}

export const NavbarLinks = ({ links }: NavbarLinksProps) => {
  const path = useLocation().pathname;
  return (
    <div className="flex md:flex-row md:justify-end md:items-center md:gap-4 flex-col justify-center items-start gap-1 w-full">
      {links?.map((item, index) => {
        return (
          <Link
            key={index}
            to={item.href}
            className={`${path === item.href && "max-md:border-l-2 border-sky-500 max-md:pl-2 max-md:bg-black/10 max-md:dark:bg-white/10 md:font-bold md:dark:text-white md:text-black"} dark:hover:text-sky-400
                     transition-all duration-200 no-underline relative group text-base hover:text-sky-600 text-gray-600 dark:text-gray-400 w-full text-start max-md:py-2 max-md:hover:bg-black/10 dark:max-md:hover:bg-white/10 max-md:hover:pl-2 max-md:hover:border-l-2 max-md:hover:border-sky-500`}
          >
            {item.name}
            <span className="max-md:hidden absolute -bottom-1 left-0 w-full h-[2px] bg-sky-600 dark:bg-sky-500 rounded transition-transform origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100 duration-300 ease-in-out"></span>
          </Link>
        );
      })}
    </div>
  );
};
