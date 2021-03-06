import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deletePost } from "actions/index";
import history from "../../history";
import Modal from "components/Modal";

class PostDelete extends Component {
  renderActions = () => {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          className="ui button negative"
          onClick={() => this.props.deletePost(id)}
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  };

  renderContent() {
    return "Are you sure you want to delete this post?";
  }

  render() {
    return (
      <div>
        <Modal
          onDismiss={() => history.push("/")}
          title="Modal Title"
          content={this.renderContent()}
          actions={this.renderActions()}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { deletePost: deletePost }
)(PostDelete);
