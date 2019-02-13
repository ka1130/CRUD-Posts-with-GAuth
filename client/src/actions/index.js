import * as constants from "actions/types";

export const loadPosts = () => ({ type: constants.LOAD_POSTS });

export const setPosts = posts => ({
  type: constants.LOAD_POSTS_SUCCESS,
  payload: posts
});

export const setError = error => ({
  type: constants.LOAD_POSTS_ERROR,
  payload: error
});

export const loadSinglePost = id => ({ type: constants.LOAD_SINGLE_POST, id });

export const setSinglePost = post => ({
  type: constants.LOAD_SINGLE_POST_SUCCESS,
  payload: post
});

export const setSinglePostError = error => ({
  type: constants.LOAD_SINGLE_POST_ERROR,
  payload: error
});

export const createPost = post => ({ type: constants.CREATE_POST, post });

export const editPost = (formValues, id) => ({
  type: constants.EDIT_POST,
  payload: { formValues, id }
});

export const deletePost = id => ({ type: constants.DELETE_POST, payload: id });

export const signIn = userId => ({
  type: constants.SIGN_IN,
  payload: userId
});

export const signOut = () => ({
  type: constants.SIGN_OUT
});
