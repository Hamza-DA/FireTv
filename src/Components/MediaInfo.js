import React from 'react';
function MediaInfo({ media }) {
  return (
    <>
      <div className='relative h-[100vh]'>
        <div className='relative h-[100vh]'>
          <div className='bg-gradient-to-t from-black to-transparent absolute w-full h-full '></div>
          {/* <div className='bg-black opacity-40 absolute w-full h-full'></div> */}
          <img
            src={`https://image.tmdb.org/t/p/original${media.backdrop_path}`}
            className='block w-full h-full object-cover'
          />
        </div>
        <div className='absolute top-[35%] -translate-y-1/2 text-center'>
          <div className='flex-col w-auto z-20 px-8'>
            <h1 className='max-w-[12ch] md:max-w-full text-white text-left font-Display mb-3 text-3xl sm:text-5xl font-medium leading-none w-full'>
              {media.title}
            </h1>
            <div className='flex items-center mb-1 text-sm gap-2'>
              <span className='flex items-center mr-3 text-gray-200 uppercase'>
                {media.release_date}
              </span>
              <span className='flex items-center mr-3 text-gray-200 uppercase'>
                {media.runtime}
              </span>
              <span className='flex items-center mr-3 text-gray-200'>
                {media.original_language}
              </span>
            </div>
            <p className='text-gray-300 md:max-w-[80ch]  text-left leading-relaxed md:text-sm text-xs tracking-wide font-normal'>
              {media.overview}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default MediaInfo;
