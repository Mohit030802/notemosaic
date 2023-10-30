"use client"

import { ScrollTop } from "@/hooks/use-scroll-top"
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";

export const Navbar = () => {
  const scrolled=ScrollTop();
  return (
    <>
      <div className={cn("z-50 bg-background fixed top-0 flex items-center w-full p-6 dark:bg-[#1F1F1F]", scrolled && "border-b shadow-lg ")}>

        <Logo/>
        <div className="md:ml-auto justify-between md:justify-end flex gap-x-2 items-center w-full">
          <ModeToggle/>
          <Button variant="link">Login</Button>
          <Button>Register</Button>
        </div>
      </div>
    </>
  )
}