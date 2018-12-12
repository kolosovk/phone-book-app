import { combineReducers } from "redux";
import Contacts from "./contacts.js";

const allReducers = combineReducers({
  contact: Contacts
});

export default allReducers;
