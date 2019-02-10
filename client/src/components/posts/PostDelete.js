import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deletePost } from "actions/index";
import history from "../../history";
import Modal from "components/Modal";

class PostDelete extends Component {
  renderActions = () => {
    const { id } = this.props.match.params;
    console.log(id);
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
    // conditional below - show name if fetched
    return "Are you sure you want to delete post with the name of ... ?";
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
