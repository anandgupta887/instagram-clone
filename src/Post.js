import React, { useState, useEffect } from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import { db } from "./firebase";
import { Button } from "@material-ui/core";
import firebase from "firebase";

function Post({ user, postId, username, imageUrl, caption }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const handleComment = (e) => {
    e.preventDefault();
    db.collection("posts").doc(postId).collection("comments").add({
      text: comment,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      unsubscribe();
    };
  }, [postId]);

  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
        />

        <h3>{username}</h3>
      </div>

      <img className="post__image" src={imageUrl} alt="" />
      <h4 className="post__text">
        <strong>{username} </strong>: {caption}
      </h4>

      {comments && (
        <div className="post__comment">
          {comments.map((comment) => (
            <p>
              <strong>{comment.username}</strong> : {comment.text}
            </p>
          ))}
        </div>
      )}

      {user && (
        <form className="post__commentBox">
          <input
            className="post__input"
            type="text"
            placeholder="Enter your comment..."
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <Button
            className="post__button"
            disabled={!comment}
            onClick={handleComment}
            type="submit"
          >
            POST
          </Button>
        </form>
      )}
    </div>
  );
}

export default Post;
