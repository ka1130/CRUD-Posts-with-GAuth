import {
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR
} from "actions/types";

export default function loadingReducer(state = false, action) {
  switch (action.type) {
    case LOAD_POSTS:
      return true;
    case LOAD_POSTS_SUCCESS:
      return false;
    case LOAD_POSTS_ERROR:
      return false;
    default:
      return state;
  }
}
