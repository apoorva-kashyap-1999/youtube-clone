import React from "react";
import Comment from "./Comment";

const commentData = [
  {
    name: "Apoorva",
    text: "Very good tutorial",
    replies: [
      {
        name: "ReplyText",
        text: "True",
        replies: [
          {
            name: "ReplyTextNest",
            text: "True",
            replies: [{ name: "ReplyTextNested", text: "True" }],
          },
        ],
      },
    ],
  },
  {
    name: "Annie",
    text: "Very helpful tutorial",
    replies: [{ name: "ReplyText", text: "True" }],
  },
  {
    name: "Onisda",
    text: "Very good tutorial",
    replies: [{ name: "ReplyText", text: "True" }],
  },
  {
    name: "Sam",
    text: "Very good tutorial",
    replies: [{ name: "ReplyText", text: "True" }],
  },
  {
    name: "Naira",
    text: "Very good tutorial",
    replies: [{ name: "ReplyText", text: "True" }],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-left text-2xl">Comments :</h1>
      <Comment comments={commentData}/>
    </div>
  );
};

export default CommentsContainer;
