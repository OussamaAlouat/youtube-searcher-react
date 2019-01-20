import React from 'react'
import VideoItem from "./VideoItem";


const VideoList =(props) => {

    const videos =  props.videos.map (val => <VideoItem key={val.etag} video={val}/>);

    return (
      <div className="ui relaxed divided list">
          {videos}
      </div>
    );
};

export default VideoList;