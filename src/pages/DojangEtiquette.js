import React from 'react';
import counting from '../assets/hapkdio/countingKorean.svg'


function DojangEtiquette() {
  return (
    <div className="py-10 bg-gray-100">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Korean Phrases and Dojang Etiquette</h1>
      </header>

      <div className="container mx-auto p-4">
        <section className="bg-gray-200 rounded-lg shadow p-4 mb-4">
          <h2 className="text-2xl font-semibold mb-4">Basic Korean Phrases</h2>
          <p>When bowing, the class Senior (student first in line) will announce, chah ryut, gyung nyeah, ba-ro.</p>

          <ul className="list-disc pl-8 mb-4 py-4">
            <li><strong>Chah Ryut (cha-ree-ut):</strong> Attention</li>
            <li><strong>Gyung Nyeah (gyung yay):</strong> Bow</li>
            <li><strong>Ba-Ro (bah-ro):</strong> At ease</li>
            <li><strong>Kiyap: </strong> Yell </li>
            <li><strong>Dojang:</strong> The Studio</li> 
          </ul>
        </section>

        <section className="bg-gray-200 rounded-lg shadow p-4 mb-4">
          <h2 className="text-2xl font-semibold mb-4">Counting in Korean</h2>
          
          <p>Many exercises done in class are counted in Korean. Beginning students should learn to count, in Korean, from one to ten.</p>

          <img src={counting} alt="PrinciplesImage" className="w-full h-60 justify-start object-fit" />

        </section>

        <section className="bg-gray-200 rounded-lg shadow p-4">
          <h2 className="text-2xl font-semibold mb-4">Dohyun International Hapkido: Dojang Rules</h2>
          <ul className="list-decimal pl-8 mb-4">
            <li>Each student must bow before entering the Dojang and before entering the mat area</li>
            <li>Black Belts should be addressed as "Sir" or "Ma'am"</li>
            <li>Each student must respect each other and instructors at all times</li>
            <li>Students must wear protective gear when sparring</li>
            <li>Students must keep the dojung in a neet and orderly fashion</li>
            <li>Street shoes may NOT be worn on the training mat</li>
            <li>Profanity is prohibited in the Dojang</li>
            <li>If you arrive late, go to the back of the class unless instructed otherwise</li>
            <li>Bow to each other and shake hands after each class</li>
            <li>Students should not distrub others during class</li>
            <li>Belt progression at Song's Hapkido is determined by Master McLynn and Black Belt Committee</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default DojangEtiquette;
