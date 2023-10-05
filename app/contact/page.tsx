import React from 'react'
import { BsWhatsapp ,BsLinkedin } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { NewLineKind } from 'typescript'
import Link from 'next/link'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center md:mx-auto mx-4 w-full'>
      <div className='pt-16'>
        <h1 className='font-bold text-2xl font-sans'>Any Queries?</h1>
        <p className='pt-4 font-sans text-gray-500'>Feel Free To Contact Us</p>
        <p className='font-sans text-gray-500'>We Are Here To Help You.</p>
      </div>
      <div className='pt-16 gap-8 md:flex justify-center items-center'>
        <div className='xl:w-[320px] md:w-[220px] w-[260px] h-[170px] bg-gray-200  flex flex-col items-center justify-center rounded-md drop-shadow-lg'>
          
            <BsWhatsapp size="20px" className="text-green-600 -mt-16 bg-white w-12 rounded-md h-12" />
        
          <h1 className='font-extrabold text-2xl pt-6 font-serif'>WhatsApp</h1>
          <p className='pb-2'>+92-3225025501</p>
          <button className='w-36 h-8 bg-black rounded-sm text-white'>Contact</button>
        </div>

        <div className='my-32 md:my-0 xl:w-[320px] md:w-[220px] w-[260px] h-[170px] bg-gray-200  flex flex-col items-center justify-center rounded-md drop-shadow-lg'>
          
            <AiOutlineMail size="10px" className="text-blue-950 -mt-16 bg-white w-12 rounded-md h-12" />
        
          <h1 className='font-extrabold text-2xl pt-6 font-serif'>Email</h1>
          <p className='pb-2'>info@EzuSoft.com</p>
          <Link href="https://mail.google.com">
          <button className='w-36 h-8 bg-black rounded-sm text-white'>Email</button>
          </Link>
        </div>

        <div className='xl:w-[320px] md:w-[220px] w-[260px] h-[170px] bg-gray-200  flex flex-col items-center justify-center rounded-md drop-shadow-lg'>
          
            <BsLinkedin size="20px" className="text-black -mt-16 bg-white w-12 rounded-md h-12" />
        
          <h1 className='font-extrabold text-2xl pt-6 font-serif'>LinkedIn</h1>
          <p className='pb-2'>EzuSoft Corporation</p>
          <Link href="https://www.linkedin.com"><button className='w-36 h-8 bg-black rounded-sm text-white'>Join LinkedIn</button></Link>
        </div>

      </div>
    </div>
  )
}

export default page
