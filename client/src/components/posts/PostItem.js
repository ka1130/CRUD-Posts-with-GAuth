import React, { Component } from "react";
import { Link } from "react-router-dom";
import faker from "faker";
import "./PostItem.css";

class PostItem extends Component {
  renderButtons = post => {
    if (this.props.auth.isSignedIn) {
      return (
        <React.Fragment>
          <Link to={`/posts/edit/${post.id}`} className="ui mini basic button">
            Edit
          </Link>
          <Link to={`/posts/delete/${post.id}`} className="ui mini button">
            Delete
          </Link>
        </React.Fragment>
      );
    }
  };

  render() {
    const { post } = this.props;
    return (
      <div className="item">
        <div className="right floated content">{this.renderButtons(post)}</div>
        <img className="ui avatar image" src={faker.image.image()} alt="" />
        <div className="content post-content">
          <p className="header">{post.title}</p>
          <div className="description">{post.body}</div>
          <Link to={`/posts/${post.id}`}>Go to the post</Link>
        </div>
      </div>
    );
  }
}

export default PostItem;
