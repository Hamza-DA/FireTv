import React, { useState, useEffect, useRef } from 'react';
import Poster from './Poster';
import Slider from 'react-slick';
function PostersRow({ Title, data, ref1, ref2, type }) {
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className='hidden md:flex z-10 bg-gradient-to-l from-black to-transparent w-40 h-full absolute right-0 top-1/2 -translate-y-1/2 items-center justify-center'
        onClick={onClick}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1}
          className='w-10 h-10 stroke-white'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.25 4.5l7.5 7.5-7.5 7.5'
          />
        </svg>
      </div>
    );
  };
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className='hidden md:flex z-10 bg-gradient-to-r from-black to-transparent w-40 h-full absolute left-0 top-1/2 -translate-y-1/2  items-center justify-center'
        onClick={onClick}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1}
          className='w-10 h-10 stroke-white'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 19.5L8.25 12l7.5-7.5'
          />
        </svg>
      </div>
    );
  };
  const settings = {
    className: 'px-4 md:p-0',
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className='mt-20 z-10 relative'>
        <h2 className='pl-8 font-semibold m-4 text-white text-3xl'>{Title}</h2>
        <Slider ref={ref2} asNavFor={ref1} {...settings}>
          {data &&
            data.map((e, i) => (
              <>
                <Poster type={type} key={i} movie={e} />
              </>
            ))}
        </Slider>
      </div>
    </>
  );
}
export default PostersRow;
