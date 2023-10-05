"use client";

import React, { useState } from 'react';

const ContactForm  = () => {

  const [user , setUser] = useState({
    fullname:"",
    email:"",
    time:"",
    company:"",
    website:"",
    message:"",
  })

  const [status , setStatus] = useState('');

  function handleChange(e:any) {
      const name = e.target.name;
      const value = e.target.value;



      setUser((prevUser) => 
        ({...prevUser,[name] : value
      }));
  }

  const handleSubmit = async(e:any) => {
    e.preventDefault();
      try {
        const response = await fetch('api/contact' , {
          method: 'POST',
          headers:{"Content_Type" : "application/json"},
          body : JSON.stringify({
            fullname:user.fullname,
            email:user.email,
            time:user.time,
            company:user.company,
            website:user.website,
            message:user.message,
          })
        })

        if(response.status === 200) {
          setUser({
            fullname:"",
            email:"",
            time:"",
            company:"",
            website:"",
            message:"",
        })
          setStatus('success');
        }else{
          setStatus('error');
        }
      } catch (e) {
        console.log(e)
      }
      
  }

  return (
    <form onSubmit={handleSubmit} className='py-4 mt-4 border-t flex flex-col gap-5'>
  
          <div>
            <label htmlFor="fullname">Full Name</label>
            <input onChange={handleChange} name="fullname" type="text" id='fullname' value={user.fullname} required placeholder='Syed Sajid Hussain Shah'/>
          </div>

            {/* {
              fullname ? '' : "Fullname Is required"
            } */}

          <div>
            <label htmlFor="email">Your Email</label>
            <input onChange={handleChange} name="email" type="text" id='email' value={user.email} required placeholder='itxmurshad786736@gmail.com'/>
          </div>

          <div>
            <label htmlFor="time">What is TimeLine of your project?</label>
            <input onChange={handleChange} name="time" type="text" id='time' value={user.time} required placeholder='10 days-1 month'/>
          </div>


          <div>
            <label htmlFor="company">Your Company/Brand?</label>
            <input onChange={handleChange} name="company" type="text" id='company' value={user.company} required placeholder='EzuSoft Corporation'/>
          </div>

          <div>
            <label htmlFor="website">Your Website</label>
            <input onChange={handleChange} name="website" type="text" id='website' value={user.website} required placeholder='https://www.ezusoft.com'/>
          </div>

          <div>
            <label htmlFor="message">Tell us something about Project?</label>
        
                <input onChange={handleChange} name="message" type="text" id='message' className='h-32 flex justify-start items-start' value={user.message} required placeholder='Hi There! I would like to...'/>
  
          </div>
        <div>
        {status === 'success' && <p className='text-green-700'>Thank you for your message</p>}
          {status === 'error' && <p className='text-red-700'>There was an error your message</p>}

          <button type='submit' className='bg-black p-3 text-white rounded-md w-[180px] mx-auto'>Let's Get In Touch</button>
        </div>
              
         
  
    </form>
  )
}


export default ContactForm;


