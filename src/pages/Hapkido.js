import BeltProgression from '../assets/hapkdio/SongsBeltProgression.png';
import React from 'react';
import meaning from '../assets/hapkdio/meaning.svg'

const WhatIsHapkido = () => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <section className="mb-10">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
            What is Hapkido?
          </h1>
          <p className="text-lg text-gray-700">
            Hapkido is a dynamic and versatile Korean martial art that emphasizes
            self-defense techniques, fluid movements, and the harmonious blending
            of both hard and soft martial arts principles.
          </p>
        </section>


        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">The Meaning of Hapkido</h2>
          <img src={meaning} alt="HapkidoMeaning" className="w-full h-80" />
        </section>

        <div className="pt-10 sm:pt-30 pb-1 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"/>



        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Elements of Hapkido</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Self-Defense</h3>
              <p className="text-gray-600">
                Hapkido is renowned for its self-defense techniques, teaching
                students how to respond effectively to various situations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Versatility</h3>
              <p className="text-gray-600">
                Hapkido is adaptable, making it suitable for individuals of all ages
                and abilities. It can be applied to real-life self-defense scenarios.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Balanced Matrial Art</h3>
              <p className="text-gray-600">
                Hapkido combines the soft and yielding aspects of martial arts with
                the hard and powerful techniques, creating a balanced martial art.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Fluidity</h3>
              <p className="text-gray-600">
                Hapkido students learn to use an opponent's energy and movements
                to their advantage, resulting in smooth and effective techniques.
              </p>
            </div>
          </div>
        </section>

        <div className="pt-10 sm:pt-30 pb-1 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"/>


        <section className="mb-10 py-3">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Hapkido Techniques</h2>
          <p className="text-gray-600">
            Hapkido encompasses a wide range of techniques, including joint locks,
            throws, strikes, and grappling. These techniques are designed to
            subdue an opponent and minimize the risk of injury.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">The Three Principles of Hapkido</h2>
          <ul className="list-disc text-gray-600 pl-4">
            <li><strong>Principle of Sum: </strong> Using your opponents energy against them</li>
            <li><strong>Principle of Water: </strong>Non-resistance</li>
            <li><strong>Principle of Circular Motion: </strong>Continous Movement</li>
          </ul>

        </section>

        
        <div className="pt-10 sm:pt-30 pb-1 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"/>
        
        <section className="flex flex-col md:flex-row items-center md:space-x-4">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Hapkido Belt Progression</h2>
            <p className="text-gray-600">
              Belt progression at Song's Hapkido is determined by Master McLynn and Black Belt Committee.
            </p>
            <div className="flex items-center justify-center">
              <img src={BeltProgression} alt="BeltProgression" className="lg:w-3/4 lg:h-90" />
            </div>

          </div>
          
        </section>

        
      </div>
    </div>
  );
};

export default WhatIsHapkido;
