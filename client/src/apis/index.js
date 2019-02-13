import axios from "axios";

export const fetchPosts = async () => {
  const response = await axios.get("http://localhost:3001/posts");
  return response.data;
};

export const fetchSinglePost = id => async () => {
  const response = await axios.get(`http://localhost:3001/posts/${id}`);
  return response.data;
};
