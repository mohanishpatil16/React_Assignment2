import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Users from './components/Users/Users';
import NewUser from './components/NewUser/NewUser';

const DUMMY_USERS = [
  {
    id: 'e1',
    title: 'Mohanish',
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e3',
    title: 'Omkar',
    date: new Date(2022, 2, 28),
  },
  {
    id: 'e4',
    title: 'Abhijit',
    date: new Date(2023, 5, 12),
  },
];

const App = () => {debugger;
  const [User, setUsers] = useState(DUMMY_USERS);

  const addUsersHandler = (User) => {
    setUsers((prevUsers) => {
      return [User, ...prevUsers];
    });
  };
  
  return (
    <div>
      <NewUser onAddUser={addUsersHandler} />
      <Users items={User} />
    </div>
  );
}

export default App;
