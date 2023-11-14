import React from 'react';

const events = [
  
];

function Events() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl text-center font-semibold text-gray-800 mb-8">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:justify-center lg:items-center">
        {events.map((event, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex flex-col">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h2>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Description:</strong> {event.description}</p>
            <div className="lg:flex lg:items-center lg:justify-center">
              <img
                src={event.image}
                alt={`${event.title} Flyer`}
                className="w-full object-cover mt-2 lg:w-60 lg:h-96"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
