import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import GoogleAuth from "components/GoogleAuth";

class Header extends Component {
  render() {
    return (
      <div className="ui text menu">
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/posts/new" className="item">
          Write a post
        </Link>
        <GoogleAuth />
      </div>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps)(Header);
