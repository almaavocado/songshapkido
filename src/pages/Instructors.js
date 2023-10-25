import songMclynn from '../assets/instructors/song-mclynn.jpg';
import okelly from '../assets/instructors/okelly-instructor.png'
import profile from '../assets/instructors/profile.png';
import Alma from '../assets/instructors/alma-instructor.png'
import Gatinel from '../assets/instructors/gatinel-instructor.png'
import Harris from '../assets/instructors/harris-instructor.png'
import Madera from '../assets/instructors/jesse-instructor.png'
import Wollin from '../assets/instructors/wollin-instructor.png'
import { useState } from 'react';



const facts = [
    { name: 'Founder', description: 'Songs Hapkido West Los Angeles' },
]

const fifthDegree = [
    {
        name: 'Master Morris O\'Kelly',
        imageSrc: okelly,
        imageAlt: 'MasterOKelly',
        description: '"Morris O\'Kelly has studied the art of Hapkido since the age of 15. The journey began at the suggestion of his late father who brought home a flyer, probably as a not-so-subtle hint to help toughen him up."',
      },
]

const fourthDegree = [
    {
        name: 'Richard Gatinel',
        imageSrc: Gatinel,
        imageAlt: 'Gat',
        description: 'Mr. Gatinel, discovered Hapkido in 1995. After having practiced different arts, he decided to switch to Hapkido. "It\'s the complete Martial Art: characterized by joint locks, throws, and dynamic kicking techniques."',

      },

]

const thirdDegree = [
    {
        name: 'Jesse Madera',
        imageSrc: Madera,
        imageAlt: 'Madera',
        description: 'Jesse Madera has studied the art of Hapkido since the age of 10. "Let Martial Arts not just be a hobby, but a Way of Life. Utilize all the lessons you have learned and imply them in your daily life."',
      },
      {
        name: 'Brian Lee',
        imageSrc: profile,
        imageAlt: 'Lee',
    
      },
]

const secondDegree = [
    {
        name: 'Richard Wollin',
        imageSrc: Wollin,
        imageAlt: 'Wollin',
        description: ''
      },
    {
        name: 'Gary Harris',
        imageSrc: Harris,
        imageAlt: 'Harris',
        description: '"The journey ends when you stop trying!"'
      },
]

const firstdegree = [
    {
        name: 'Alma Alvarado',
        imageSrc: Alma,
        imageAlt: 'Alvarado',
        description: 'Alma Alvarado has studied the art of Hapkido since the age of 9. Hapkido has helped her gain self confidence and would love to inspire more women to join Hapkdio.'
    },
    
]

const notPictured = [
    {
        name: 'Master Dewayne Brown, 5th Dan',   
      },
    {
        name: 'Mike Delahoussaye, 4th Dan',
      },
    {
        name: 'Brian Dobbins, 3rd Dan',
    },
    {
        name: 'Jan Stolpe, 2nd Dan',
    },
    {
        name: 'Jessica McLynn, 1st Dan',
    },
    {
        name: 'Benjamin Madera, 1st Dan',
    },

]

