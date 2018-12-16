import React from "react";

export const Modal = ({ showModal, toggleModal, addContact }) => (
  <div className={`createContact ${showModal ? "open" : ""}`}>
    <div className="wrapper">
      <button className="closeModal" onClick={toggleModal}>
        +
      </button>
      <h2>Add new contact</h2>
      <input type="tel" name="inputPhone" placeholder="Phone number" />
      <input type="text" name="inputName" placeholder="Name" />
      <input type="text" name="inputCompany" placeholder="Company" />
      <input type="text" name="inputImage" placeholder="Url for photo" />
      <button onClick={addContact}>Add to phone book</button>
    </div>
  </div>
);

export default Modal;
