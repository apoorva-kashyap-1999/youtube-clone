import React, { useState } from "react";
import ReplyComments from "./ReplyComments";

const Comment = ({ comments }) => {
  const [showComment, setShowComment] = useState(
    new Array(comments.length).fill(false)
  );
  const toggleReplies = (index) => {
    const updatedShowComment = [...showComment];
    updatedShowComment[index] = !updatedShowComment[index];
    setShowComment(updatedShowComment);
  };

  return (
    <div>
      <ul>
        {comments.map((comment, index) => (
          <li
            key={index}
            className="p-2 m-2 border border-gray-100 bg-gray-200  shadow-lg rounded-lg text-left"
          >
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
            <div className="px-8 py-2 my-2 mx-8">
              👍👎
              <button className="mx-2" onClick={() => toggleReplies(index)}>
                🔽 See Replies
              </button>
            </div>
            {showComment[index] && (
              <div>
                {comment.replies && (
                  <ReplyComments commentsReply={comment.replies} />
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comment;
