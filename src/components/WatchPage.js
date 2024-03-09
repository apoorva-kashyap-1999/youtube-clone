import React, { useEffect } from "react";
import { closeMenu } from "../util/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();

  const [queryParams] = useSearchParams();

  //fetch video id
  const videoId = queryParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  // will use iframe instead of fetching api for video
  return (
    <div className="px-5">
      <iframe
      className="rounded-md"
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/" + videoId}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
