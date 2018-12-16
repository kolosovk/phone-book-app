import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./reducers";
import List from "./containers/list.js";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <List />
        </div>
      </Provider>
    );
  }
}

export default App;
