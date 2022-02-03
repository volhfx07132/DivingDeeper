import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button/Button";
import classes from "./AddUser.module.css";
import ErrorModle from "../UI/ErrorModle";
import Wrapper from "../Helpers/Wrapper"

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const nameRef = nameInputRef.current.value;
    const ageRef = ageInputRef.current.value;
    if (nameRef.trim().length === 0 || ageRef.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (ageRef < 1 || ageRef > 120) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (age > 0 and age <= 120).',
      });
      return;
    }
    props.onAddUser(nameRef, ageRef);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModle
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
