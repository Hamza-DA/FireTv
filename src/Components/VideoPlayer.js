import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
// https://www.reddit.com/r/dns/comments/711dzl/a_free_ads_blocker_dns/
function VideoPlayer({ type, source, title, SelectedSeason, SelectedEpisode }) {
  const [Source, setSource] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (type === 'movie' && title !== '') {
      // console.log(
      //   `https://mediacentr.herokuapp.com/movie/${title.replaceAll(' ', '-')}`
      // );
      axios
        .get(
          `https://mediacentr.herokuapp.com/movie/${title.replaceAll(' ', '-')}`
        )
        .then((resp) => {
          // console.log(res.data);
          setSource(resp.data);
        })
        .catch((err) => console.log(err));
    } else if (
      type === 'tv' &&
      SelectedEpisode !== null &&
      SelectedSeason !== null
    ) {
      axios
        .get(
          `https://mediacentr.herokuapp.com/tv/${title.replaceAll(
            ' ',
            '-'
          )}-${SelectedSeason}x${SelectedEpisode}`
        )
        .then((resp) => {
          setSource(resp.data);
          console.log(resp.data);
        })
        .catch((err) => console.log(err));
    }
  }, [SelectedEpisode]);
  return (
    <>
      <div
        className={`z-10 relative ${type === 'tv' ? 'mt-16' : '-mt-[40vh]'}`}
      >
        <h2 className='pl-8 font-semibold text-white text-3xl'>Watch</h2>

        <iframe
          allowfullscreen=''
          src={Source.iframeSrc}
          className='px-8 w-full aspect-video h-auto'
          frameBorder='0'
          allow='autoplay'
        ></iframe>
      </div>
    </>
  );
}
export default VideoPlayer;
