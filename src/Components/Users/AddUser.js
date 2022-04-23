import React from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
function AddUser() {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">User Name</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age(Years)</label>
        <input id="age" type="number" />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default AddUser;
