import React from 'react';

import BurgerAux from '../../hoc/BurgerAux';
import Toolbar from '../Navigation/Toolbar/Toolbar';

import classes from './Layout.css';


const layout = ( props ) => (
    <BurgerAux>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </BurgerAux>
);

export default layout;