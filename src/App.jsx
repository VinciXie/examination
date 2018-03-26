import React, { Component } from 'react';
import { hot } from 'react-hot-loader'


import SidebarLeft from './components/SidebarLeft'

import './app.css'


class App extends Component {

  render() {
    return (
      <div style={{height: '100%'}}>
        <SidebarLeft />

      </div>
    );
  }

}

export default hot(module)(App);
