import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from './components/Form.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-6 p-3 mt-5 container-login"><Login /></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
