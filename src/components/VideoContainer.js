import React, { useState, useEffect } from 'react'
import {YOUTUBE_VIDEOS_API} from '../util/constants'
import VideoCard from './VideoCard';

const VideoContainer = () => {

  const[videos,setVideos]= useState(null);

  useEffect(()=>{
    getVideos();
  },[]);
  
  const getVideos = async()=>{
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json);
    setVideos(json.items);
  }
  if(videos==null) return null;
  return (
    <div className='flex flex-wrap'>
    {videos.map((video)=><VideoCard key={video.id} info={video}/>)}
    </div>
  )
}

export default VideoContainer