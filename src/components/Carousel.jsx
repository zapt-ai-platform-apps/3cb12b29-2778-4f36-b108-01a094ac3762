import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    { id: 1, title: 'Les meilleurs produits de la semaine', image: 'https://via.placeholder.com/800x300?text=Best+Products' },
    { id: 2, title: 'Les offres les moins chères', image: 'https://via.placeholder.com/800x300?text=Cheapest+Offers' },
    { id: 3, title: 'Les produits les plus populaires', image: 'https://via.placeholder.com/800x300?text=Popular+Products' },
  ];

  return (
    <div className="my-4">
      <Slider {...settings}>
        {slides.map(slide => (
          <div key={slide.id}>
            <img src={slide.image} alt={slide.title} className="w-full h-auto object-cover" />
            <h2 className="text-center text-xl font-bold mt-2">{slide.title}</h2>
          </div>
        ))}
      </Slider>
    </div>
  );
}