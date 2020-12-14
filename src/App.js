import './App.css';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">BNIN</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">About</NavLink>
          </NavItem>
        </Nav>
        <NavbarText>
          Book a Table
        </NavbarText>
      </Collapse>
    </Navbar>
  </div>
  );
}

export default App;
