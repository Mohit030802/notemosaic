"use client"

import { Button } from "@/components/ui/button"
import Logo from "./Logo"

export const Footer = () => {
    return (
        <>
            <div className="flex item-center w-full z-50 bg-background">
                <Logo/>
                <div className="md:ml-auto justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
                    <Button variant="ghost" size="sm">Privacy Policy</Button>
                    <Button variant="ghost" size="sm">Terms & Conditions</Button>
                </div>
            </div>
        </>
    )
}