export default function Instructors() {

    const [hoveredInstructor, setHoveredInstructor] = useState(null);

    return (
        <div>
           
            <div className="bg-gray-100 pt-6">
                <h1 className="text-4xl font-bold tracking-tight text-black sm:text-4xl mt-8 text-center">6th Dan Master</h1>

                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
                        <img
                            src={songMclynn}
                            alt="song-air"
                            className="rounded-md bg-gray-100 w-full h-96 object-cover"
                        />
                    </div>
                    
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-4xl">Master Sean McLynn</h1>
                        <h2 className="text-1xl mt-2 font-bold tracking-tight text-gray-700 sm:text-1xl">6th Dan Black Belt</h2>
                        <p className="mt-4 text-gray-900 text-md">
                            Back in 1992, Master Sean McLynn started teaching martial arts at a park in Westside LA. He's been at it ever since and has earned the impressive rank of 6th Dan Black Belt.
                            He's also the person behind Song's Hapkido in West LA, proudly associated with the Dohyun International Hapkido Federation. He's carried forward the tradition of martial arts with a lot of heart and dedication.
                            During his journey, Master McLynn had the privilege of learning from Grandmaster Song, and that experience shaped not only his skills but also his deep love for martial arts.
                        </p>  
                        <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                            {facts.map((feature) => (
                                <div key={feature.name} className="border-t border-gray-200 pt-4">
                                    <dt className="font-medium text-gray-900">{feature.name}</dt>
                                    <dd className="mt-2 text-md text-gray-500">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>       
                    </div>
                   

                </div>


                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-black sm:text-4xl mt-8 text-center">5th Dan Masters</h1>
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-1 lg:gap-x-6 lg:space-y-0">
                        {fifthDegree.map((callout) => (
                        <div
                            key={callout.name}
                            className="group relative flex flex-col items-center justify-center"
                            onMouseEnter={() => setHoveredInstructor(callout.name)}
                            onMouseLeave={() => setHoveredInstructor(null)}
                        >
                            <div className="w-80 h-96 lg:w-96 lg:h-96 relative overflow-hidden rounded-lg bg-white">
                            <picture>
                                <source
                                srcSet={callout.imageSrc}
                                alt={callout.imageAlt}
                                media="(max-width: 600px)"
                                />
                                <source
                                srcSet={callout.imageSrc}
                                alt={callout.imageAlt}
                                media="(max-width: 1024px)"
                                />
                                <img
                                src={callout.imageSrc}
                                alt={callout.imageAlt}
                                className="object-cover object-center w-full h-full"
                                loading="lazy"
                                />
                            </picture>
                            
                            <div
                                className={`description-overlay absolute inset-0 flex items-center justify-center bg-slate-600 text-white text-center text-md rounded p-2 opacity-${hoveredInstructor === callout.name ? '90' : '0'} transition-opacity duration-500`}
                            >
                                {callout.description}
                            </div>
                            </div>
                            <h3 className="mt-6 text-lg font-semibold text-gray-900 group-hover:text-yellow-600">
                            <a href={callout.href} className="relative group">
                                <span className="absolute inset-0" />
                                {callout.name}
                            </a>
                            </h3>
                        </div>
                        ))}
                        </div>
                    </div>
                </div>


                

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-black sm:text-4xl mt-8 text-center">4th Dan Instructors</h1>
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-1 lg:gap-x-6 lg:space-y-0">
                        {fourthDegree.map((callout) => (
                            <div
                            key={callout.name}
                            className="group relative flex flex-col items-center justify-center"
                            onMouseEnter={() => setHoveredInstructor(callout.name)}
                            onMouseLeave={() => setHoveredInstructor(null)}
                        >
                            <div className="w-80 h-96 lg:w-96 lg:h-96 relative overflow-hidden rounded-lg bg-white">
                            <img
                                src={callout.imageSrc}
                                alt={callout.imageAlt}
                                className="object-cover object-center w-full h-full"
                                loading="lazy"
                            />
                            <div
                                className={`description-overlay absolute inset-0 flex items-center justify-center bg-slate-600 text-white text-center text-md rounded p-2 opacity-${hoveredInstructor === callout.name ? '90' : '0'} transition-opacity duration-500`}
                            >
                                {callout.description}
                            </div>
                            </div>
                            <h3 className="mt-6 text-lg font-semibold text-gray-900 group-hover:text-yellow-600">
                            <a href={callout.href} className="relative group">
                                <span className="absolute inset-0" />
                                {callout.name}
                            </a>
                            </h3>
                        </div>
                        ))}
                        </div>
                    </div>
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-black sm:text-4xl mt-8 text-center">3rd Dan Instructors</h1>
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                        {thirdDegree.map((callout) => (
                            <div
                            key={callout.name}
                            className="group relative flex flex-col items-center justify-center"
                            onMouseEnter={() => setHoveredInstructor(callout.name)}
                            onMouseLeave={() => setHoveredInstructor(null)}
                        >
                            <div className="w-80 h-96 lg:w-96 lg:h-96 relative overflow-hidden rounded-lg bg-white">
                            <img
                                src={callout.imageSrc}
                                alt={callout.imageAlt}
                                className="object-cover object-center w-full h-full"
                                loading="lazy"
                            />
                            <div
                                className={`description-overlay absolute inset-0 flex items-center justify-center bg-slate-600 text-white text-center text-md rounded p-2 opacity-${hoveredInstructor === callout.name ? '90' : '0'} transition-opacity duration-500`}
                            >
                                {callout.description}
                            </div>
                            </div>
                            <h3 className="mt-6 text-lg font-semibold text-gray-900 group-hover:text-yellow-600">
                            <a href={callout.href} className="relative group">
                                <span className="absolute inset-0" />
                                {callout.name}
                            </a>
                            </h3>
                        </div>
                        ))}
                        </div>
                    </div>
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-black sm:text-4xl mt-8 text-center">2nd Dan Instructors</h1>
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                        {secondDegree.map((callout) => (
                            <div
                            key={callout.name}
                            className="group relative flex flex-col items-center justify-center"
                            onMouseEnter={() => setHoveredInstructor(callout.name)}
                            onMouseLeave={() => setHoveredInstructor(null)}
                        >
                            <div className="w-80 h-96 lg:w-96 lg:h-96 relative overflow-hidden rounded-lg bg-white">
                            <img
                                src={callout.imageSrc}
                                alt={callout.imageAlt}
                                className="object-cover object-center w-full h-full"
                            />
                            <div
                                className={`description-overlay absolute inset-0 flex items-center justify-center bg-slate-600 text-white text-center text-md rounded p-2 opacity-${hoveredInstructor === callout.name ? '90' : '0'} transition-opacity duration-500`}
                            >
                                {callout.description}
                            </div>
                            </div>
                            <h3 className="mt-6 text-lg font-semibold text-gray-900 group-hover:text-yellow-600">
                            <a href={callout.href} className="relative group">
                                <span className="absolute inset-0" />
                                {callout.name}
                            </a>
                            </h3>
                        </div>
                        ))}
                        </div>
                    </div>
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-black sm:text-4xl mt-8 text-center">1st Dan Instructors</h1>
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-1 lg:gap-x-6 lg:space-y-0">
                        {firstdegree.map((callout) => (
                            <div
                            key={callout.name}
                            className="group relative flex flex-col items-center justify-center"
                            onMouseEnter={() => setHoveredInstructor(callout.name)}
                            onMouseLeave={() => setHoveredInstructor(null)}
                        >
                            <div className="w-80 h-96 lg:w-96 lg:h-96 relative overflow-hidden rounded-lg bg-white">
                            <img
                                src={callout.imageSrc}
                                alt={callout.imageAlt}
                                className="object-cover object-center w-full h-full"
                                loading="lazy"
                            />
                            <div
                                className={`description-overlay absolute inset-0 flex items-center justify-center bg-slate-600 text-white text-center text-md rounded p-2 opacity-${hoveredInstructor === callout.name ? '90' : '0'} transition-opacity duration-500`}
                            >
                                {callout.description}
                            </div>
                            </div>
                            <h3 className="mt-6 text-lg font-semibold text-gray-900 group-hover:text-yellow-600">
                            <a href={callout.href} className="relative group">
                                <span className="absolute inset-0" />
                                {callout.name}
                            </a>
                            </h3>
                        </div>
                        ))}
                        </div>
                    </div>
                </div>
                

                <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-10">
                    <h1 className="text-2xl font-bold tracking-tight text-black mt-3 text-center">Instructors Not Pictured</h1>
                    <div className="mx-auto max-w-2xl lg:max-w-none lg:py-2">
                        <div className="pb-20">
                        {notPictured.map((callout) => (
                            <div
                            key={callout.name}
                            className="group relative flex flex-col items-center justify-center"
                            onMouseEnter={() => setHoveredInstructor(callout.name)}
                            onMouseLeave={() => setHoveredInstructor(null)}
                        >
                        
                            <h3 className="mt-6 text-lg font-semibold text-gray-900 group-hover:text-yellow-600">
                            <a href={callout.href} className="relative group">
                                <span className="absolute inset-0" />
                                {callout.name}
                            </a>
                            </h3>
                        </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
