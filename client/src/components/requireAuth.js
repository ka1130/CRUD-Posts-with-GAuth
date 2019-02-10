import React, { Component } from "react";
import { connect } from "react-redux";
import history from "../history";

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth.isSignedIn) {
        history.push("/not-authed");
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
      /* make sure we pass all the props */
    }
  }

  const mapStateToProps = state => ({
    auth: state.auth
  });

  return connect(mapStateToProps)(ComposedComponent);
};
