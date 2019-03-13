import React, { Component } from 'react';

import BurgerAux from '../BurgerAux/BurgerAux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css';


class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDraweClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState( (prevState) => {
           return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    render() {
        return (
            <BurgerAux>
                <Toolbar drawerToogleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDraweClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </BurgerAux >
        )
    }
}



export default Layout;