import React, { Component } from 'react';
import { Menu } from '../menu'
import DisplayMenu from './DisplayMenu';
import Header from './Header';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Error from './Error';


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
      <Header/>
      <Switch>
        <Route path='/home' component={Home}/>
        <Route exact path='/menu' component={() =>
        <DisplayMenu menu = {this.state.menu} />}/>
        <Route path='/error' component={() => <Error/>}/>
        <Redirect to='/error'/>
      </Switch>
      </>
    );
  }
}
export default Main;
