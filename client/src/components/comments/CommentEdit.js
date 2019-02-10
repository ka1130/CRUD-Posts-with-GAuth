import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchComments, editComment, fetchSingleComment } from "actions";
// add fetch single comment action and replace the current fetching of all comments
import CommentForm from "components/comments/CommentForm";

class CommentEdit extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchSingleComment(id);
  }

  handleSubmit = formValues => {
    const { id } = this.props.match.params;
    this.props.editComment(formValues, id);
  };

  render() {
    const { comment } = this.props;
    return (
      <div>
        <h3>Edit comment</h3>
        <CommentForm comment={comment} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    comment: state.singleComment
  };
};

export default connect(
  mapStateToProps,
  { fetchComments, editComment, fetchSingleComment }
)(CommentEdit);
