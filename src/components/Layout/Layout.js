import React from 'react';

import BurgerAux from '../../hoc/BurgerAux';
import classes from './Layout.css';

const layout = ( props ) => (
    <BurgerAux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </BurgerAux>
);

export default layout;