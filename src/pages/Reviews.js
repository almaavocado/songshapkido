import React from "react";
const reviewsData = [
  {
    text:
      "I've been training at Song's Hapkido for over a year now, and it's been an incredible journey. The instructors are highly skilled and patient, and they create a welcoming environment for everyone. I've not only improved my self-defense skills but also gained a sense of discipline and confidence. I highly recommend Song's Hapkido to anyone looking to learn martial arts.",
    author: " A",
    image:"a"
  },
  // Add more review objects as needed
  {
    text:
      "I've been training at Song's Hapkido for over a year now, and it's been an incredible journey. The instructors are highly skilled and patient, and they create a welcoming environment for everyone. I've not only improved my self-defense skills but also gained a sense of discipline and confidence. I highly recommend Song's Hapkido to anyone looking to learn martial arts.",
    author: "B",
    image:"B" 
   },
  {
    text:
      "I've been training at Song's Hapkido for over a year now, and it's been an incredible journey. The instructors are highly skilled and patient, and they create a welcoming environment for everyone. I've not only improved my self-defense skills but also gained a sense of discipline and confidence. I highly recommend Song's Hapkido to anyone looking to learn martial arts.",
    author: "C",
    image:
      "C",
  },
  {
    text:
      "I've been training at Song's Hapkido for over a year now, and it's been an incredible journey. The instructors are highly skilled and patient, and they create a welcoming environment for everyone. I've not only improved my self-defense skills but also gained a sense of discipline and confidence. I highly recommend Song's Hapkido to anyone looking to learn martial arts.",
    author: "D",
    image:
      "D",
  },
];

export default function Reviews() {
  return (
    <div className="bg-gray-100 pt-6">
      <h1 className="text-4xl font-bold tracking-tight text-black sm:text-4xl mt-5 text-center">Reviews</h1>

      <section className="relative isolate overflow-hidden bg-gray-100 px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          {reviewsData.map((review, index) => (
            <div key={index} className="mt-10">
              <div className="flex flex-col items-center space-y-3">
                <img
                  className="h-10 w-10 rounded-full"
                  src={review.image}
                  alt=""
                />
                <div className="font-semibold text-gray-900">{review.author}</div>
              </div>
              <blockquote className="mt-4 text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>{review.text}</p>
              </blockquote>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}