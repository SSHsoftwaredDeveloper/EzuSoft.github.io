import React from 'react'
import logo from '../public/logo.png.png'
import Image from 'next/image'
import {BsShieldFillExclamation} from 'react-icons/bs'
import {AiOutlineTwitter , AiOutlineInstagram} from 'react-icons/ai'
import {BiLogoLinkedin , BiLogoFacebookCircle } from 'react-icons/bi'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className=' w-full mb-6 p-6 md:flex flex-col justify-center items-center gap-12  md:mx-auto'>
      <div className='border w-full flex flex-col md:w-[870px] border-l-white border-r-white border-t-white '>
      <div className='p-6 md:flex gap-12 mx:auto items-center justify-center'>
        <Image src={logo} width={260} height={260} alt='Logo'/>
        <div className='flex flex-col justify-between my-3'>
            <h1 className='font-bold'>Products</h1>
            <p className='text-gray-400 text-sm pt-2'>SMART IO SERVICE</p>
        </div>
        <div className='flex flex-col justify-between my-3'>
            <h1 className='font-bold'>Terms & Conditions</h1>
            <p className='text-gray-400 w-44 text-sm pt-2'>Customization & Services Refund & Cancelation Policy</p>
        </div>
        <div className='flex flex-col justify-between'>
            <h1 className='font-bold'>Contact</h1>
            <p className='text-gray-400 text-sm pt-2'>+92-3225025501</p>
            <p className='text-blue-600 text-sm'>info@EzuSoft.com</p>
        </div>
    </div>

        <div className='flex mx-auto w-[270px] md:w-[740px] pt-12 pb-8 justify-between'>
        <div className='flex gap-2 text-gray-500'>
         <Link href="https://web.facebook.com/?_rdc=1&_rdr"> <BiLogoFacebookCircle size="25px" className=" hover:text-black"/></Link>
          <BiLogoLinkedin size="25px" className=" hover:text-black"/>
          <Link href="https://twitter.com/home">
          <AiOutlineTwitter size="25px" className=" hover:text-black"/>
          </Link>
          <AiOutlineInstagram size="25px" className=" hover:text-black"/>
        </div>
      
        <Link href="/policies"><BsShieldFillExclamation size="25px" className="text-gray-500 hover:text-black"/></Link>

        
        </div>

      </div>
    
        
          <h1 className='text-gray-400 text-sm flex items-center justify-center'>&copy;2023 EzuSoft Corporation.All Rights Reserved</h1>
      

    </footer>
  )
}

export default Footer
