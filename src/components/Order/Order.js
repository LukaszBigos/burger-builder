import React from 'react';
import classes from './Order.css';

const order = () => {
  return (
    <div className={classes.Order}>
      <p>Ingredients: Salad (2) </p>
      <p>Price: <strong>4.50 USD</strong></p>
    </div>
  );
}

export default order;