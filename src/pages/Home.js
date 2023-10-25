/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import ClassCards from '../components/ClassCards';

import {
  CheckIcon,
} from '@heroicons/react/solid';


const includedFeatures = [
  'Uniform',
  'White Belt',
  'One-week access to our classes',
  'Parental consent required for participants under 18 years of age'
]

export default function Home() {
  return (
    <div className="bg-gray-100">

      <div>
        <HeroCarousel />
  
      </div>
      

      
      <div className="bg-gray-100 p-5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:flex lg:justify-center">
            <div className="max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mt-20">
                Unleashing Potential Since 1992
              </h2>
              <p className="mt-4 text-lg text-gray-600">
              For over three decades, Song's Hapkido West LA, has been a cornerstone of Culver City. It's a hub for nurturing both physical and mental development through Hapkido, a Korean martial art that fosters discipline, self-confidence, and physical fitness. 
              Our dedicated instructors are committed to helping students reach their full potential, offering practical self-defense techniques, throws, and martial arts mastery. 
              Enroll today and become part of our legacy, where fitness, fortitude, and growth pave the way for a brighter future.
              </p>
            </div>
            
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-md text-center p-4 mb:p-0">
          {/* Visit Us Container */}
        <div className="bg-gray-200 rounded-full mb-8 p-4">
          <h2 className="text-md tracking-tight text-gray-900 sm:text-2xl">Visit Us</h2>
          <h3 className="mt-2 text-md font-bold">4354 Sepulveda Blvd, Culver City, CA 90230</h3>
        </div>

      </div>


    <ClassCards />

      
    <div className="bg-gray-100 p-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className='items-center justify-center text-center pt-6'>
            <p className="text-2xl font-semibold text-gray-600 italic">"Strength, Discipline, and Growth: Your Journey Begins at Song's Hapkido West LA."</p>

            </div>

          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto sm:mt-10">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">1 Week Trial</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Receive a one-week trial for $25. <strong>Please visit us at the studio to sign up</strong>, and don't forget to bring your own water! If you are under 18, a parent must be present on the first day of class.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-black">What’s included</h4>
                <div className="flex-auto border-t-2 border-gray-200" /> {/* Added border to create the line */}
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-yellow-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
              <div className="-mt-2 p-2 lg:mt-20 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                  <div className="mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold text-gray-600"></p>
                    <p className="mt-10 flex items-baseline justify-center gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-900">$25</span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                    </p>
                    <a
                      href="/contact-us"
                      className="mt-10 block w-full rounded-md bg-yellow-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover-bg-yellow-500 focus-visible-outline focus-visible-outline-2 focus-visible-outline-offset-2 focus-visible-outline-indigo-600 hover:bg-slate-500"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-10"></div>
    </div>
     
  );
}
