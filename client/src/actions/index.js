import posts from "apis/posts";
import history from "../history";
import {
  CREATE_POST,
  EDIT_POST,
  DELETE_POST,
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR,
  LOAD_SINGLE_POST,
  LOAD_SINGLE_POST_SUCCESS,
  LOAD_SINGLE_POST_ERROR,
  SIGN_IN,
  SIGN_OUT
} from "actions/types";

export const loadPosts = () => ({ type: LOAD_POSTS });

export const setPosts = posts => ({
  type: LOAD_POSTS_SUCCESS,
  payload: posts
});

export const setError = error => ({ type: LOAD_POSTS_ERROR, payload: error });

export const loadSinglePost = id => ({ type: LOAD_SINGLE_POST, id });

export const setSinglePost = post => ({
  type: LOAD_SINGLE_POST_SUCCESS,
  payload: post
});

export const setSinglePostError = error => ({
  type: LOAD_SINGLE_POST_ERROR,
  payload: error
});

export const createPost = post => ({ type: CREATE_POST, post });

export const editPost = (formValues, id) => {
  //formValues too? what params here?
  return { type: EDIT_POST, payload: { formValues, id } };
};

/**************************************************** */

// export const editPost = (formValues, id) => async dispatch => {
//   const response = await posts.patch(`/posts/${id}`, formValues);
//   dispatch({ type: EDIT_POST, payload: response.data });
//   history.push("/");
// };

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
