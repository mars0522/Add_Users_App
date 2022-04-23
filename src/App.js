import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  const [userList, setUserList] = useState([]);
  const getUserDetails = (userDetail) => {
    setUserList(prev => {
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
