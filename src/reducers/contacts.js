const initialState = [
  {
    phone: 1,
    name: "Vasya",
    company: "ZP",
    email: "ssdasd@gmail.com",
    photo: ""
  },
  {
    phone: 2,
    name: "Kolya",
    company: "Lvov",
    email: "asdwq3@gmail.com",
    photo: ""
  },
  {
    phone: 3,
    name: "Petya",
    company: "Kiev",
    email: "jtyynn@gmail.com",
    photo: ""
  }
];

export default function phonebook(state = initialState, action) {
  if (action.type === "ADD_NEW_CONTACT") {
    return [...state, action.payload];
  }
  return state;
}
