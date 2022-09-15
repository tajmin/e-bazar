import { createAction } from "../../Utility/Reducer/reducer.utility";
import { USER_ACTION_TYPES } from "./user.actiontypes";

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
