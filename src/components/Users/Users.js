import React, { useState } from 'react';

import UsersList from './UsersList';
import Card from '../UI/Card';
import UsersFilter from './UsersFilter';
import './Users.css';


const Users = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredUsers = props.items.filter((User) => {
    return User.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='Users'>
        <UsersFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        
        <UsersList items={filteredUsers} />
      </Card>
    </div>
  );
};

export default Users;
