import React, { useState } from 'react';

import './UserForm.css';

const UserForm = (props) => {debugger;
  const [enteredTitle, setEnteredTitle] = useState('');
  //const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
   
  };

  // const amountChangeHandler = (event) => {
  //   setEnteredAmount(event.target.value);
   
  // };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const UsersData = {
      title: enteredTitle,
      // amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveUsersData(UsersData);
    setEnteredTitle('');
    // setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-Users__controls'>
        <div className='new-Users__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        
        <div className='new-Users__control'>
          <label>Date</label>
          <input
            type='date'
            min='2020-01-01'
            max='2023-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-Users__actions'>
        <button type='submit'>Add User</button>
      </div>
    </form>
  );
};

export default UserForm;
