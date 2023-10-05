import Image from 'next/image'
import development from '../../public/development.png'
import onl from '../../public/online.png'
import ded from '../../public/ded.png'
import time from '../../public/24.png'
import React from 'react'

const page = () => {
  return (
    <div className='xl:w-[1070px] w-auto ml-auto mr-auto p-6 m-4 '>
      <div className='flex flex-col'>
        <h1 className='pt-12 font-bold text-2xl'>About Us</h1>
        <p className='flex text-gray-500 pt-4'>At EzuSoft Corporation,we are a leading IT system integration, professional services, and software development company. As a privately-owned enterprise, we specialize in providing top-notch IT consultancy, innovative software design, and seamless development services.</p>
        <p className='pt-4 text-gray-500 flex'>Our expertise extends to a wide range of sectors, including Web Development, App Development, AI Modeling, Graphics Design, and SEO. With a dedicated team of skilled professionals, we work closely with our clients to understand their unique needs and deliver tailored solutions that drive success.</p>
        <p className='pt-4 text-gray-500 flex'>Our commitment to excellence, cutting-edge technology, and a customer-centric approach sets us apart, ensuring the highest level of satisfaction for our valued clients. At ZaynoSoft, we take pride in being your trusted partner on your digital journey, transforming your ideas into reality and empowering your business to thrive in the dynamic digital landscape.</p>
      </div>
      <div className='flex flex-col pb-16'>
        <h1 className='font-bold text-2xl flex justify-center p-4 md:pt-28'>Our Key Feathers</h1>
        <div className='md:flex items-center gap-32 justify-center'>
          <div className='flex flex-col items-center justify-center'>
            <Image src={development} width={400} height={400} alt='dev'></Image>
            <h1 className='font-bold p-6 text-lg font-serif'>Custom Development Services</h1>
            <p className='text-gray-500 text-center xl:w-[370px] w-auto'>At EzuSoft Corporation, we craft tailored software solutions to perfectly fit your unique business needs. Our custom development ensures efficiency, scalability, and a competitive edge in the market.</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <Image src={onl} width={360} height={360} alt='online'/>
            <h1 className='font-bold p-4 text-lg font-serif'>Online Meeting</h1>
            <p className='text-gray-500 text-center xl:w-[370px] w-auto'>EzuSoft Corporation facilitates seamless online meetings, connecting you with clients worldwide. Experience efficient collaboration and real-time communication through our secure and user-friendly platform.</p>
          </div>
        </div>
        <div className='md:flex items-center gap-32 justify-center'>
          <div className='flex flex-col items-center justify-center'>
          <Image src={ded} width={280} height={280} alt='Dedicate'></Image>
            <h1 className='font-bold p-6 text-lg font-serif'>Dedicate Team Development</h1>
            <p className='text-gray-500 text-center xl:w-[370px] w-auto'>At EzuSoft Corporation, we offer round-the-clock assistance, ensuring uninterrupted access to our expertise whenever you need it. Our dedicated support team is always ready to assist.</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
          <Image src={time} width={200} height={200} alt='Time'></Image>
            <h1 className='font-bold p-6 text-lg font-serif'>24/7 Support</h1>
            <p className='text-gray-500 text-center xl:w-[370px] w-auto'>With EzuSoft, you gain access to a skilled and dedicated team of professionals committed to bringing your visions to life. Our collaborative approach ensures seamless development and exceptional results.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
