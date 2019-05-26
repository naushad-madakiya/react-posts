import React from "react";
import "./sidebar.css";
import LinkComponent from "./LinkComponent";

export default class Sidebar extends React.Component {
  render() {
    let linkContainer = [];

    if (this.props.urlList) {
      this.props.urlList.forEach((value, index) => {
        linkContainer.push(
          <li key={index}>
            <LinkComponent
              url={value.url}
              name={value.name}
              color={value.color}
            />
          </li>
        );
      });
    }

    return (
      <div className="sidebar">
        <ul>
          <h3> Social Media Links</h3>
          {linkContainer}
        </ul>
      </div>
    );
  }
}
