import SliderComponent from '../Components/SliderComponent';
import PostersRow from '../Components/PostersRow';
import axios from 'axios';

import React, { useState, useEffect } from 'react';
function Home(params) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(`https://mediacentr.herokuapp.com/home`).then((res) => {
      setMovies(res.data);
    });
  }, []);
  return (
    <>
      <SliderComponent moviesArray={movies.highlights} />
      <PostersRow data={movies.popular} Title='Popular' />
      <PostersRow data={movies.latest} Title='Latest' />
    </>
  );
}
export default Home;
