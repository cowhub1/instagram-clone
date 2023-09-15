import React from 'react';

function CommentList({ comments }) {
  console.log(comments);
  return (
    <ul>
      {comments.map((comment, index) => (
        <li key={index}>
          <span className="userID">{comment.userId}</span>: {comment.text}
        </li>
      ))}
    </ul>
  );
}

export default CommentList;