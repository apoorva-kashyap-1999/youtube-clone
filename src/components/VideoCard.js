import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;

  console.log(info);
  return (
    <div className="p-2 m-2 w-72 border border-gray-200 rounded-lg shadow-lg">
      <img className="object-cover rounded-lg" alt='thumbnail' src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
        
      </ul>
    </div>
  );
};

export default VideoCard;
