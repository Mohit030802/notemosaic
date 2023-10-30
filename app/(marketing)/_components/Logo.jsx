"use client"

import Image from "next/image"
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"

const font=Poppins({
    subsets:['latin'],
    weight:["400","600"]
})

const Logo = () => {
  return (
    <>
      <div className="hidden md:flex gap-x-2 items-center">
        <Image src='/logo.svg' width='80' height='80' alt="logo"/>
        <p className={cn("font-semibold",font)}>NoteMosaic</p>
      </div>
    </>
  )
}

export default Logo
