//conditionally rendered component wrapper
//Context is going to be sending the data in here

import React from 'react';
import PropTypes from 'prop-types';
import { LoginContext } from './context';

import If from '../if';

class Auth extends React.Component {
  static contextType = LoginContext;

  // This render function will let people render components based on their capabilities
  render() {
    let okToRender = false;

    try {
      okToRender = this.context.loggedIn
        && (this.props.capability
          ? this.context.user.capabilities.includes(this.props.capabilities)
          :true);
    }catch (e) {
      console.warn('Not Authorized');
    }

    return (
      <If condition={okToRender}>
        <div>{this.props.children}</div>
      </If>
    );
  }
}
