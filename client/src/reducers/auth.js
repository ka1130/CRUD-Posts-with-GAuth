import { SIGN_IN, SIGN_OUT, SET_GAUTH } from "actions/types";

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
  GoogleAuth: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_GAUTH:
      console.log("action.payload", action.payload);
      return { ...state, GoogleAuth: action.payload };
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
