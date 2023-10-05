// import {Link} from 'react-scroll/modules';
import Link from 'next/link'
import React from 'react'
// import {Link} from 'react-scroll'
const page = () => {
 
  return (

    <div className='md:flex gap-10 xl:w-[1024px] w-auto m-4 xl:mx-auto mx-4 pt-16'>
       {/* <WorkPolicy/> */}
       {/* <RefundPolicy/> */}
      <div className='md:w-[640px]  '>
        <Link href="/policies" className='sm:w-full'>
        <h1 className='border border-l-white border-r-white border-t-white active:font-bold hover:text-black text-gray-500 text-xl md:w-full sm:w-full pb-4 pl-4'>Work Policy</h1>
        </Link>
        <h2 className='border border-l-white border-r-white border-t-white active:font-bold hover:text-black text-gray-500 pt-4 text-xl md:w-full sm:w-full pb-4 pl-4'>Refund Policy</h2>
      </div>
      <div className='flex flex-col md:ml-4 md:-mt-4'>
        <div className='md:-my-3 my-3'>
          <h1 className='font-bold text-2xl pb-4'>Work Policy</h1>
         <div className='my-3'>
         <p className='text-gray-500 text-lg'>At EzuSoft Corporation, we understand the ever-evolving needs of our clients and offer a flexible cancellation policy to ensure customer satisfaction. Cancellation requests are accepted within 12 hours of order placement, provided the project hasn't been initiated by our dedicated team.</p>
         </div>
          <div className='my-3'>
            <p className='text-gray-500 text-lg'>Please note that orders falling under Same Day Delivery category are non-cancellable to ensure prompt delivery. For exclusive products/services obtained during special occasions/events/offers, such as our New Year promotions, cancellations may not be possible due to limited availability. Once a payment is made, refunds are not provided for cancellations within 12 hours. However, the paid amount can be utilized for future orders within 90 days.</p>
            </div>
          <div className='my-3'>
            <p className='text-gray-500 text-lg'>It is important to highlight that any third-party services (hosting, server, content writing, etc.) are not within our direct control, and any coordination with them may incur additional charges at our standard rates. Should you encounter any discrepancies with the received product, kindly report it to our customer service within 24 hours, and our team will address your concerns promptly.</p>
          </div>
        </div>

      <div className='my-12'>
        <h1 className='font-bold text-2xl'>Refund Policy</h1>
        <div className='my-3'>
          <p className='text-gray-500 text-lg'>At EzuSoft, we are committed to delivering top-quality services to our clients. However, due to the nature of our business, we don't offer a standard money-back policy. Customer satisfaction is essential to us. If you encounter any issues with your purchase, please inform our customer service within 24 hours, and we will diligently work to find a suitable resolution.</p>
        </div>
        <div className='my-3'>
          <p className='text-gray-500 text-lg'>Regarding our SEO services, we have devised a convenient payment plan, allowing you to evaluate the previous work and performance before making the next month's payment. While we strive for positive outcomes, it's important to understand that the nature of the industry prevents us from guaranteeing specific rankings, traffic, or sales.</p>
        </div>
        <div className='my-3'>
          <p className='text-gray-500 text-lg'>If you are interested in our Guaranteed Moneyback SEO plan, we have a separate agreement in place to determine eligibility for a refund. Details regarding the conditions for this plan can be found on our dedicated Moneyback SEO Page. At ZaynoSoft, we take pride in our transparent policies, ensuring a harmonious and satisfying experience for our valued clients.</p>
        </div>
      </div>

      </div>


    </div>
  )
}

export default page
