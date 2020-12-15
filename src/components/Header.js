import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
  render() {
    return(
    <>
        <div className="bg-dark d-flex flex-column flex-md-row justify-content-center
         align-items-center text-center black-lives-matter">
         <span className="text-light mr-3 h4">Black Lives Matter.</span>
        <div className='text-white'>We Support the Equal Justice Initiative.</div></div>  
        <div className="header-container">
        <Navbar dark>
        <div className="container my-header">
            <NavbarBrand href="/"><i className="fa fa-delicious"></i> DeLiCiOuS</NavbarBrand>
        </div>
        </Navbar>
        </div>
        <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-9">
                       <h1 className='delicious'>Delicious</h1>
                       <p>Our values include providing fair wages for workers, giving back to the communities we work with, and serving<span className="text-success mr-3 h4"> fresh</span> and<span className="text-primary mr-3 h4"> delicious</span>food.</p>
                   </div>
                   <div className="col-12 col-sm-3">
                       <div className="logo">
                           <img src="images/logo.png" alt="logo" className='img-fluid'/>
                       </div>
                   </div>
               </div>
           </div>
        </Jumbotron>
    </>
    );
  }
}

export default Header;