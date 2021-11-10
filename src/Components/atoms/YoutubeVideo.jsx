import PropTypes from 'prop-types';
import React from 'react';
import YouTube from 'react-youtube';

const YoutubeVideo = ({ url }) => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const onReady = (event) => {
    event.target.pauseVideo();
  };

  const generateVideoId = (urlVideo) => urlVideo.split('v=')[1];

  return <YouTube videoId={ generateVideoId(url) } opts={ opts } onReady={ onReady } />;
};

YoutubeVideo.propTypes = {
  url: PropTypes.string.isRequired,
};

export default YoutubeVideo;
