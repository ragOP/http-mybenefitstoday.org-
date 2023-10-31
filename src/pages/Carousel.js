import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const getCardStyle = (index) => ({
    textAlign: 'center',
    backgroundColor: 'white',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    margin: '20px',
    visibility: currentSlide === index ? 'visible' : 'hidden',
   
  });

  const reviews = [
    {
      headline: 'Relief for Everyday Expenses',
      paragraph: "I never thought I would qualify for the $1400 subsidy card, but I decided to apply anyway. I was pleasantly surprised to find out that I was eligible, and I've been using the card to help me with all sorts of expenses. It's been especially helpful for things like medical bills and prescription medications, which can be really expensive. I'm so grateful for this program and for the peace of mind that it's given me. It's a great resource for anyone who needs a little extra help making ends meet.",
      name: 'Paula A.',
    },
    {
      headline: 'A Real Game-Changer',
      paragraph: "I was hesitant at first when I heard about the $1400 subsidy card, but I decided to apply anyway. I'm so glad I did. This card has been a real game-changer for me. It's helped me cover the cost of things like rent, utilities, and other expenses that I would normally struggle to pay for. I feel like I can breathe easier now knowing that I have this card to fall back on. It's a great program, and I'm so grateful to have been eligible for it.",
      name: 'Daniel F.',
    },
    {
      headline: 'Peace of Mind for Expenses',
      paragraph: "I never thought I would qualify for the $1400 subsidy card, but I decided to apply anyway. I was pleasantly surprised to find out that I was eligible, and I've been using the card to help me with all sorts of expenses. It's been especially helpful for things like medical bills and prescription medications, which can be really expensive. I'm so grateful for this program and for the peace of mind that it's given me. It's a great resource for anyone who needs a little extra help making ends meet.",
      name: 'Jorge Pulido',
    },
  ];

  return (
    <div style={{ width: '100%', height: '300px', position: 'relative',   boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', }}>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div style={getCardStyle(index)}>
            <img  src="https://image-storage-wecallmedia.netlify.app/assets/images/ratings/5star.svg" alt="5 star"   style={{ display: 'block', margin: 'auto' }} />
            <div style={{ color: 'blue' }}>{review.headline}</div>
            <div style={{ color: 'gray' }}>{review.paragraph}</div>
            <div style={{ color: 'gray' }}>{review.name}</div>
          </div>
        ))}
      </Slider>
      <div style={{ position: 'absolute', top: '50%', left: '10%', zIndex: -1 }}>
        <div style={getCardStyle((currentSlide + reviews.length - 1) % reviews.length)} />
      </div>
      <div style={{ position: 'absolute', top: '50%', right: '10%', zIndex: -1 }}>
        <div style={getCardStyle((currentSlide + 1) % reviews.length)} />
      </div>
    </div>
  );
};

export default Carousel;
