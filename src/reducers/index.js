import { combineReducers } from "redux";
import contacts from "./contacts.js";
import filterContacts from "./filterContacts";

export default combineReducers({
  contacts,
  filterContacts
});
