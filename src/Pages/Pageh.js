import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostersRow from '../Components/PostersRow';
import MediaInfo from '../Components/MediaInfo';
import axios from 'axios';
import Slider from 'react-slick';
import Poster from '../Components/Poster';
function Pageh() {
  //http://103.133.143.18/Data/disk1/hollywood/2019/2nd%20Chance%20for%20Christmas%20%282019%29/
  const [nav11, setNav11] = useState();
  const [nav22, setNav22] = useState();
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    fade: true,
    swipeToSlide: false,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className=' hidden md:flex z-10 w-40 h-full absolute right-0 top-1/2 -translate-y-1/2  items-center justify-center'
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
        className='hidden md:flex z-10 w-40 h-full absolute left-0 top-1/2 -translate-y-1/2 items-center justify-center'
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
  const carouselsetts = {
    className: 'px-4',
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
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
  const { type } = useParams();
  const key = process.env.REACT_APP_WATCHED_API_KEY;
  const [Trending, setTrending] = useState([]);
  const [Popular, setPopular] = useState([]);
  useEffect(() => {
    fetchData();
  }, [type]);
  const fetchData = () => {
    const popular = axios.get(
      `https://api.themoviedb.org/3/${type}/popular?api_key=${key}&language=en-US`
    );
    const Trending = axios.get(
      `https://api.themoviedb.org/3/trending/${type}/week?api_key=${key}`
    );
    //https://api.themoviedb.org/3/trending/movie/week?api_key=<<api_key>>
    // const topRated = axios.get(
    //   `https://api.themoviedb.org/3/${type}/top_rated?api_key=${key}&language=en-US`
    // );
    axios
      .all([popular, Trending])
      .then(
        axios.spread((pop, trd) => {
          setPopular({ ...pop.data, type });
          setTrending({ ...trd.data, type });
        })
      )
      .catch((errors) => {
        console.log(errors);
      });
  };
  return (
    <>
      <div
        id='carouselExampleCaptions'
        class='h-[100vh] -mb-[40vh] overflow-hidden carousel slide carousel-fade relative'
        data-bs-ride='carousel'
      >
        <Slider
          ref={(slider1) => setNav11(slider1)}
          asNavFor={nav22}
          {...settings}
        >
          {Popular.results &&
            Popular.results.map((e, i) => (
              <div key={i} class={`relative w-full h-full`}>
                <MediaInfo media={e} />{' '}
              </div>
            ))}
        </Slider>
      </div>

      <div className=' z-10 relative'>
        <h2 className='pl-8 font-semibold m-4 text-white text-3xl'>Popular</h2>
        <Slider
          ref={(slider2) => setNav22(slider2)}
          asNavFor={nav11}
          {...carouselsetts}
        >
          {Popular.results &&
            Popular.results.map((e, i) => (
              <>
                <Poster type={type} key={i} movie={e} />
              </>
            ))}
        </Slider>
      </div>
      <PostersRow Title='Trending' data={Trending.results} type={type} />
    </>
  );
}

export default Pageh;
