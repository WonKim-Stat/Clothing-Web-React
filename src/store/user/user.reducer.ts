import { USER_ACTION_TYPES } from "./user.types";
import { UserState } from "./user.types";
import { AnyAction } from "redux";
import {
  signInSuccess,
  signOutSuccess,
  signUpFailed,
  signOutFailed,
  signInFailed,
} from "./user.action";

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};
export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload };
  }
  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  }
  if (
    signUpFailed.match(action) ||
    signOutFailed.match(action) ||
    signInFailed.match(action)
  ) {
    return { ...state, error: action.payload };
  }
  return state;
};
