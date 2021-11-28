import { createStore, applyMiddleware, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

import { authReducer } from "./reducers/auth.reducer";
import { getContactsListReducer } from "./reducers/contactsList.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  contactsList: getContactsListReducer,
});

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
