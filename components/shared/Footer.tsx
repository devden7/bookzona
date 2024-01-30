import Link from "next/link";
import React from "react";
import { navbarList } from "@/constants";

const Footer = () => {
  return (
    <footer className=" flex h-16 items-center bg-primary-500 text-white">
      <div className="container flex justify-between">
        <div>&copy; 2024 BookZona</div>
        <div className="flex items-center gap-5">
          {navbarList.map((item) => (
            <Link href={item.route} key={item.label} className="text-sm">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
