import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import Home from './Home'
import About from './About'
import Team from './Team'

class Navigation extends Component {
    render() {
      return (
        <Router>
      <div>

      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Sngular</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/team">Team</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>;
            
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
  
