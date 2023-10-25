import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import appBanner1 from '../assets/banner-imgs/appbanner1.png';
import appBanner2 from '../assets/banner-imgs/appbanner2.png';
import appBanner3 from '../assets/banner-imgs/appbanner3.png';
import './HeroCarousel.css';

const commonProps = {
  timerDurationMilliseconds: 400,
  infiniteLoop: true,
  autoPlay: true,
  showArrows: true,
  showStatus: true,
  showThumbs: false,
  showIndicators: true,
  pauseOnHover: true,
};

function HeroCarousel() {
  const carouselItems = [
    {
      image: appBanner1,
      buttonText: "Learn More",
      link: "/hapkido",
    },
    {
      image: appBanner2,
      buttonText: "Learn More",
      link: "/hapkido",
    },
    {
      image: appBanner3,
      buttonText: "Learn More",
      link: "/hapkido",
    },
    
    // Add more items as needed
  ];

  return (
    <div className="relative overflow-hidden">
      <Carousel className="custom-carousel" {...commonProps}>
        {carouselItems.map((item, index) => (
          <div key={index}>
            <div className="carousel-item-container">
              <img
                src={item.image}
                alt={`Carousel ${index + 1}`}
                loading="lazy"
                
              />
              <div className="carousel-text-container">
                <div className="flex flex-col items-center justify-center h-full">
                  <h2 className="carousel-title">{item.title}</h2>
                  <a href={item.link} className="rounded-md bg-yellow-600 px-2 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                    {item.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default HeroCarousel;
