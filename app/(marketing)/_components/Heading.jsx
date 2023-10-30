"use client"
import { Button } from '@/components/ui/button'
import {  PencilLine } from 'lucide-react'
import React from 'react'

const Heading = () => {
    return (
        <div className='max-w-3xl space-y-4'>
            <div className='text-3xl sm:text-3xl md:text-5xl py-6'>
                <h1 className='font-mono font-bold'>Your Ideas, Documents and Plans. Unified Welcome to <span className='underline  text-[#04B9B1] hover:text-[#00DD98]'>NoteMosaic</span></h1>
                <h3 className=' sm:text-lg md:text-2xl mt-2 p-4 text-base'>Bring up your, thoughts, planning and present it in a <br /> better way with us!</h3>
                <Button className="bg-[#04B9B1] hover:bg-[#00DD98]">Let's Begin <PencilLine className="h-5 w-5 ml-2"/></Button>
            </div>

        </div>
    )
}

export default Heading
