import React from "react";
import { useState, useEffect } from "react";

export default function UpdateUser({ user, updateUser }) {
  // console.log(user);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

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
      alert("Please fill all inputs");
      return;
    }

    updateUser({
      ...user,
      firstName,
      lastName,
      email,
    });

    setFirstName("");
    setLastName("");
    setEmail("");
  };

  useEffect(() => {
    setFirstName(user?.firstName || "");
    setLastName(user?.lastName || "");
    setEmail(user?.email || "");
  }, [user]);

  return (
    <>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Update User
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
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
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={handleSubmit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
