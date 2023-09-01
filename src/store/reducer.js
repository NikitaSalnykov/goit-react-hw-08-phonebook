import { combineReducers } from "redux";
import { authReducer } from "./auth/authSlice";
import { contactsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./filter/filterSlice";

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: authReducer
})

