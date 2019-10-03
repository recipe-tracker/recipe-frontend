//auth context provider
// create methods and data required for authorization

import React from 'react';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';
// import proptypes for prop validation
const API = process.env.REACT_APP_API;

export const LoginContext = React.createContext();

const API = process.env.React

class LoginProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //  all the auth data we want to pass to childrenm
      loggedIn: false,
      token: null,
      user: {},
      login: this.login,
      logout: this.logout,
    };
  }

  // login signup and signin
  login = (username,password,type) => {
    let option = {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      header: new Headers ({
        "Authorization": `Basic ${btoa(`${username}:${password}`)}`
      })
    };

    if (type === signup) {
      options.body = JSON.stringify({username, password});
      options.headers = new Headers({
        'Content-Type': 'application/json',
      });
    }
    
    fetch(`${API}/${type}`,options)
    .then((response) => response.text())
    .then((token) => this.validateToken(token))
    .catch(console.error);
  };

  // logout
  logout = () => {
    this.setLoginState( false, null, {} );
  };


  // validate token
  validateToken = (token) => {
    try {
      const user = jwt.verify(token, process.env.REACT_APP_SECRET);
      console.log(user);
      this.setLoginState(true, token, user);
    } catch (e) {
      this.setLoginState(false, null, {});
      console.log('Token Validation Error', e);
    }
  }

  // state handling

  setLoginState = ( loggedIn, user, token) => {
    cookie.save('auth', token);
    this.setState({ token, loggedIn, user });
  };

  componentDidMount() {
    // when component is born validate tokens, set cookies if possible
    const qs = new URLSearchParams(window.location.search);
    const cookieToken = cookie.load('auth');
    const token = qs.get( 'token' ) || cookieToken || null;
    this.validateToken(cookieToken);
  }

  render() {
    return(
      <LoginContext.Provider value ={this.state}>
        {this.props.children}
      </LoginContext.Provider>
    )
  }
}

export default LoginProvider;