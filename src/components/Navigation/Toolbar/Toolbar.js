import React from 'react';
import BurgerLogo from '../../Logo/Logo';

import classes from './Toolbar.css';

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div>Menu</div>
      <BurgerLogo />
      <nav>...</nav>
    </header>
  )
}

export default toolbar;