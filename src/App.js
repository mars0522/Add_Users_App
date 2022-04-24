import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [userList, setUserList] = useState([]);
  const getUserDetails = (userDetail) => {
    setUserList(prev => {
      userDetail.id = uuidv4();
      return [userDetail,...prev]
    })
  }
  return (
    <div>
      <AddUser getUserDetails={getUserDetails}/>
      <UsersList users={userList }/>
    </div>
  );
}

export default App;
