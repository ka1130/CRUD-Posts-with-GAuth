import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "actions";

import PostForm from "components/posts/PostForm";
import requireAuth from "components/requireAuth";

class PostCreate extends Component {
  handleSubmit = formValues => {
    this.props.createPost(formValues);
  };

  render() {
    return <PostForm onSubmit={this.handleSubmit} />;
  }
}

export default connect(
  null,
  { createPost }
)(requireAuth(PostCreate));
