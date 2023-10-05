import Image from 'next/image'
import web from '../public/1.png.png'
import mob from '../public/3.png.png'
import back from '../public/6.png.png'
import search from '../public/5.png.png'
import data from '../public/5.5592d1fa.png'
import digital from '../public/4.png.png'
import kanko from '../public/kanko.png.png'
import one from '../public/2.png.png'
import enc from '../public/e.png'
import React from 'react'

const Service = () => {
  return (
    <div className='flex flex-col xl:mx-auto md:mx-60 w-auto xl:w-[580px] justify-center items-center'>
      <div className='text-orange-600 font-extrabold text-3xl pb-4 pt-6 flex justify-center md:mx-auto xl:mt-0 md:mt-12 xl:text-4xl '>Services We Offers</div>
      <div className='w-full group md:flex items-center justify-center p-0'>
        <div className='p-4 flex flex-col items-center w-full'>
          <Image src={web} width={220} height={220} alt='Web' />
          <h1 className='font-bold m-4 text-lg text-center'>Custom Web Development</h1>
          <p className='font-lg text-gray-600 xl:w-[320px] md:w-[220px] w-auto place-content-around text-center'>We craft visually stunning and user-friendly websites that captivate audiences,enhance brand presence, and drive meaningful engagment for your business.Experience the power of a compelling online presence. </p>
          </div>

        <div className='p-4 flex flex-col items-center '>
          <Image src={mob} width={220} height={220} alt='Mob' />
          <h1 className='font-bold m-4 text-lg text-center'>Mobile App Development</h1>
          <p className='font-lg text-gray-600 xl:w-[320px] md:w-[220px] w-auto place-content-around text-center'>We craft visually stunning and user-friendly websites that captivate audiences,enhance brand presence, and drive meaningful engagment for your business.Experience the power of a compelling online presence. </p>
        </div>

        
        <div className='p-4 flex flex-col items-center'>
          <Image src={back} width={220} height={220} alt='Back' />
          <h1 className='font-bold m-4 text-lg text-center'>Backend Server Development</h1>
          <p className='font-lg text-gray-600 xl:w-[320px] md:w-[220px] w-auto place-content-around text-center'>We craft visually stunning and user-friendly websites that captivate audiences,enhance brand presence, and drive meaningful engagment for your business.Experience the power of a compelling online presence. </p>
        </div>
      </div>

      <div className='w-full group md:flex pb-8 items-center justify-center p-0'>
        <div className='p-4 flex flex-col items-center'>
          <Image src={search} width={220} height={220} alt='Search' />
          <h1 className='font-bold m-4 text-lg text-center'>SEO (Search Engine Optimization)</h1>
          <p className='font-lg text-gray-600 xl:w-[320px] md:w-[220px] w-auto place-content-around text-center'>We craft visually stunning and user-friendly websites that captivate audiences,enhance brand presence, and drive meaningful engagment for your business.Experience the power of a compelling online presence. </p></div>

        <div className='p-4 flex flex-col items-center'>
          <Image src={data} width={220} height={220} alt='Data' />
          <h1 className='font-bold m-4 text-lg text-center'>DataBase Managment</h1>
          <p className='font-lg text-gray-600 xl:w-[320px] md:w-[220px] w-auto place-content-around text-center'>We craft visually stunning and user-friendly websites that captivate audiences,enhance brand presence, and drive meaningful engagment for your business.Experience the power of a compelling online presence. </p>
        </div>

        
        <div className='p-4 flex flex-col items-center'>
          <Image src={digital} width={220} height={220} alt='Digital' />
          <h1 className='font-bold m-4 text-lg text-center'>Digital Marketing</h1>
          <p className='font-lg text-gray-600 xl:w-[320px] md:w-[220px] w-auto place-content-around text-center'>We craft visually stunning and user-friendly websites that captivate audiences,enhance brand presence, and drive meaningful engagment for your business.Experience the power of a compelling online presence. </p>
        </div>
      </div>


      <div className='flex justify-center items-center text-lg md:text-2xl pb-4'>
        <h1 className='text-4xl text-gray-800'>Trusted- <span className='font-bold text-4xl text-orange-600'>Parteners</span></h1>
      </div>
      <div className='pb-8 md:flex justify-center gap-12 items-center'>
        <div className='flex flex-col items-center justify-center p-2'>
        <Image src={kanko} width={140} height={140} alt='Kanko' />
        <p className='pt-2 text-lg'>Kanka CA</p>
        </div>
       <div className='flex flex-col items-center justify-center'>
        <Image src={one} width={100} height={100} alt='One' />
        <p className='pt-4 text-lg'>1CM Inc</p>
      </div>

      <div className='flex flex-col items-center justify-center'>

      <Image src={enc} width={120} height={120} alt='Eahanatuition' />
        <h1 className='pt-4 text-lg'>Eahanatutions</h1>

      </div >
       
      </div>


    </div>
  )
}

export default Service
