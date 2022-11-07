import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Poster from '../Components/Poster';
function Searchres() {
  function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  let query = useQuery().get('q');
  const key = process.env.REACT_APP_WATCHED_API_KEY;
  const [searchRes, setsearchRes] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`
      )
      .then((res) => {
        setsearchRes(res.data);
      })
      .catch((err) => console.log(err));
  }, [query]);
  return (
    <>
      <section className='pt-16'>
        <h2 className='pl-8 font-semibold m-4 text-white text-3xl'>{`Result for : ${query}`}</h2>
        <div className='px-8 flex flex-row gap-2 flex-wrap justify-evenly items-start'>
          {searchRes.results &&
            searchRes.results.map((e, i) => (
              <Poster type={e.media_type} movie={e} key={i} />
            ))}
        </div>
      </section>
    </>
  );
}

export default Searchres;
