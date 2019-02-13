import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3001"
});

// this file can be deleted after wiring up all the CRUD sagas
