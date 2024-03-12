import React from 'react'
import './App.css';
import { useState} from 'react'

import Navbar from './components/Navbar';
import UserForm from './components/UserForm';
import UserDetails from './components/UserDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
 

const [users, setUsers] = useState([]);

// Function to add a new user to the state
const addUser = (user) => {
  setUsers((prevUsers) => [...prevUsers, user]);
};


// Function to delete a user from the state
const deleteUser = (userId) => {
  setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
};
  // Function to update user information in the state
  const updateUser = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  return (
    
<>
   <Navbar title="User Dashboard"/> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <UserForm addUser={addUser}/>} />
        <Route path="user-details" element={<UserDetails users={users} deleteUser={deleteUser} updateUser={updateUser} />} />
      </Routes>
    </BrowserRouter>


</>
  );
}

export default App;
