import posts from "apis/posts";
import history from "../history";
import {
  CREATE_POST,
  EDIT_POST,
  DELETE_POST,
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR,
  FETCH_SINGLE_POST,
  SIGN_IN,
  SIGN_OUT
} from "actions/types";

export const loadPosts = () => ({ type: LOAD_POSTS });

export const setPosts = posts => ({
  type: LOAD_POSTS_SUCCESS,
  payload: posts
});

export const setError = error => ({ type: LOAD_POSTS_ERROR, payload: error });

/**************************************************** */

export const fetchSinglePost = id => async dispatch => {
  const response = await posts.get(`/posts/${id}`);
  dispatch({ type: FETCH_SINGLE_POST, payload: response.data });
};

export const createPost = post => async dispatch => {
  const response = await posts.post("/posts", post);
  dispatch({ type: CREATE_POST, payload: response.data });
  history.push("/");
};

export const editPost = (formValues, id) => async dispatch => {
  const response = await posts.patch(`/posts/${id}`, formValues);
  dispatch({ type: EDIT_POST, payload: response.data });
  history.push("/");
};

export const deletePost = id => async dispatch => {
  await posts.delete(`/posts/${id}`);
  dispatch({ type: DELETE_POST, payload: id });
  history.push("/");
};

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};
