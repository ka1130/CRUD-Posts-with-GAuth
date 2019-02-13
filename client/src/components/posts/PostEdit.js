import React, { Component } from "react";
import { connect } from "react-redux";
import { editPost, loadSinglePost } from "actions";
import PostForm from "components/posts/PostForm";

class PostEdit extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.loadSinglePost(id);
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

const mapStateToProps = state => ({
  post: state.singlePost
});

export default connect(
  mapStateToProps,
  { editPost, loadSinglePost }
)(PostEdit);
