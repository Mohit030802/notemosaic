"use client"

import React from 'react'
import Heading from './_components/Heading'
import { Heros } from './_components/Heros'
import { Footer } from './_components/Footer'

const page = () => {
  return (
    <>
      <div className='min-h-full flex flex-col'>
        <div className='flex flex-col flex-1 justify-center items-center text-center md:justify-start gap-y-8 px-6 pb-10'>

          <Heading />
          <Heros/>
          
        </div>
        <Footer/>

      </div>
    </>
  )
}

export default page
