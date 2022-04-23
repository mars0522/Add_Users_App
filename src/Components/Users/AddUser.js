import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
function AddUser() {
  const [user, setuser] = useState("");
  const [age, setage] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
      if (user.trim().length === 0 || age.trim().length === 0) {
          return;
      }
      if (+age < 1) {
          return;
      }
      console.log(user, age);
      setage('');
      setuser('');
  };

  const userCollector = (event) => {
    setuser(event.target.value);
  };

  const ageCollector = (event) => {
    setage(event.target.value);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">User Name</label>
        <input id="username" type="text" value={user} onChange={userCollector} />
        <label htmlFor="age">Age(Years)</label>
              <input id="age" type="number" value={age } onChange={ageCollector} />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
