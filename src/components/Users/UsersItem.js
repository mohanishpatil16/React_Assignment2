import React from 'react';

import UsersDate from './UsersDate';
import Card from '../UI/Card';
import './UsersItem.css';

const UsersItem = (props) => {
  return (
    <Card className='Users-item'>
      <UsersDate date={props.date} />
      <div className='Users-item__description'>
        <h2>{props.title}</h2>
        {/* <div className='Users-item__price'>${props.amount}</div> */}
      </div>
    </Card>
  );
}

export default UsersItem;
