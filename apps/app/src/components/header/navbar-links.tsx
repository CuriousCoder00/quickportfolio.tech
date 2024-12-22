"use client";
import { Link } from "react-router";

interface NavbarLinksProps {
  links?: Array<{ name: String; href: string }>;
}

export const NavbarLinks = ({ links }: NavbarLinksProps) => {
  return (
    <div className="flex md:flex-row md:justify-end md:items-center md:gap-4 flex-col justify-center items-start gap-8 w-full">
      {links?.map((item, index) => {
        return (
          <Link
            key={index}
            to={item.href}
            className="dark:hover:text-cyan-400
                     transition-all delay-200 duration-200 ease-in-out no-underline relative group text-base hover:dark:text-sky-400 hover:text-sky-600 text-gray-600 dark:text-gray-400 w-full text-start"
          >
            {item.name}
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-sky-600 dark:bg-sky-500 rounded transition-transform origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100 duration-300 ease-in-out"></span>
          </Link>
        );
      })}
    </div>
  );
};
