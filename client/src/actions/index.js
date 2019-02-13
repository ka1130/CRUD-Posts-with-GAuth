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

export const loadPosts = () => ({ type: LOAD_POSTS }); //do we need this one?

export const setPosts = posts => ({
  type: LOAD_POSTS_SUCCESS,
  payload: posts
});

export const setError = error => ({ type: LOAD_POSTS_ERROR, payload: error });

export const loadSinglePost = () => ({ type: LOAD_SINGLE_POST }); //do we need this one?

export const setSinglePost = post => ({
  type: LOAD_SINGLE_POST_SUCCESS,
  payload: post
});

export const setSinglePostError = error => ({
  type: LOAD_SINGLE_POST_ERROR,
  payload: error
});

/**************************************************** */

// export const loadSinglePost = id => async dispatch => {
//   const response = await posts.get(`/posts/${id}`);
//   dispatch({ type: LOAD_SINGLE_POST, payload: response.data });
// };

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
