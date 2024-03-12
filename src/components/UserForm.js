import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserForm({ addUser }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === ""
    ) {
      alert("Please fill your all fields");
      return;
    }

    const user = {
      id: new Date().getTime(), // Unique ID (you may use a library for generating unique IDs)
      firstName,
      lastName,
      email,
    };

    // Add the user to the state using the addUser function
    addUser(user);

    // Reset the form
    setFirstName("");
    setLastName("");
    setEmail("");
    navigate("/user-details");
  };

  return (
    <>
      <div className="container my-5 w-50">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            value={firstName}
            onChange={handleFirstNameChange}
            placeholder="Enter your First Name"
          />
          <label for="floatingName">Enter your First Name</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingPassword"
            value={lastName}
            onChange={handleLastNameChange}
            placeholder="Enter yourLast Name"
          />
          <label for="floatingLastName">Enter your Last Name</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingPassword"
            value={email}
            onChange={handleEmailChange}
            placeholder="E-Mail"
          />
          <label for="floatingEmail">Enter your E-Mail</label>
        </div>

        <button
          type="button"
          class="btn btn-primary w-25"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
}
