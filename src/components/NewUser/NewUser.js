import React from 'react';

import UserForm from './UserForm';
import './NewUser.css';

const NewUser = (props) => {debugger;
  const saveUsersDataHandler = (enteredUsersData) => {
    const UsersData = {
      ...enteredUsersData,
      id: Math.random().toString()
    };
    props.onAddUser(UsersData);
  };

  return (
    <div className='new-Users'>
      <UserForm onSaveUsersData={saveUsersDataHandler} />
    </div>
  );
};

export default NewUser;
