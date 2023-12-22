import React, { useEffect, useState } from "react";
import CommentList, { Comment } from "./CommentList";
import classes from "./Comments.module.css";
import NewComment, { CommentData } from "./NewComment";

type CommentsProps = {
  eventId: string;
};

function Comments({ eventId }: CommentsProps) {
  const [showComments, setShowComments] = useState<boolean>(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [isFetchingComments, setIsFetchingComments] = useState<boolean>(false);

  // GET comments
  useEffect(() => {
    setIsFetchingComments(true);
    if (showComments) {
      fetch("/api/comments" + eventId)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch comments");
          }
          return response.json();
        })
        .then((data) => {
          setComments(data.comments);
          setIsFetchingComments(false);
          console.log(data);
        })
        .catch((error) => {
          console.error("Error fetching comments:", error);
          setIsFetchingComments(false);
        });
    }
  }, [showComments]);

  function toggleCommentHandler() {
    setShowComments((prevValue) => !prevValue);
  }

  // ADD comment

  function addCommentHandler(commentData: CommentData) {
    fetch("/api/comments" + eventId, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        console.log("Response status:", response.status);
        if (response.ok) {
          return response.json();
        }
        const data = await response.json();
        console.error("Error response data:", data);
        throw new Error(data.message || "Something went wrong!");
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
        console.log("commentData:", commentData);
      });
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment = {addCommentHandler}/>}
      {showComments && !isFetchingComments && (
        <CommentList comments={comments} />
      )}
      {showComments && isFetchingComments && <p>Loading ...</p>}
    </section>
  );
}

export default Comments;
