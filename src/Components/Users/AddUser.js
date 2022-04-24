import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
function AddUser(props) {
  const [user, setuser] = useState("");
  const [age, setage] = useState("");
  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    if (user.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "An Error Occured !",
        message: "Please Enter valid Name and Age...",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "An Erroe Occured !",
        message: "Please Enter a Valid age...",
      });
      return;
    }
    const userDetail = {
      name: user,
      age: age,
    };
    props.getUserDetails(userDetail);
    setage("");
    setuser("");
  };

  const userCollector = (event) => {
    setuser(event.target.value);
  };

  const ageCollector = (event) => {
    setage(event.target.value);
  };

    const errorHandler = () => {
    //   console.log("Error Handler Executed")
    setError(null);
  };
  return (
    // <React.Fragment> is just a wrapper empty component which is used to fulfill React's/JSX's requirement
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          errorHandler={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            value={user}
            onChange={userCollector}
          />
          <label htmlFor="age">Age(Years)</label>
          <input id="age" type="number" value={age} onChange={ageCollector} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
}

export default AddUser;
