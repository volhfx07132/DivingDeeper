import React, { useState, Fragment } from 'react';
import "./App.css"
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';



function App() {
  const [usersList, setUsersList] = useState([{name: "Jone Geadtr", age: 30}]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
