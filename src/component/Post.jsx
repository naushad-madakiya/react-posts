import React, { Component } from "react";
import "./post.css";

export default class Post extends Component {
  render() {
    const imgUrl = this.props.imageUrl;
    const imageStyle = {
      float: `left`,
      width: `200px`
    };

    return (
      <div className="postContainer">
        <img src={imgUrl} style={imageStyle} />
        <div className="postDescription">
          <h1>
            {this.props.post.id}: {this.props.post.title}
          </h1>
          <h3>{this.props.post.body}</h3>
        </div>
      </div>
    );
  }
}
