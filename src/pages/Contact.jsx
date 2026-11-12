import React from 'react'
import { MdEmail, MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhoneVolume, FaHeadset } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <div className='xl:flex xl:flex-row lg:flex lg:flex-row mt-32 justify-center gap-8 px-4'> 
        {/* Contact Information Card */}
        <div className="flex flex-col justify-between text-gray-700 bg-cyan-700 shadow-xl bg-clip-border rounded-2xl m-2 w-full lg:w-96 p-6">
          <div>
            <h1 className="text-white text-3xl font-bold tracking-wide">
              HostWise
            </h1>
            <p className="text-cyan-100 text-sm mt-1">
              Contact Information & Support Details
            </p>

            <div className="mt-8">
              <ul className="text-white space-y-5">
                {/* Primary Email */}
                <li className="flex items-start gap-3">  
                  <MdEmail className="text-2xl text-cyan-200 mt-1 shrink-0" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-cyan-200 block font-semibold">Primary Email</span>
                    <a href="mailto:info@hostwise.com" className="text-sm hover:underline hover:text-cyan-100">
                      info@hostwise.com
                    </a>
                  </div>
                </li>

                {/* Alternative Email */}
                <li className="flex items-start gap-3">  
                  <MdOutlineAlternateEmail className="text-2xl text-cyan-200 mt-1 shrink-0" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-cyan-200 block font-semibold">Alternative Email</span>
                    <a href="mailto:support@hostwise.com" className="text-sm hover:underline hover:text-cyan-100">
                      support@hostwise.com
                    </a>
                  </div>
                </li>

                {/* Primary Phone */}
                <li className="flex items-start gap-3">
                  <FaPhoneVolume className="text-xl text-cyan-200 mt-1 shrink-0" /> 
                  <div>
                    <span className="text-xs uppercase tracking-wider text-cyan-200 block font-semibold">Primary Phone</span>
                    <a href="tel:+18005550199" className="text-sm hover:underline hover:text-cyan-100">
                      +1 (800) 555-0199
                    </a>
                  </div>
                </li>

                {/* Alternative Phone / Helpline */}
                <li className="flex items-start gap-3">
                  <FaHeadset className="text-xl text-cyan-200 mt-1 shrink-0" /> 
                  <div>
                    <span className="text-xs uppercase tracking-wider text-cyan-200 block font-semibold">Alternative Helpline</span>
                    <a href="tel:+15552345678" className="text-sm hover:underline hover:text-cyan-100">
                      +1 (555) 234-5678
                    </a>
                  </div>
                </li>

                {/* Address */}
                <li className="flex items-start gap-3">
                  <AiFillHome className="text-2xl text-cyan-200 mt-1 shrink-0" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-cyan-200 block font-semibold">Address</span>
                    <p className="text-sm leading-relaxed">
                      478 Evergreen Rd, Roseville, CA 95678, USA
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-cyan-600/60 pt-4">
            <p className="text-xs text-cyan-200 mb-3 text-center">Follow HostWise</p>
            <ul className="flex justify-evenly text-white text-2xl">
              <li className="hover:scale-125 transition cursor-pointer">
                <RiFacebookFill />
              </li>
              <li className="hover:scale-125 transition cursor-pointer">
                <FaTwitter />
              </li>
              <li className="hover:scale-125 transition cursor-pointer">
                <GrInstagram />
              </li>
              <li className="hover:scale-125 transition cursor-pointer">
                <FaYoutube />
              </li>
            </ul>
          </div>
        </div>

        {/* Form */}
        <div className="py-2 px-6 mx-auto max-w-screen-md w-full"> 
          <h2 className="font-bold text-3xl text-neutral-800"> 
            Leave Your Message 
          </h2> 
          <p className="text-sm mt-2 font-medium text-stone-500"> 
            Have a question about HostWise rooms, dining, or amenities? Contact us and our team will get back to you promptly.
          </p> 
          <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-4"> 
            <div className="flex flex-col sm:flex-row gap-4"> 
              <div className="w-full sm:w-1/2"> 
                <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900"> 
                  First Name 
                </label> 
                <input 
                  type="text" 
                  id="firstName"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-cyan-500 focus:border-cyan-500" 
                  placeholder="Enter First Name"
                  required
                /> 
              </div> 
              <div className="w-full sm:w-1/2"> 
                <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900"> 
                  Last Name 
                </label> 
                <input 
                  type="text" 
                  id="lastName"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-cyan-500 focus:border-cyan-500" 
                  placeholder="Enter Last Name"
                /> 
              </div> 
            </div> 

            <div className="flex flex-col sm:flex-row gap-4"> 
              <div className="w-full sm:w-1/2"> 
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900"> 
                  Your Email
                </label> 
                <input 
                  type="email" 
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-cyan-500 focus:border-cyan-500" 
                  placeholder="Enter your email"
                  required
                /> 
              </div> 
              <div className="w-full sm:w-1/2"> 
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900"> 
                  Your Phone Number
                </label> 
                <input 
                  type="tel" 
                  id="phone"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-cyan-500 focus:border-cyan-500" 
                  placeholder="Enter your phone number"
                /> 
              </div> 
            </div> 

            <div> 
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900"> 
                Your Message 
              </label> 
              <textarea 
                id="message"
                rows="5" 
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-cyan-500 focus:border-cyan-500" 
                placeholder="Write your message or inquiry here..."
                required
              /> 
            </div> 

            <button 
              type="submit" 
              className="mt-4 p-3 text-white font-semibold rounded-lg bg-cyan-700 w-full hover:bg-cyan-800 transition duration-200 shadow-md"
            > 
              Send Message 
            </button> 
          </form> 
        </div> 
      </div>

      {/* Map Section */}
      <div className='mt-20'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.7055461305604!2d76.83906957503727!3d30.726677285926307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef0799d5c1c3%3A0xbe2c79bd70a0973!2sKreativan%20Technologies!5e0!3m2!1sen!2sin!4v1710326811204!5m2!1sen!2sin'
          className='border-0 h-[500px] w-full'
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          title='HostWise Location'
        ></iframe>
      </div>
    </>
  );
}

export default Contact
