import React, { Component } from "react";
import { connect } from "react-redux";

class List extends Component {
  state = {
    showMenu: false
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
    this.setState({ showMenu: !this.state.showMenu });
  }

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  findContact() {
    console.log(this.searchInput.value);
    this.props.onFindContact(this.searchInput.value);
  }

  delContact = id => {
    console.log(id);
    this.props.onDeleteContact(id);
  };

  changeContact = id => {
    let ind = this.props.contacts.indexOf(id);
    console.log(ind);

    let phone = document.querySelector(`#${"tel" + id.phone}`);
    let name = document.querySelector(`#${id.name}`);
    // let company = document.querySelector(`#${id.company}`);
    let email = document.querySelector(`#${id.email.substring(0, 3)}`);
    // console.log(company.value);
    // let photo = document.querySelector(`${"photo" + Math.random()}`);
    this.props.onChangeContact([
      { ind },
      {
        phone: phone.value,
        name: name.value,
        company: "",
        email: email.value,
        photo: ""
      }
    ]);
  };

  sendForm = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="List">
        <button
          className={`addContact ${this.state.showMenu ? "close" : ""}`}
          onClick={this.toggleMenu}
        >
          Click to add new contact
        </button>
        <form
          className={`formToNew ${this.state.showMenu ? "open" : ""}`}
          onSubmit={this.sendForm}
        >
          <input
            type="tel"
            ref={input => {
              this.phoneInput = input;
            }}
            className="formToNewInput"
            placeholder="Phone number"
            name="Phone_number"
          />
          <input
            type="text"
            ref={input => {
              this.nameInput = input;
            }}
            className="formToNewInput"
            placeholder="Name"
            name="Name"
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
            type="email"
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
            className="formToNewButton"
            onClick={this.addContact.bind(this)}
          >
            Add new contact
          </button>
        </form>
        <div className="formToSearch">
          <input
            type="text"
            className="formToSearchInput"
            ref={input => {
              this.searchInput = input;
            }}
            placeholder="Search by name"
          />
          <button
            onClick={this.findContact.bind(this)}
            className="formToSearchButton"
          >
            Find contact
          </button>
        </div>
        {this.props.contacts.map(id => (
          <ul className="singleContact" key={id.phone}>
            <li className="avatarPlaceholder">
              <img
                src={`${id.photo ? id.photo : "http://i.pravatar.cc/300"}`}
                alt="contact avatar"
                className="avatar"
              />
            </li>
            <li className="singleString">
              <em>Phone number:</em> {id.phone}
            </li>
            <li className="singleString">
              <em>Name:</em> {id.name}
            </li>
            <li className="singleString">
              <em>Company:</em> {id.company}
            </li>
            <li className="singleString">
              <em>E-mail:</em> {id.email}
            </li>
            <button
              className="delButton"
              onClick={() => this.delContact(id.phone)}
            >
              Delete this contact
            </button>
            <input
              type="tel"
              id={`${"tel" + id.phone}`}
              placeholder="Phone number"
            />
            <input type="text" id={id.name} placeholder="Name" />
            <input
              type="text"
              id={id.company.replace(/\s/g, "")}
              placeholder="Company"
            />
            <input
              type="text"
              id={id.email.substring(0, 3)}
              placeholder="E-mail"
            />
            <input
              type="text"
              id={`${"photo" + Math.random()}`}
              placeholder="URL for photo"
            />
            <button onClick={() => this.changeContact(id)}>Change</button>
          </ul>
        ))}
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
    },
    onDeleteContact: contact => {
      dispatch({ type: "DELETE_CONTACT", payload: contact });
    },
    onChangeContact: contact => {
      dispatch({ type: "CHANGE_CONTACT", payload: contact });
    }
  })
)(List);
