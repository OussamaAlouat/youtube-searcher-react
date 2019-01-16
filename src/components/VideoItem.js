import React from 'react';

const VideoItem = props => {
    console.log(props.video)
  return (

      <div>{props.video.snippet.title}</div>
  );
};


export default VideoItem;