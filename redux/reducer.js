import { combineReducers } from "redux";

import settingSlice from "./slices/settingSlice.js";
import userSlice from "./slices/userSlice.js";
import businessSlice from "./slices/businessSlice.js";

const rootReducer = combineReducers({
  setting: settingSlice,
  user: userSlice,
  business: businessSlice
});

export default rootReducer;