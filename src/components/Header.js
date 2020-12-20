import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Form } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import React, { Component } from 'react'
import { FaHamburger } from 'react-icons/fa'
import { IoIosRestaurant } from 'react-icons/io'
import { BiFoodMenu } from "react-icons/bi";
import { GoHome } from "react-icons/go";

export default class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
                <div className="header-container">
                <div className="bg-dark d-flex flex-column flex-md-row justify-content-center
                align-items-center text-center black-lives-matter">
                <span className="text-light mr-3 h4">Black Lives Matter.</span>
                <div className='text-white'>We Support the Equal Justice Initiative.</div></div> 
                <Navbar dark expand="md">
                    <div className="container my-header">
                       
                        <button className="navbar-toggler" type="button" data-toggle="collapse" onClick={this.toggleNav}
                         aria-label="Toggle navigation">
                        <FaHamburger/>
                        </button>
                        <NavbarBrand href="/"><i className="fa fa-delicious mr-auto"> DeLiCiOuS</i> </NavbarBrand>                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/'><GoHome/> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'><BiFoodMenu/> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/book'><IoIosRestaurant/> Book a Table</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-10">
                            <h1 className='delicious'>Delicious</h1>
                            <p>Our values include providing fair wages for workers, giving back to the communities we work with, and serving<span className="text-success mr-3 h4"> fresh</span> and<span className="text-primary mr-3 h4"> delicious</span>food.</p>
                        </div>
                        <div className="col-12 col-sm-2">
                            <div className="logo">
                                <img src="/images/logo.png" alt="logo" className='img-fluid'/>
                            </div>
                        </div>
                    </div>
                </div>
                </Jumbotron>
            </div>
        );
    }
}
