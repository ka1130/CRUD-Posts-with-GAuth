import {
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR
} from "actions/types";

export default function errorReducer(state = null, action) {
  switch (action.type) {
    case LOAD_POSTS_ERROR:
      return action.payload;
    case LOAD_POSTS:
    case LOAD_POSTS_SUCCESS:
      return null;
    default:
      return state;
  }
}
