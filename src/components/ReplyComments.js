import React from "react";

//component recursion
const ReplyComments = ({ commentsReply }) => {
    // console.log(commentsReply);
  return (
    <ul>
      {commentsReply.map((comment,index) => (
        <li key={index} className="p-2 m-2 border border-gray-100 bg-gray-200  shadow-lg rounded-lg text-left">
          <div className="flex">
            <img
              className="h-12 inline"
              alt="user"
              src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />
            <div className="px-2 mx-2">
              <span className="text-lg font-bold">{" " + comment.name}</span>
              <div>{comment.text}</div>
            </div>
          </div>
          <div>
            {comment.replies && (
              <ReplyComments commentsReply={comment.replies} />
            )}
            </div>
        </li>
      ))}
    </ul>
  );
};

export default ReplyComments;
