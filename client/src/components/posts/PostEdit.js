import React, { Component } from "react";
import { connect } from "react-redux";
import { editPost, fetchSinglePost } from "actions";
import PostForm from "components/posts/PostForm";

class PostEdit extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchSinglePost(id);
  }

  handleSubmit = formValues => {
    const { id } = this.props.match.params;
    this.props.editPost(formValues, id);
  };

  render() {
    const { post } = this.props;
    return (
      <div>
        <h3>Edit post</h3>
        <PostForm post={post} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    post: state.singlePost
  };
};

export default connect(
  mapStateToProps,
  { editPost, fetchSinglePost }
)(PostEdit);
