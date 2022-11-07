import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import MediaInfo from '../Components/MediaInfo';
import VideoPlayer from '../Components/VideoPlayer';
import EpisodesCar from '../Components/EpisodesCar';
function Post() {
  const key = process.env.REACT_APP_WATCHED_API_KEY;
  let location = useLocation();
  const { id, type } = useParams();
  const [movie, setMovie] = useState([]);
  const [Title, setTitle] = useState('');
  const [Episodes, setEpisodes] = useState([]);
  const [SelectedSeason, setSelectedSeason] = useState(null);
  const [SelectedEpisode, setSelectedEpisode] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${key}&language=en-US`
      )
      .then((res) => {
        setTitle(res.data.title || res.data.name);
        setMovie(res.data);
      })
      .catch((err) => console.log(err));
  }, [Episodes, SelectedSeason, SelectedEpisode]);
  const handleCLick = (i) => {
    setSelectedSeason(i + 1);
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}/season/${i +
          1}?api_key=${key}&language=en-US`
      )
      .then((res) => setEpisodes(res.data.episodes))
      .catch((err) => console.log(err));
  };

  const selectEpisode = (props) => {
    setSelectedEpisode(props + 1);
    // console.log(SelectedSeason + 'x' + SelectedEpisode);
  };
  const seasonsMap = (e) => {
    const row = [];
    for (let index = 0; index < e; index++) {
      row.push(index);
    }
    return (
      <>
        <div className='relative grid md:grid-cols-2 grid-cols-4  gap-4 md:w-60  overflow-y-auto'>
          {row.map((e, i) => (
            <button
              key={i}
              onClick={() => handleCLick(i)}
              className='w-auto shadow-xl flex gap-2 pl-3 py-3 bg-gray-800 backdrop-blur-2xl bg-opacity-50 rounded-xl'
            >
              <h3 className='text-white text-base flex items-center'>
                <span className='hidden md:block'>Season</span> {e + 1}
              </h3>
            </button>
          ))}
        </div>
      </>
    );
  };
  return (
    <>
      <MediaInfo media={movie} />
      {type === 'tv' && (
        <div className='-mt-[40vh] z-10 relative px-8 flex flex-col md:flex-row gap-16'>
          <div className='flex flex-col'>
            <h2 className=' font-semibold mb-4 text-white text-3xl'>Seasons</h2>
            {movie && seasonsMap(movie.number_of_seasons)}
          </div>
          <div className='w-full'>
            <h2 className=' font-semibold mb-4 text-white text-3xl'>
              Episodes
            </h2>
            <EpisodesCar
              selectedEpisode={SelectedEpisode}
              selectEpisode={selectEpisode}
              episodes={Episodes}
            />
          </div>
        </div>
      )}
      {/* {console.log(Title)} */}
      {Title && (
        <VideoPlayer
          type={type}
          title={Title}
          SelectedEpisode={SelectedEpisode}
          SelectedSeason={SelectedSeason}
        />
      )}
    </>
  );
}
export default Post;
