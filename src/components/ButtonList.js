import React from "react";
import Button from "./Button";

const ButtonList = () => {

  const list = ['All','Cooking','News','Javascript','90s songs','Trekking','Sufi','Taylor Swift','Pink Floyd','Sky'];
  return (
    <div className="flex">
      {list.map(btn =>(
        <Button name={btn}/>))}
    </div>
  );
};

export default ButtonList;
