import React, { Component } from "react";
import dataPosts from "./Data";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import arrowUp from "@fortawesome/fontawesome-free-solid/faCaretUp";
import arrowDown from "@fortawesome/fontawesome-free-solid/faCaretDown";
import "../styles/App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };
  }

  compareValues(order = "asc") {
    return (a, b) => {
      let comparison = 0;

      if (a.votes > b.votes) {
        comparison = 1;
      } else if (a.votes < b.votes) {
        comparison = -1;
      }

      return order === "desc" ? comparison * -1 : comparison;
    };
  };

  updatedDataPosts(actualItem, btnAddClass, sorting) {
    let itemWithoutChange = document.getElementById(btnAddClass);

    const dataSortable = dataPosts.sort(this.compareValues(sorting));

    this.setState({ posts: dataSortable });

    if (!itemWithoutChange.classList.contains("is-outlined")) {
      itemWithoutChange.classList.add("is-outlined");
    }

    actualItem.classList.remove("is-outlined");
  }

  componentWillMount() {
    this.setState({ posts: dataPosts });
  }

  orderAsc(e) {
    this.updatedDataPosts(e.target, "desc-btn", "asc");
  }

  orderDesc(e) {
    this.updatedDataPosts(e.target, "asc-btn", "desc");
  }

  render() {
    return (
      <div className="App section">
        <div className="container">
          <h1 className="title has-text-centered is-size-2">
            Blog posts populares
          </h1>
          <hr />
          <div className="sortPosts">
            <span className="has-text-weight-semibold margin-right-1">
              Orden:
            </span>
            <button
              onClick={this.orderAsc.bind(this)}
              className="button is-link is-outlined margin-right-1"
              id="asc-btn"
            >
              Ascendente
            </button>
            <button
              onClick={this.orderDesc.bind(this)}
              className="button is-link is-outlined"
              id="desc-btn"
            >
              Descendente
            </button>
          </div>
          <section className="posts">
            {this.state.posts.map(post => {
              return (
                <article className="section post" key={post.id}>
                  <div className="columns">
                    <div className="column is-5">
                      <figure className="image is-3by2">
                        <img src={post.post_image_url} alt={post.title} />
                      </figure>
                    </div>
                    <div className="column is-2">
                      <div className="post__voteContainer">
                        <button className="post__vote post__vote--voteUp">
                          <FontAwesomeIcon icon={arrowUp} />
                        </button>
                        <strong className="post__voteNumber">
                          {post.votes}
                        </strong>
                        <button className="post__vote post__vote--voteDown">
                          <FontAwesomeIcon icon={arrowDown} />
                        </button>
                      </div>
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
        </div>
      </div>
    );
  }
}

export default App;
