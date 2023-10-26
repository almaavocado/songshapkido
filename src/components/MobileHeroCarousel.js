import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import appBanner1 from '../assets/mobilebanner-imgs/mobilebanner1.png';
import appBanner2 from '../assets/mobilebanner-imgs/mobilebanner3.png';
import appBanner3 from '../assets/mobilebanner-imgs/mobilebanner4.png';
import appBanner4 from '../assets/mobilebanner-imgs/mobilebanner5.png';
import appBanner5 from '../assets/mobilebanner-imgs/mobilebanner6.png';
import appBanner6 from '../assets/mobilebanner-imgs/mobilebanner7.png';
import appBanner7 from '../assets/mobilebanner-imgs/mobilebanner8.png';

const mobileCarouselProps = {
  showArrows: true,
  showStatus: true,
  showThumbs: false,
  infiniteLoop: true,
  autoPlay: true,
  interval: 5000, // Set the interval for auto-play
};

const MobileHeroCarousel = () => {
  const carouselItems = [
    {
      image: appBanner6,
      buttonText: 'Learn More',
      link: '/hapkido',
    },
    {
      image: appBanner2,
      buttonText: 'Learn More',
      link: '/hapkido',
    },
    {
      image: appBanner3,
      buttonText: 'Learn More',
      link: '/hapkido',
    },
    {
        image: appBanner4,
        buttonText: 'Learn More',
        link: '/hapkido',
      },
      {
        image: appBanner5,
        buttonText: 'Learn More',
        link: '/hapkido',
      },
      {
        image: appBanner1,
        buttonText: 'Learn More',
        link: '/hapkido',
      },
      {
        image: appBanner7,
        buttonText: 'Learn More',
        link: '/hapkido',
      },
  ];

  return (
    <div className="relative overflow-hidden">
      <Carousel {...mobileCarouselProps}>
        {carouselItems.map((item, index) => (
          <div key={index}>
            <div className="carousel-item-container">
              <img src={item.image} alt={`Carousel ${index + 1}`} loading="lazy" />
              <div className="carousel-text-container">
                <div className="flex flex-col items-center justify-center h-full">
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
};

export default MobileHeroCarousel;
