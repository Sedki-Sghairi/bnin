import './App.css';
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Menu } from './menu'
import DisplayMenu from './components/DisplayMenu';
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      menu : Menu
    }
  }
  render() {
    return (
      <>
        <div className="bg-dark d-flex flex-column flex-md-row justify-content-center
         align-items-center text-center black-lives-matter">
         <span className="text-light mr-3 h4">Black Lives Matter.</span>
         <div className='text-white'>We Support the Equal Justice Initiative.</div></div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">BNIN</NavbarBrand>
          </div>
        </Navbar>
        <DisplayMenu menu = {this.state.menu} />
      </>
    );
  }
}
export default App;
