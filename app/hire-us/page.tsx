"use client";

import { ContactForm } from '@/components';
import React, { useState } from 'react'

const page = () => {
 
  return (
      <div className='p-4 max-w-3xl mx-auto'>
        <h1 className='font-bold text-2xl my-3 flex justify-center items-center'>Got A Project For Us?</h1>
        <p className='text-md text-gray-500 flex justify-center items-center mx-auto sm:mx w-full'>Trust EzuSoft Corporation For Quality, Reliable Solutions That Exceed Expectations.</p>
        <ContactForm/>
      </div>
      
    
  )
}

export default page
