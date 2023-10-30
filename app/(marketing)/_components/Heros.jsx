"use client"
import Image from "next/image"

export const Heros=()=>{
    return(
        <>
        <div className="flex flex-col justify-center items-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[300px] h-[300px] sm:w-[250px] sm:h-[250px] md:w-[400px] md:h-[400px]">
                    <Image src='/frame1.svg' fill className="object-contain " alt="Documents"></Image>
                </div>
            <div className="relative w-[400px] h-[400px] hidden md:block">
                <Image src='/frame2.svg' fill className="object-contain" alt="Reading "></Image>
            </div>
            </div>
        </div>
        </>
    )
}