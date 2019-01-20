import React from 'react'
import VideoItem from "./VideoItem";


const VideoList = ({videos, onVideoSelect}) => {
    const videoRenderList = videos.map(val => <VideoItem onVideoSelect={onVideoSelect} key={val.etag} video={val}/>);

    return (
        <div className="ui relaxed divided list">
            {videoRenderList}
        </div>
    );
};

export default VideoList;