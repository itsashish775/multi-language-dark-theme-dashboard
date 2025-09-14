import { combineReducers } from "@reduxjs/toolkit";

// ✅ Import slices
import { authReducer } from "../reducers/auth/auth.slice";

// ✅ Import APIs
import { authApi } from "../reducers/auth/auth.api";

// Collect all RTK Query APIs here
export const apis = [authApi];

const rootReducer = combineReducers({
  auth: authReducer,

  // Dynamically add API reducers
  ...apis.reduce(
    (acc, api) => ({ ...acc, [api.reducerPath]: api.reducer }),
    {}
  ),
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
