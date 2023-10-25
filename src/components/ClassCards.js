import React from 'react'
import { Link } from 'react-router-dom';
import beginnerChildren from '../assets/class-imgs/children.png'
import Sparring from '../assets/class-imgs/sparring.png'
import juniors from '../assets/class-imgs/juniors.png';
import adult from '../assets/class-imgs/adult-info.png'

const ClassCards = () => {
  return (
    <div className="bg-gray-100 py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-4 md:p-0">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
              <img
                src={juniors}
                alt="Kids Beginner Class"
                className="mx-auto mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold mb-4">Children Classes</h3>
              <ul className="text-left text-gray-600 mb-4 flex-grow">
                <li><strong>•</strong> Age-appropriate, basic self-defense, and Song's Hapkido principles</li>
                <li><strong>•</strong> Discipline, respect, and self-confidence</li>
                <li><strong>•</strong> Introduction to safe and effective kicking techniques</li>
              </ul>

              <h1 className="text-md font-semibold text-gray-600">Ages: 5+</h1>

              
            </div>

            

            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
              <img
                src={Sparring}
                alt="Kids Advanced Class"
                className="mx-auto mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold mb-4"> Advanced Children</h3>
              <ul className="text-left text-gray-600 mb-4 flex-grow">
                <li><strong>•</strong> Refining skills and deepening understanding of Hapkido</li>
                <li><strong>•</strong> Advanced techniques, sparring, and advanced self-defense</li>
                <li><strong>•</strong> Advanced kicking techniques and repertoire expansion</li>
              </ul>
              
              <h1 className="text-md font-semibold text-gray-600">Ages: Up to 12</h1>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
              <img
                src={beginnerChildren}
                alt="Juniors"
                className="mx-auto mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold mb-4">Intermediate Juniors</h3>
              <ul className="text-left text-gray-600 mb-4 flex-grow">
                <li><strong>•</strong> Bridge between Children's Class and Adult Classes </li>
                <li><strong>•</strong> Fundamental techniques, self-defense, and confidence-building </li>
                <li><strong>•</strong> Developing well-rounded kicking skills</li>
              </ul>

              <h1 className="text-md font-semibold text-gray-600">Ages: 9-12</h1>

           
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
              <img
                src={adult}
                alt="Adult Class"
                className="mx-auto mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold mb-4">Adult Class</h3>
              <ul className="text-left text-gray-600 mb-4 flex-grow">
                <li><strong>•</strong> Practical self-defense, physical fitness, and mental discipline </li>
                <li><strong>•</strong> Comprehensive martial arts training, including kicks </li>
                <li><strong>•</strong> Challenge, fitness, and effective self-defense skills </li>
              </ul>
              <h1 className="text-md font-semibold text-gray-600">Ages: 13+</h1>
            </div>
          </div>
          
          <button className="bg-yellow-700 text-white rounded-full px-4 py-2 hover:bg-slate-500 transition-all duration-300 mt-20">
            <Link to="/our-curriculum">Learn More About Our Programs and Curriculum</Link>
          </button>
          
        </div>
        

      </div>

  )
}

export default ClassCards