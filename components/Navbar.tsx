"use client";

import Image from 'next/image'
// import pic from '../public/7.png'
import logo from '../public/7.png'
import {AiOutlineMenu , AiOutlineClose} from 'react-icons/ai'
import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [toggle , setToggle] = useState(false)
  return (
  <div className='xl:mx-auto xl:w-[1024px] w-auto border-b '>
    <div className='flex items-center justify-between p-4 shadow-sm xl:mx-auto w-full'>
      <Image src={logo} width={280} height={280} alt='Logo' className='md:w-[30%] md:h-[30%] w-[50%] h-[50%] flex items-center justify-center' />
        {
          toggle ?
              <AiOutlineClose onClick={() => setToggle(!toggle)} className="md:hidden block visible  text-2xl items-center m-6"/>
             :
             <AiOutlineMenu onClick={() => setToggle(!toggle)} className="md:hidden block visible text-2xl items-center m-6"/>

        }
    
    <ul className='md:visible hidden md:flex gap-5 active:font-bold justify-center items-center m-2 md:text-base xl:text-lg text-base'>
        <Link href="/"><li className=' hover:font-bold active:font-bold'>Services</li></Link>
       <Link href="/about"><li className='hover:font-bold active:font-bold'> About</li></Link>
        <Link  href="/product"><li className='hover:font-bold'>Product</li></Link>
        <Link href="/policies"><li className='hover:font-bold'>Policies</li></Link>
        <Link href="/contact"> <li className='hover:font-bold'>Contact</li></Link>
      </ul>
       


       {/*Responsive*/}

       


      <button className='md:visible hidden md:flex justify-center items-center rounded-sm text-base xl:w-28 xl:h-8 w-24 h-6  bg-black text-white'>Hire Us</button>
     
    </div>
    
    <ul className={`md:hidden duration-300 visible gap-5 active:font-bold justify-center items-center p-4 m2-2 text-lg ${toggle ? "left-0" : "hidden"}`}>
        <Link href="/"><li className=' hover:font-bold active:font-bold my-2 mx-8'>Services</li></Link>
       <Link href="/about"><li className='hover:font-bold active:font-bold my-2 mx-8'> About</li></Link>
        <Link  href="/product"><li className='hover:font-bold active:font-bold my-2 mx-8'>Product</li></Link>
        <Link href="/policies"><li className='hover:font-bold active:font-bold my-2 mx-8'>Policies</li></Link>
        <Link href="/contact"> <li className='hover:font-bold active:font-bold my-2 mx-8'>Contact</li></Link>
      </ul>
    
  </div>
)
}


export default Navbar
