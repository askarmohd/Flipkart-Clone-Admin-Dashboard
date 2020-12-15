import React from "react";
import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";
import {NavLink,Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import  {signout} from '../../actions';
function Header() {
  const auth = useSelector(state=>state.auth);
  const dispatch = useDispatch();

  const logout = () =>{
    dispatch(signout());
  }
  const renderNonLoggedInLinks = () =>{
    return (
      <Nav>
        <li className="nav-item">
          <NavLink to="/signin" className="nav-link">
            Signin
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/signup" className="nav-link">
            Signup
          </NavLink>
        </li>
      </Nav>
    );
  }

  const renderLoggedInLinks = () =>{
    return (
       <Nav>
        <li className="nav-item">
          <span className="nav-link" onClick={logout} style={{cursor:"pointer"}}>
            Signout
          </span>
        </li>
        </Nav>
    )
  }
  return (
    <Navbar bg="dark" fixed="top" expand="lg" variant="dark" style={{zIndex:1}}>
      <Container fluid>
        {/*<Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>*/}
        <Link to="/" className="navbar-brand">Admin Dashboard</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/*} <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>*/}
          </Nav>
          {auth.authenticate ? renderLoggedInLinks(): renderNonLoggedInLinks()}
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
