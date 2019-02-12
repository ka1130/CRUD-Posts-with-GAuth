import {
  CREATE_POST,
  EDIT_POST,
  DELETE_POST,
  FETCH_POSTS_SUCCESS
} from "actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return [...action.payload];
    case CREATE_POST:
      return [...state, action.payload];
    case EDIT_POST:
      return [...state, action.payload];
    case DELETE_POST:
      return [...state].filter(elem => elem.id !== action.payload);
    default:
      return state;
  }
}
