import {
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR,
  LOAD_SINGLE_POST,
  LOAD_SINGLE_POST_SUCCESS,
  LOAD_SINGLE_POST_ERROR
} from "actions/types";

export default function errorReducer(state = null, action) {
  switch (action.type) {
    case LOAD_POSTS_ERROR:
    case LOAD_SINGLE_POST_ERROR:
      return action.payload;
    case LOAD_POSTS:
    case LOAD_POSTS_SUCCESS:
    case LOAD_SINGLE_POST:
    case LOAD_SINGLE_POST_SUCCESS:
      return null;
    default:
      return state;
  }
}
