import React from 'react';
import ReactDOM from 'react-dom';

import App from "../src/app";

const Main = () => {
  render() {
    return <h1>My React App!!</h1>;

  };
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
