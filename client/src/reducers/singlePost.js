import { LOAD_SINGLE_POST_SUCCESS, LOAD_SINGLE_POST } from "actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case LOAD_SINGLE_POST_SUCCESS:
    case LOAD_SINGLE_POST: // delete this line after wiring up sagas
      return action.payload;
    default:
      return state;
  }
}
