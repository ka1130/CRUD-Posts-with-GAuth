import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import postsReducer from "reducers/posts";
import singlePostReducer from "reducers/singlePost";
import authReducer from "reducers/auth";

const rootReducer = combineReducers({
  posts: postsReducer,
  singlePost: singlePostReducer,
  auth: authReducer,
  form: formReducer
});

export default rootReducer;
