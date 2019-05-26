import React, { Component, Fragment } from "react";
import Post from "./Post";

export default class PostList extends Component {
  render() {
    let postComponents = [];
    if (this.props.posts) {
      this.props.posts.forEach((value, index) => {
        const postImageUrl = `https://picsum.photos/id/${value.id}/150/150`;
        postComponents.push(
          <Post key={index} post={value} imageUrl={postImageUrl} />
        );
      });
    }

    return <Fragment>{postComponents}</Fragment>;
  }
}
