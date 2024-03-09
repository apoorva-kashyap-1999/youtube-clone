import React from "react";
import { UseSelector, useSelector } from "react-redux";

const Sidebar = () => {

  const isMenuOpen = useSelector(store=> store.app.isMenuOpen);
  
  //early return
  if(!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Live</li>
        <li>Videos</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Lifestyle</li>
        <li>Fashion</li>
        <li>Travel</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Sports</li>
        <li>Game</li>
        <li>React</li>
        <li>Spiritual</li>
      </ul>
    </div>
  );
};

export default Sidebar;
