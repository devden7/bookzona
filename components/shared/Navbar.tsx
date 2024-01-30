"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

import { navbarList } from "@/constants";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <header>
      <nav className="container flex h-16 items-center justify-between">
        <div className="flex items-center justify-between gap-3">
          <p className="text-lg font-medium">BookZona</p>
          <Image
            src="/assets/shopping-cart.svg"
            alt="cart"
            width={15}
            height={15}
          />
        </div>
        <div className="flex items-center gap-1 sm:gap-5">
          {navbarList.map((item) => (
            <Link
              href={item.route}
              key={item.label}
              className={`text-white ${pathName === item.route ? " border-b-2" : "border-none"} text-sm`}
            >
              {item.label}
            </Link>
          ))}
          <Button className="w-20 rounded-full bg-white text-black hover:bg-slate-300 sm:w-32">
            Button
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
