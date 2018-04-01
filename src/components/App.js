import React, { Component } from 'react';
import dataPosts from "./Data"
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import arrowUp from "@fortawesome/fontawesome-free-solid/faCaretUp";
import arrowDown from "@fortawesome/fontawesome-free-solid/faCaretDown";
import '../styles/App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    this.setState({ posts: dataPosts });
  }

  render() {
    return <div className="App section">
        <div className="container">
          <h1 className="title has-text-centered is-size-2">
            Blog posts populares
          </h1>
          <hr />
          <div className="sortPosts">
            <span className="has-text-weight-semibold margin-right-1">
              Orden:
            </span>
            <a className="button is-link is-outlined margin-right-1">
              Ascendente
            </a>
            <a className="button is-link">Descendente</a>
          </div>
          <section className="posts">
            {this.state.posts.map(post => {
              return <article className="section post" key={post.id}>
                  <div className="columns">
                    <div className="column is-5">
                      <figure className="image is-3by2">
                        <img src={post.post_image_url} alt={post.title} />
                      </figure>
                    </div>
                    <div className="column is-2">
                      <div className="post__voteContainer">
                        <a href="" className="post__vote post__vote--voteUp">
                          <FontAwesomeIcon icon={arrowUp} />
                        </a>
                        <strong className="post__voteNumber">
                          {post.votes}
                        </strong>
                        <a href="" className="post__vote post__vote--voteDown">
                          <FontAwesomeIcon icon={arrowDown} />
                        </a>
                      </div>
                    </div>
                    <div className="column is-5">
                      <h2 className="is-size-4 has-text-weight-bold margin-bottom-1">
                        <a href={post.url} target="_blank">
                          {post.title}
                        </a>
                      </h2>
                      <p className="content is-medium">
                        {post.description}
                      </p>
                      <div className="containerFlex">
                        <span className="post__author">Escrito por:</span>
                        <figure className="image is-32x32">
                          <img src={post.writer_avatar_url} alt="" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </article>;
            })}
          </section>
        </div>
      </div>;
  }
}

export default App;
