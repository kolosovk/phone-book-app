const initialState = [
  {
    phone: 12345698,
    name: "Vasiliy",
    company: "Test Company",
    email: "ssdasd@gmail.com",
    photo: ""
  }
];

export default function phonebook(state = initialState, action) {
  if (action.type === "ADD_NEW_CONTACT") {
    return [...state, action.payload];
  } else if (action.type === "DELETE_CONTACT") {
    return state.filter(({ phone }) => phone !== action.payload);
  }
  return state;
}
