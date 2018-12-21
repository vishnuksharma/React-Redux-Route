import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

const Header = props => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to='/'>Community Attendance</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} onClick={() => props.history.push('/')}>
          Attendance Form
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar> 
);

export default withRouter(Header);