import React, { useState, useEffect } from 'react'
import {YOUTUBE_VIDEOS_API} from '../util/constants'
import VideoCard from './VideoCard';
import {AdVideoCard}  from './VideoCard';
import { Link } from 'react-router-dom';

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
      <AdVideoCard key='ad' info={videos[0]}/>
    {videos.map((video)=><Link to={"/watch?v="+video.id} ><VideoCard key={video.id} info={video}/></Link>)}
    </div>
  )
}

export default VideoContainer