import React from 'react'
import VideoItem from "./VideoItem";


const VideoList =(props) => {

    const videos =  props.videos.map (val => <VideoItem key={val.etag} video={val}/>);

    return (
      <div>
          {props.videos.length}
          {videos}
      </div>
    );
};

export default VideoList;