import Image from 'next/image'
import React from 'react'
import logo from '../public/12.png.png'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='xl:ml-64 w-auto xl:mr-64'>
      <div className='md:flex font-sans m-6 xl:w-full justify-end items-start w-auto md:w-[90%] xl:mx-auto md:mx-16 '>

        <div className='flex flex-col w-auto xl:w-[470px] md:mt-8'>
        <h1 className='text-black font-bold md:text-2xl text-lg'>Well Come To EzuSoft Corporation</h1>
        <p className='mt-4 text-gray-600 md:text-lg text-base'>EzuSoft is a leading provider of cutting-edge technology solution, offering a comprihension range of services to clients worldwide.With a focus on web development, app development,server development, database management and custom software development, we bring inovative ideas to life.Our team of skilled professionals combine creativity and technical experties to deliver modern and attractive solutions that meet the unique requirements of each client.<br></br><br></br> At EzuSoft, we pride ourselves on our commitment to quality, timely delivery, and expectational customer service.Partner with us to transform your vision into reality and stay a head in tha ever-evolving digital landscape.Experience excellence with EzuSoft.</p>
       <Link href="/hire-us"><button className='bg-black text-white mt-2 font-bold text-xs xl:w-32 w-24 h-8 xl:h-10 rounded-sm'>Get Start</button></Link>
        </div>
        
      <Image src={logo} width={260} height={220} alt='Logo' className='flex items-center justify-center md:my-32 sm:mx-40 sm:w-[50%] sm:h-[50%] md:w-[290px] md:h-[290px] md:mx-auto mx-2' />
      </div>
  
      
    </div>
  )
}

export default Hero
