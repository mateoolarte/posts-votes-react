import React, { Component } from "react";
import Data from "./Data";
import Posts from "./Posts";
import OrderSection from "./OrderSection";

class App extends Component {
  constructor() {
    super();

    this.orderAsc = this.orderAsc.bind(this);
    this.orderDesc = this.orderDesc.bind(this);
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);

    this.state = {
      posts: Data
    };
  }

  compareValues(order) {
    return (a, b) => {
      let comparison = 0;

      if (a.votes > b.votes) {
        comparison = 1;
      } else if (a.votes < b.votes) {
        comparison = -1;
      }

      return order === "desc" ? comparison * -1 : comparison;
    };
  }

  filterPosts(sorting, btnAddClass, actualItem) {
    let btnNotSelected = document.getElementById(btnAddClass);

    const dataSortable = this.state.posts.sort(this.compareValues(sorting));

    this.setState({ posts: dataSortable });
    
    if (btnAddClass !== undefined) {
      if (!btnNotSelected.classList.contains("is-outlined")) {
        btnNotSelected.classList.add("is-outlined");
      }

      if (actualItem !== undefined) {
        actualItem.classList.remove("is-outlined")
      }
    }
  }

  updateVotes(id, itemAttributes) {
    var index = this.state.posts.findIndex(x => x.id === id);
    let sorting = "asc"

    const btnSort = document.getElementById("desc-btn")
    
    if (!btnSort.classList.contains("is-outlined")) {
      sorting = "desc"
    }

    if (index === -1) {
      // handle error
    } else {
      this.setState({
        posts: [
          ...this.state.posts.slice(0, index),
          Object.assign({}, this.state.posts[index], itemAttributes),
          ...this.state.posts.slice(index + 1)
        ].sort(this.compareValues(sorting))
      });
    }
  }

  componentWillMount() {
    this.filterPosts("desc");
  }

  orderAsc(e) {
    this.filterPosts("asc", "desc-btn", e.target);
  }

  orderDesc(e) {
    this.filterPosts("desc", "asc-btn", e.target);
  }

  upVote(e) {
    let voteUpNumber = Number(e.target.nextSibling.firstChild.nodeValue);
    const voteUp = (voteUpNumber += 1);
    const idPost = Number(e.target.getAttribute("id"));

    this.updateVotes(idPost, { votes: voteUp });
  }

  downVote(e) {
    let voteDownNumber = Number(e.target.previousSibling.firstChild.nodeValue);
    const voteDown = (voteDownNumber -= 1);
    const idPost = Number(e.target.getAttribute("id"));

    this.updateVotes(idPost, { votes: voteDown });
  }

  render() {
    return (
      <div className="App section">
        <div className="container">
          <h1 className="title has-text-centered is-size-2">
            Blog posts populares
          </h1>

          <hr />

          <OrderSection asc={this.orderAsc} desc={this.orderDesc} />

          <Posts posts={this.state.posts} upVote={this.upVote} downVote={this.downVote} />
        </div>
      </div>
    );
  }
}

export default App;
