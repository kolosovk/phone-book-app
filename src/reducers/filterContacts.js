const initialState = "";

export default function filterContacts(state = initialState, action) {
  if (action.type === "FIND_CONTACT") {
    return action.payload;
  }
  return state;
}
