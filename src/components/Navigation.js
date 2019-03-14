import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home'
import About from './About'
import Team from './Team'

class Navigation extends Component {
    render() {
      return (
        <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Sngular</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/team">Team</Link>
            </li>
          </ul>
        </div>
      </nav>
            
        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/team" component={Team} />
      </div>
      </Router>
      );
    }
  }

export default Navigation;
  
