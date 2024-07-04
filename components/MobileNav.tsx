import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Heart, MenuIcon, ShoppingBag, User } from "lucide-react";
import CategoryButton from "./CategoryButton";
import Link from "next/link";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-sm w-[90vw]" side="left">
        <SheetHeader>
          <SheetTitle>RetroWeeb</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-rows-4 items-center gap-4">
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
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
