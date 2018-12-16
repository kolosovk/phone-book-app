import React, { Component } from "react";
import Modal from "./components/modal";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./reducers";
import List from "./containers/list.js";

const store = createStore(allReducers);

class App extends Component {
  // state = {
  //   showModal: false
  // };

  // toggleModal = () => {
  //   this.setState({ showModal: !this.state.showModal });
  //   console.log(this.state.showModal);
  // };

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          {/* <button className="addContactModal" onClick={this.toggleModal}>
            Add new contact
          </button> */}
          <List />
          {/* <Modal
            toggleModal={this.toggleModal}
            showModal={this.state.showModal}
          /> */}
        </div>
      </Provider>
    );
  }
}

export default App;
