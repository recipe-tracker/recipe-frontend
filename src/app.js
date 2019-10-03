import React from 'react';

import Auth from './components/auth/auth';
import Login from './components/auth/login';
import LoginProvider from './components/auth/context';
/**
 * shown if you have read permissions 
 * @param  {} <Authcapability="read"><span>Read</span></Auth>
 */
const Read = props => {
  return (
    <Auth capability="read">
      <span>Read</span>
    </Auth>
  );
};
/**
 * Shown if you have update permissions
 * @param  {} <Authcapability="update"><span>Update</span></Auth>
 */
const Update = props => {
  return (
    <Auth capability="update">
      <span>Update</span>
    </Auth>
  );
}
/**
 * shown if you have delete permisions
 * @param  {} <Authcapability="delete"><span>Delete</span></Auth>
 */
const Delete = props => {
  return (
    <Auth capability="delete">
      <span>Delete</span>
    </Auth>
  );
}
/**
 * shown if you have create permisions
 * @param  {} <Authcapability="create"><span>Delete</span></Auth>
 */
const Create = props => {
  return (
    <Auth capability="create">
      <span>Delete</span>
    </Auth>
  );
}

class App extends React.Component {
  render() {
    return (
      <LoginProvider>
        <Login />
        <hr />
        <Read />
        <Update />
        <Create />
        <Delete />
      </LoginProvider>
    );
  }
}

export default App;
