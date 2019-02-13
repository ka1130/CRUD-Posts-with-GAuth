import {
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR,
  LOAD_SINGLE_POST,
  LOAD_SINGLE_POST_SUCCESS,
  LOAD_SINGLE_POST_ERROR
} from "actions/types";

export default function loadingReducer(state = false, action) {
  switch (action.type) {
    case LOAD_POSTS:
    case LOAD_SINGLE_POST:
      return true;
    case LOAD_POSTS_SUCCESS:
    case LOAD_SINGLE_POST_SUCCESS:
      return false;
    case LOAD_POSTS_ERROR:
    case LOAD_SINGLE_POST_ERROR:
      return false;
    default:
      return state;
  }
}
