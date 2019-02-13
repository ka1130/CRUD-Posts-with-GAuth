import axios from "axios";

export const editPostRequest = (formValues, id) => async () => {
  const response = await axios.patch(
    `http://localhost:3001/posts/${id}`,
    formValues
  );
  return response.data;
};

export const deletePostRequest = id => async () => {
  await axios.delete(`http://localhost:3001/posts/${id}`);
};

export const createPost = post => async () => {
  const response = await axios.post("http://localhost:3001/posts", post);
  return response.data;
};

export const fetchPosts = async () => {
  const response = await axios.get("http://localhost:3001/posts");
  return response.data;
};

export const fetchSinglePost = id => async () => {
  const response = await axios.get(`http://localhost:3001/posts/${id}`);
  return response.data;
};
