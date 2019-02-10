import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import faker from "faker";
import { fetchSinglePost } from "actions";

class PostShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchSinglePost(id);
  }

  render() {
    const post = this.props.singlePost;
    return (
      <div className="ui segment">
        <div className="ui comments">
          <div className="comment">
            <span className="avatar">
              <img src={faker.image.avatar()} alt="" />
            </span>
            <div className="content">
              <span className="author">{post.name}</span>
              <div className="metadata">
                <div className="date">{post.email}</div>
              </div>
              <div className="text">
                <p>{post.body}</p>
              </div>
            </div>
          </div>
        </div>
        <Link to="/">Back to posts list</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  singlePost: state.singlePost
});

export default connect(
  mapStateToProps,
  { fetchSinglePost }
)(PostShow);
