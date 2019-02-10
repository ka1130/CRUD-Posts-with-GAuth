import React from "react";
import Modal from "components/Modal";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import history from "../history";
import GoogleAuth from "components/GoogleAuth";

class NotAuthedWarning extends React.Component {
  componentDidUpdate() {
    if (this.props.auth.isSignedIn) {
      history.push("/");
    }
  }

  renderActions() {
    return (
      <React.Fragment>
        <Link to="/" className="ui button right floated">
          Cancel
        </Link>
        <GoogleAuth />
      </React.Fragment>
    );
  }

  render() {
    return (
      <Modal
        title="Not Authed"
        content="You're not signed in"
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps)(NotAuthedWarning);
