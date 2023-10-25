/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { ChevronDoubleDownIcon } from '@heroicons/react/outline'

export default function Example() {
  return (    
    <div className="isolate bg-gray-100 px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true"></div>
            <div className="mx-auto max-w-max text-center flex flex-wrap items-start justify-start">
                <div className="w-full sm:w-1/2 p-4 text-left">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Studio Info</h2>
                    <p className="text-2xl font-semibold pt-6">4354 Sepulveda Blvd, Culver City, CA 90230</p>
                    <p className="text-2xl font-semibold pt-6">
                    PHONE: <a href="tel:+13103911714">(310)-391-1714</a>
                    </p>
                    <p className="text-2xl font-semibold pt-6"></p>
                    <p><strong>MON-THURS:</strong> 5:00PM-8:00PM</p>
                    <p><strong>FRIDAY:</strong> 5:00PM-7:00PM</p>
                    <p><strong>SAT:</strong> 9:30AM-12:00PM</p>
                    <p><strong>SUN:</strong> CLOSED</p>
                </div>
                
                <div className="w-full sm:w-1/2 p-4">
                    {/* Google Maps Embed Code */}
                    <div className="w-full aspect-w-4 aspect-h-3">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1169.400606596289!2d-118.40842555311399!3d34.003720958825056!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2ba16ff4e762b%3A0x71a3c26853c5f3e5!2s4354%20Sepulveda%20Blvd%2C%20Culver%20City%2C%20CA%2090230!5e0!3m2!1sen!2sus!4v1697833360275!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>
                    </div>
                </div>
            </div>


        <div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">

        
        {/*
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Special Request or Demonstration Inquiry</h2>               
                <p className="py-2 text-lg text-center text-gray-600">
                Fill out this form.
                </p>
            </div>
            




        <form action="#" method="POST" className="mx-auto mt-2 max-w-xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                First name
                </label>
                <div className="mt-2.5">
                <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>
            <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                Last name
                </label>
                <div className="mt-2.5">
                <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>
            
            <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email
                </label>
                <div className="mt-2.5">
                <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                Phone number
                </label>
                <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center">
                    <label htmlFor="country" className="sr-only">
                    Country
                    </label>
                    <select
                    id="country"
                    name="country"
                    className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-700 sm:text-sm"
                    >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                    </select>
                    <ChevronDoubleDownIcon
                    className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                    aria-hidden="true"
                    />
                </div>
                <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                Message
                </label>
                <div className="mt-2.5">
                <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                />
                </div>
            </div>
            
            </div>
            <div className="mt-10">
            <button
                type="submit"
                className="block w-full rounded-md bg-blue-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
            >
                Let's talk
            </button>
            </div>
        </form>
  */}
        
     
    </div>
    </div>
   
  )
}
