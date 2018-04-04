import React from "react";
import "../styles/Votes.css"

export default function Votes(props) {
  return (
    <div className="post__voteContainer">
      <button
        onClick={props.upVote}
        className="post__vote post__vote--voteUp"
        id={props.idPost}
      >
        ▲
      </button>
      <strong className="post__voteNumber">{props.numberVote}</strong>
      <button
        onClick={props.downVote}
        className="post__vote post__vote--voteDown"
        id={props.idPost}
      >
        ▼
      </button>
    </div>
  );
}
