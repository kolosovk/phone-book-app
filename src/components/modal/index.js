import React from "react";

export const Modal = ({
  inputPhone,
  inputName,
  inputCompany,
  inputImage,
  showModal,
  toggleModal
}) => (
  <div className={`createContact ${showModal ? "open" : ""}`}>
    <div className="wrapper">
      <button className="closeModal" onClick={toggleModal}>
        +
      </button>
      <h2>Add new contact</h2>
      <input
        type="tel"
        name="inputPhone"
        placeholder="Phone number"
        value={inputPhone}
      />
      <input
        type="text"
        name="inputName"
        placeholder="Name"
        value={inputName}
      />
      <input
        type="text"
        name="inputCompany"
        placeholder="Company"
        value={inputCompany}
      />
      <input
        type="text"
        name="inputImage"
        placeholder="Url for photo"
        value={inputImage}
      />
      <button>Add to phone book</button>
    </div>
  </div>
);

export default Modal;
