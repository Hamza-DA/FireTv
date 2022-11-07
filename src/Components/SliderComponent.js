import React, { useState, useEffect, useRef } from 'react';
import MediaInfo from './MediaInfo';
import Slider from 'react-slick';
function SliderComponent({ moviesArray, ref1, ref2 }) {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    fade: true,
    swipeToSlide: false,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <>
      <div
        id='carouselExampleCaptions'
        class=' h-[100vh] overflow-hidden carousel slide carousel-fade relative'
        data-bs-ride='carousel'
      >
        <Slider {...settings}>
          {moviesArray &&
            moviesArray.map((e, i) => (
              <div key={i} class={`relative w-full h-full`}>
                <MediaInfo media={e} />{' '}
              </div>
            ))}
        </Slider>
      </div>
    </>
  );
}
export default SliderComponent;
