import React from "react";
import { Provider } from "react-redux";
import configureStore from "store";

export default ({ children, initialState = {} }) => {
  // we pass here this initialState as a prop in order to be able to test CommentList componennt
  // CommentList.test.js
  return <Provider store={configureStore()}>{children}</Provider>;
};
