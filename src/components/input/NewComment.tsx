import React, { FormEvent, useRef, useState } from "react";
import classes from "./NewComment.module.css";

export type CommentData = {
  email: string;
  name: string;
  text: string;
};

type NewCommentProps = {
  onAddComment: (data: CommentData) => void;
};

function NewComment({ onAddComment }: NewCommentProps) {
  const [isInvalid, setIsInvalid] = useState<boolean>(false);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const commentInputRef = useRef<HTMLTextAreaElement>(null);

  const submitFormHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current!.value;
    const enteredName = nameInputRef.current!.value;
    const enteredComment = commentInputRef.current!.value;

    if (
      !enteredEmail ||
      enteredEmail.trim() === "" ||
      !enteredEmail.includes("@") ||
      !enteredName ||
      enteredName.trim() === "" ||
      !enteredComment ||
      enteredComment.trim() === ""
    ) {
      setIsInvalid(true);
      return;
    }

    const commentData: CommentData = {
      email: enteredEmail,
      name: enteredName,
      text: enteredComment,
    };
    onAddComment(commentData);

    console.log(commentData);
    

    e.currentTarget.reset();
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.row}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" ref={emailInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" ref={nameInputRef} required />
        </div>
      </div>
      <div className={classes.control}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows={5} ref={commentInputRef} required />
      </div>
      {isInvalid && <p>Please enter a valid email address and comment!</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewComment;
