import React from "react";
import SongsHapkidoClassSchedule from '../files/SongsHapkidoWLAClassSchedule.pdf'

const classScheduleData = [
  {
    nameOfClass: 'Beginner Children',
    belt: 'White to Orange',
    age: 'Ages 5+',
    description: 'Monday, Wednesday, and Friday',
    time: '5:00 - 5:45 PM',
  },
  {
    nameOfClass: 'Intermediate Children',
    belt: 'Green to Blue Belts',
    age: 'Ages 5+',
    description: 'Monday, Wednesday, and Friday',
    time: '6:00 - 6:45 PM',
  },
  {
    nameOfClass: 'Juniors',
    belt: 'Green to Blue Belts',
    age: 'Ages 9-12',
    description: 'Tuesday and Thursday',
    additionalDesc: 'Saturday',
    time: '5:00 - 5:45 PM',
    additionalTime: '9:00 - 9:40 AM',
  },
];

const classScheduleData2 = [
  {
    nameOfClass: 'Advanced Children/Juniors',
    belt: 'Brown to Black Belts',
    age: 'Up to 12 years old',
    description: 'Tuesday and Thursday',
    additionalDesc: 'Saturday',
    time: '6:00 - 6:45 PM',
    additionalTime: '9:00 - 9:40 AM',
  },
  {
    nameOfClass: 'Adults',
    belt: 'All Belts',
    age: 'Ages 13+',
    description: 'Monday - Thursday',
    additionalDesc: 'Saturday',
    time: '7:00 - 7:45 PM',
    additionalTime: '10:40 AM',
  },
];

function ClassScheduleItem({
  nameOfClass,
  description,
  age,
  time,
  belt,
  additionalDesc,
  additionalTime,
}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800">{nameOfClass}</h2>
      <p className="text-md font-semibold text-gray-600">{belt}</p>
      <p className="text-sm text-gray-600">{age}</p>
      <p className="border-t border-gray-200 pt-4 mt-4"></p>
      <p className="text-md text-gray-600">{description}</p>
      <p className="text-md text-semibold text-gray-600">{time}</p>
      {additionalDesc && <p className="text-md text-gray-600">{additionalDesc}</p>}
      {additionalTime && <p className="text-md text-gray-600">{additionalTime}</p>}
    </div>
  );
}

export default function Schedule() {
  return (
    <div className="overflow-hidden bg-gray-100 pt-6">
      <h1 className="text-4xl font-bold tracking-tight text-black sm:text-4xl mt-8 text-center">
        Class Schedule
      </h1>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center justify-center mt-10">
        {classScheduleData.map((item, index) => (
          <ClassScheduleItem key={index} {...item} />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-center justify-center mt-20">
        {classScheduleData2.map((item, index) => (
          <ClassScheduleItem key={index} {...item} />
        ))}
      </div>

      <div className="flex justify-center mb-20">
        <a
						download="SongsHapkidoWLAClassSchedule.pdf"
						href={SongsHapkidoClassSchedule}
						aria-label="Download Full Schedule"
					>
          <button className="bg-yellow-700 text-white rounded-full px-4 py-2 hover-bg-slate-500 transition-all duration-300 mt-20">
            Download Full Schedule
          </button>
        </a>
      </div>

    </div>
  );
}
