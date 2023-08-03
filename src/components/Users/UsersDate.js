import React from 'react';

import './UsersDate.css';

const UsersDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className='Users-date'>
      <div className='Users-date__month'>{month}</div>
      <div className='Users-date__year'>{year}</div>
      <div className='Users-date__day'>{day}</div>
    </div>
  );
};

export default UsersDate;
