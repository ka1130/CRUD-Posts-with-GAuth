import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv4 from "uuid/v1";
import { fetchPosts } from "actions";
import PostItem from "components/posts/PostItem";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts = () =>
    this.props.posts.map(post => (
      <PostItem post={post} key={uuidv4()} auth={this.props.auth} />
    ));

  render() {
    return (
      <div className="ui segment">
        <h4>Post List</h4>
        <div className="ui relaxed divided list">{this.renderPosts()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { fetchPosts: fetchPosts }
)(PostList);
