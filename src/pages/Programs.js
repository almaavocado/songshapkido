/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from 'react-router-dom';
import kicking from '../assets/program-cards/kicking.jpg'
import punching2 from '../assets/program-cards/punching2.jpg'
import selfDefense from '../assets/program-cards/selfdefense.jpg'
import falling from '../assets/program-cards/falling.jpg'
import sparring from '../assets/program-cards/sparring.jpg'
import throwing from '../assets/program-cards/throwing.JPG'

const programsData = [
  {
    title: "Kicking",
    description:
      "Our Kicking techniques are designed to help you master the art of effective kicks. Whether you're a beginner or have some experience, our classes cover a range of kicks, from the fundamental to advanced techniques. You'll improve your balance, flexibility, and self-defense skills, all while having a great time in a supportive and engaging environment.",
    image: kicking,
  },
  {
    title: "Punching",
    description:
      "We focus on developing powerful punches, precision striking, and effective combinations. This program is suitable for all skill levels, so whether you're new to martial arts or experienced, you'll benefit from improved coordination, self-confidence, and practical self-defense techniques. ",
    image: punching2,
  },
  {
    title: "Self-Defense",
    description:
      "Incorporating the Three Principles of Hapkido: Principle of Sum,  Water, and Circular Motion. Our Self-Defense program teaches students how to defend themselves using these principles, emphasizing non-resistance and effective circular motion techniques.",
    image: selfDefense,
  },
  {
    title: "Sparring",
    description:
      "Our Sparring focuses on the practical application of Hapkido techniques in a controlled and safe environment. Students learn how to apply their skills in real-life self-defense situations while developing quick reflexes and improving their overall martial arts abilities.",
    image: sparring,
  },
  {
    title: "Throwing Techniques",
    description:
      "Our Throwing Techniques focuses on the art of controlled throws, takedowns, and joint locks. Students will learn how to use an opponent's energy and movements to execute precise and effective throws while minimizing the risk of injury.",
    image: throwing,
  },
  {
    title: "Falling Techniques",
    description:
      "To avoid getting hurt, our falling techniques are designed to teach students how to safely and effectively fall or roll when thrown or taken down. These techniques are essential for self-preservation and injury prevention in martial arts and real-life situations.",
    image: falling,
  },
  
];

export default function OurCurriculum() {
  return (
    <div className="overflow-hidden bg-gray-100 pt-6">
      <h1 className="text-4xl font-bold tracking-tight text-black sm:text-4xl mt-8 text-center mb-8">
        Our Curriculum
      </h1>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 sm:grid-cols-3 sm:py-2">
        {programsData.map((program, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden mb-15">
            <img
              src={program.image}
              alt={`${program.title} Image`}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{program.title}</h2>
              <p className="mt-2 text-sm text-gray-600">{program.description}</p>
            </div>
          </div>
        ))}
        
      </div>
      <div className="flex justify-center mb-20">
        <button className="bg-yellow-700 text-white rounded-full px-4 py-2 hover:bg-slate-500 transition-all duration-300 mt-20">
          <Link to="/contact-us">Interested? Contact Us!</Link>
        </button>
      </div>
      
    </div>
  );
}
