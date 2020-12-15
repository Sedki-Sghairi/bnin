import React, { Component } from 'react';
import { Menu } from '../menu'
import DisplayMenu from './DisplayMenu';
import Header from './Header';
class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      menu : Menu
    }
  }
  render() {
    return (
      <>
      <Header></Header>  
      <DisplayMenu menu = {this.state.menu} />
      </>
    );
  }
}
export default Main;
