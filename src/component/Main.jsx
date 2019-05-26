import React, { Component } from "react";
import "./main.css";
import getData from "../api";
import PostList from "./PostList";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      postData: []
    };
  }

  componentDidMount() {
    let postAPI = getData("https://jsonplaceholder.typicode.com/posts");
    postAPI.then(posts => {
      this.setState({
        postData: posts,
        loading: false
      });
    });
  }

  render() {
    const isLoading = this.state.loading;

    return (
      <div className="main">
        {isLoading && <p> Loading...</p>}
        {!isLoading && <PostList posts={this.state.postData} />}
      </div>
    );
  }
}
