import React, { useEffect } from 'react';
import Slider from 'react-slick';
function EpisodesCar({ episodes, selectEpisode, selectedEpisode }) {
  return (
    <>
      <div className='grid grid-cols-4 md:grid-cols-6 gap-4 w-full'>
        {episodes.map((e, i) => (
          <button
            onClick={() => {
              selectEpisode(i);
            }}
            key={i}
            className={`shadow-xl ${
              selectedEpisode === i + 1 ? 'bg-green-700' : 'bg-gray-700'
            }  px-2 py-3 relative  w-full h-auto  backdrop-blur-2xl bg-opacity-50 rounded-xl`}
          >
            {/* <img
              src={`https://image.tmdb.org/t/p/w500/${e.still_path}`}
              className='rounded-2xl mb-2 object-cover w-full h-32  border-gray-200 border-opacity-20 border-[0.5px] border-solid'
              alt=''
            /> */}
            <h3 className='text-white text-base flex items-center'>
              <span className='hidden md:block'>Episode</span> {i + 1}
            </h3>
          </button>
        ))}
      </div>
    </>
  );
}
export default EpisodesCar;
