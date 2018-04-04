import React from "react";
import Votes from "./Votes";
import "../styles/Posts.css";

export default function Posts(props) {
  return (
    <section className="posts">
      {props.posts.map(post => {
        return (
          <article className="section post">
            <div className="columns">
              <div className="column is-5">
                <figure className="image is-3by2">
                  <img src={post.post_image_url} alt={post.title} />
                </figure>
              </div>
              <div className="column is-2">
                <Votes
                  idPost={post.id}
                  numberVote={post.votes}
                  upVote={props.upVote}
                  downVote={props.downVote}
                />
              </div>
              <div className="column is-5">
                <h2 className="is-size-4 has-text-weight-bold margin-bottom-1">
                  <a href={post.url} target="_blank">
                    {post.title}
                  </a>
                </h2>
                <p className="content is-medium">{post.description}</p>
                <div className="containerFlex">
                  <span className="post__author">Escrito por:</span>
                  <figure className="image is-32x32">
                    <img src={post.writer_avatar_url} alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
