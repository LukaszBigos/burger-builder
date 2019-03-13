import React from 'react';
import BurgerLogo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToogle from '../SideDrawer/DrawerToogle/DrawerToogle';

import classes from './Toolbar.css';

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToogle clicked={props.drawerToogleClicked} />
      <div className={classes.Logo}>
      <BurgerLogo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  )
}

export default toolbar;