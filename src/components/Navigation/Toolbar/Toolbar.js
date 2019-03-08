import React from 'react';
import BurgerLogo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import classes from './Toolbar.css';

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div>Menu</div>
      <div className={classes.Logo}>
      <BurgerLogo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </header>
  )
}

export default toolbar;