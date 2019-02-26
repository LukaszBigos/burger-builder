import React, { Component } from 'react';

import ReactAux from '../../hoc/ReactAux';
import Burger from './../../components/Burger/Burger';

class BurgerBuilder extends Component {
  render() {
    return (
      <ReactAux>
        < Burger/>
        <div>Build Control</div>
      </ReactAux>
    );
  }


};

export default BurgerBuilder;