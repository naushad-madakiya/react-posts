import React, { Component } from "react";
import PropTypes from "prop-types";

export default class LinkComponent extends Component {
  render() {
    const linkStyle = {
      color: this.props.color,
      fontWeight: 700
    };

    return (
      <a
        href={this.props.url}
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        {this.props.name}
      </a>
    );
  }
}

LinkComponent.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string
};
