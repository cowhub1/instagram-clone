import React, { useState } from 'react';
import './commentForm.css';

function CommentForm({ addComment }) {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      // addComment = (commentText) => {
        const newComment = {
          userId: 'sw_Lim59', // Replace with the actual user's ID
          text: comment,
        };
        addComment(newComment);
        setComment('');
      // addComment(comment);
      // setComment('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <input className="comment-input" type="text"  placeholder="댓글 달기..."  value={comment}  onChange={handleCommentChange} />
      <button className="comment-button" type="submit">게시</button>
    </form>
  );
}

export default CommentForm;