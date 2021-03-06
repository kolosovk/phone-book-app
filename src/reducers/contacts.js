const initialState = [
  {
    phone: 12345698,
    name: "Vasiliy",
    company: "Company",
    email: "ssdasd@gmail.com",
    photo: ""
  },
  {
    phone: 66362624,
    name: "Ivan",
    company: "Company2",
    email: "asdsad@gmail.com",
    photo: ""
  },
  {
    phone: 7457878,
    name: "Denis",
    company: "Company3",
    email: "werwerewr@gmail.com",
    photo: ""
  },
  {
    phone: 3243113,
    name: "Pavel",
    company: "Company4",
    email: "fgasff@gmail.com",
    photo: ""
  }
];

export default function phonebook(state = initialState, action) {
  if (action.type === "ADD_NEW_CONTACT") {
    return [...state, action.payload];
  } else if (action.type === "DELETE_CONTACT") {
    return state.filter(({ phone }) => phone !== action.payload);
  } else if (action.type === "CHANGE_CONTACT") {
    return state
      .slice(0, action.payload[0].ind)
      .concat(action.payload[1])
      .concat(state.slice(action.payload[0].ind + 1));
  }
  return state;
}
