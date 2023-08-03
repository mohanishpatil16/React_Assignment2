import React from 'react';

import UsersItem from './UsersItem';
import './UsersList.css';

const UsersList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='Users-list__fallback'>no user found.</h2>;
  }

  return (
    <ul className='Users-list'>
      {props.items.map((Users) => (
        <UsersItem
          key={Users.id}
          title={Users.title}
         // amount={Users.amount}
          date={Users.date}
        />
      ))}
    </ul>
  );
};

export default UsersList;
