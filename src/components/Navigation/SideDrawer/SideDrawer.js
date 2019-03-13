import React from 'react';
import BurgerLogo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import BurgerAux from '../../../hoc/BurgerAux/BurgerAux';

import classes from './SideDrawer.css';


const sideDrawer = (props) => {

  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <BurgerAux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <BurgerLogo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </BurgerAux>

  )

}

export default sideDrawer;