import React from "react";
import { Input } from "./ui/input";
import CategoryButton from "./CategoryButton";
import Link from "next/link";
import { Heart, ShoppingBag, User } from "lucide-react";
import { MobileNav } from "./MobileNav";

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="max-w-7xl mx-auto h-16 flex flex-row justify-between items-center px-5">
        <h1 className="text-xl font-semibold">RetroWeebs</h1>
        <div>
          <Input className="xl:w-[40rem] md:w-[20rem]" placeholder="Search" />
        </div>
        <div className="md:flex gap-x-5 flex-row items-center hidden">
          <CategoryButton />
          <Link href={"/"}>
            <User className="text-gray-500" />
          </Link>
          <Link href={"/"}>
            <Heart className="text-gray-500" />
          </Link>
          <Link href={"/"}>
            <ShoppingBag className="text-gray-500" />
          </Link>
        </div>
        <div className="block md:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
