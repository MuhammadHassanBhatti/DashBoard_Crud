import React from "react";
import UpdateUser from "./UpdateUser";
import { useState } from "react";

const UserDetails = ({ users, deleteUser, updateUser }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleDelete = (userId) => {
    deleteUser(userId);
  };

  const handleUpdate = (user) => {
    setSelectedUser(user);
  };

  return (
    <>
      <div className="container my-3">
        {users.map((user) => (
          <div key={user.id} className="mb-3">
            <div className="mb-1 row">
              <label htmlFor="FirstName" className="col-sm-2 col-form-label">
                First Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  readOnly
                  className="form-control-plaintext"
                  id="FirstName"
                  value={user.firstName}
                />
              </div>
            </div>

            <div className="mb-1 row">
              <label htmlFor="LastName" className="col-sm-2 col-form-label">
                Last Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  readOnly
                  className="form-control-plaintext"
                  id="LastName"
                  value={user.lastName}
                />
              </div>
            </div>

            <div className="mb-1 row">
              <label htmlFor="Email" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  readOnly
                  className="form-control-plaintext"
                  id="Email"
                  value={user.email}
                />
              </div>
            </div>

            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => handleUpdate(user)}
            >
              Edit
            </button>

            <button
              type="button"
              className="btn btn-primary mx-5"
              onClick={() => handleDelete(user.id)}
            >
              Delete
            </button>
          </div>
        ))}
        {<UpdateUser user={selectedUser} updateUser={updateUser} />}
      </div>
    </>
  );
};

export default UserDetails;
