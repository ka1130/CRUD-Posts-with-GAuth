import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "actions";

import PostCreate from "components/posts/PostCreate";
import PostList from "components/posts/PostList";
import PostEdit from "components/posts/PostEdit";
import PostShow from "components/posts/PostShow";
import PostDelete from "components/posts/PostDelete";
import Header from "components/Header";
import NotAuthedWarning from "./NotAuthedWarning";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Header />
        <Switch>
          <Route exact path="/posts/new" component={PostCreate} />
          <Route path="/posts/delete/:id" component={PostDelete} />
          <Route path="/posts/edit/:id" component={PostEdit} />
          <Route path="/posts/:id" component={PostShow} />
          <Route path="/not-authed" component={NotAuthedWarning} />
          <Route exact path="/" component={PostList} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  actions
)(App);
