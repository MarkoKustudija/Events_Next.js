import React from "react";

import classes from "./CommentList.module.css";

export type Comment = {
  id: string;
  text: string;
  name: string;
};

type CommentListProps = {
  comments: Comment[];
};

function CommentList({ comments }: CommentListProps) {
  return (
    <ul className={classes.comments}>
      {comments.map((comment, index) => (
        <li key={index}>
          <p>{comment.text}</p>
          <div>
            By <address>{comment.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
