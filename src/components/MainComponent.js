import React, { Component } from 'react';
import { Menu } from '../menu'
import DisplayMenu from './DisplayMenu';
import Header from './Header';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Error from './Error';
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';
import Footer from './Footer';
import Book from './Book';


class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      menu : Menu
    }
  }
  render() {
    const MealDetail = ({match:{params:{id}}}) => {
      
      const dish = this.state.menu.filter((meal) => {
        return (meal.id == id)
      })[0]
      return(
        
        <div className="row">
          <div className="col-12 col-sm-6">
            <div className="container">
            <h1 className='text-center title'>{dish.title}</h1>
              <div className="text-left desc">
                {dish.desc}
              </div>
              <br/>
              <h4 className='text-center price'>Price: {dish.price}</h4>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="container">
            <img className='img-fluid' src={dish.img} alt={dish.title} />
            </div>
          </div>
   
      </div>
        
      )
    }
    return (
      <>
      <Header/>
      <Switch>
        <Route exact path='/book' component={ Book }/>
        <Route path='/home' component={Home}/>
        <Route exact path='/menu' component={() =>
        <DisplayMenu menu = {this.state.menu} />}/>
        <Route path='/menu/:id' component={MealDetail}/>
        {/* <Route path='/error' component={() => <Error/>}/> */}
        {/* <Redirect to='/error'/> */}
      </Switch>
      <Footer/>
      </>
    );
  }
}
export default Main;
