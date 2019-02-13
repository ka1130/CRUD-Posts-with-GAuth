import { LOAD_SINGLE_POST_SUCCESS } from "actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case LOAD_SINGLE_POST_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
