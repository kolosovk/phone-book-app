import React, { Component } from "react";
import Modal from "./components/modal";

class App extends Component {
  state = {
    showModal: false
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
    console.log(this.state.showModal);
  };

  render() {
    return (
      <div className="App">
        <button className="addContactModal" onClick={this.toggleModal}>
          Add new contact
        </button>
        <Modal
          toggleModal={this.toggleModal}
          showModal={this.state.showModal}
        />
      </div>
    );
  }
}

export default App;
