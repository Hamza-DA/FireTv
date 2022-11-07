import React from 'react';
import { Link } from 'react-router-dom';
function Poster({ movie, index, type }) {
  return (
    <Link key={index} to={`/${type}/${movie.id}`}>
      <div className='gap-4 overflow-hidden w-full px-2 md:w-48 h-auto flex-shrink-0 relative duration-100 shadow-md'>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={`Props.title`}
          className='rounded-2xl mb-2 object-cover w-full h-48 md:h-60 border-gray-200 border-opacity-20 border-[0.5px] border-solid'
        />

        <h2 className='font-[inter] ml-1 text-left text-base font-bold text-white'>
          {movie.title || movie.name}
        </h2>
      </div>
    </Link>
  );
}
export default Poster;
