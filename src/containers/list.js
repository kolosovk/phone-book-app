import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "../components/modal";

class List extends Component {
  state = {
    showModal: false
  };

  addContact() {
    this.props.onAddContact({
      phone: this.phoneInput.value,
      name: this.nameInput.value,
      company: this.companyInput.value,
      email: this.emailInput.value,
      photo: this.photoInput.value
    });
    this.phoneInput.value = "";
    this.nameInput.value = "";
    this.companyInput.value = "";
    this.emailInput.value = "";
    this.photoInput.value = "";
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  findContact() {
    console.log(this.searchInput.value);
    this.props.onFindContact(this.searchInput.value);
  }

  render() {
    return (
      <div className="List">
        {/* <button className="addContactModal" onClick={this.toggleModal}>
          Add new contact
        </button> */}
        <div className="formToNew">
          <input
            type="text"
            ref={input => {
              this.phoneInput = input;
            }}
            className="formToNewInput"
            placeholder="Phone number"
          />
          <input
            type="text"
            ref={input => {
              this.nameInput = input;
            }}
            className="formToNewInput"
            placeholder="Name"
          />
          <input
            type="text"
            ref={input => {
              this.companyInput = input;
            }}
            className="formToNewInput"
            placeholder="Company"
          />
          <input
            type="text"
            ref={input => {
              this.emailInput = input;
            }}
            className="formToNewInput"
            placeholder="E-mail"
          />
          <input
            type="text"
            ref={input => {
              this.photoInput = input;
            }}
            className="formToNewInput"
            placeholder="Url for photo"
          />
          <button
            className="addContactModal"
            onClick={this.addContact.bind(this)}
          >
            Add new contact
          </button>
        </div>
        <div className="formToSearch">
          <input
            type="text"
            className="formToSearchInput"
            ref={input => {
              this.searchInput = input;
            }}
            placeholder="Search"
          />
          <button
            onClick={this.findContact.bind(this)}
            className="formToSearchButton"
          >
            Find contact
          </button>
        </div>
        {this.props.contacts.map(phone => (
          <ul className="singleContact" key={phone}>
            <li className="avatarPlaceholder">
              <img src={phone.photo} className="avatar" />
            </li>
            <li>Phone number: {phone.phone}</li>
            <li>Name: {phone.name}</li>
            <li>Company: {phone.company}</li>
            <li>E-mail: {phone.email}</li>
          </ul>
        ))}
        <Modal
          toggleModal={this.toggleModal}
          showModal={this.state.showModal}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    contacts: state.contacts.filter(contact =>
      contact.name.includes(state.filterContacts)
    )
  }),
  dispatch => ({
    onAddContact: contact => {
      dispatch({ type: "ADD_NEW_CONTACT", payload: contact });
    },
    onFindContact: item => {
      dispatch({ type: "FIND_CONTACT", payload: item });
    }
  })
)(List);
