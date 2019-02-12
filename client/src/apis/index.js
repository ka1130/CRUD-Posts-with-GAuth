import axios from "axios";

export const fetchPosts = async () => {
  const response = await axios.get("http://localhost:3001/posts");
  if (response.status >= 400) {
    throw new Error(response);
  }
  return response.data;
};
