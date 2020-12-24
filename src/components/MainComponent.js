import React, { Component } from 'react';
import DisplayMenu from './DisplayMenu';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Book from './Book';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import { Switch, Route, Redirect, withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
  return {
    menu: state.menu,
  }
}

class Main extends Component {
  constructor(props){
    super(props)

  }
  render() {
    const MealDetail = ({match:{params:{id}}}) => {
      
      const dish = this.props.menu.filter((meal) => {
        return (meal.id == id)
      })[0]
      return(
      <>
        <div className="row">
          <div className="container">
          <Breadcrumb>
                <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{dish.title}</BreadcrumbItem>
          </Breadcrumb>
          </div>
        </div>
        <Stagger in>
        <div className="row p-3">
          <div className="col-12 col-md-6">
            <div className="container">
            <Fade in>
            <h1 className='text-center title'>{dish.title}</h1>
              <div className="text-left desc">
                {dish.desc}
              </div>
              <br/>
              <h4 className='text-center price'>Price: {dish.price}</h4>
            </Fade>
            </div>
          </div>
          <div className="col-12 col-md-6">
          <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <div className="container">
            <img className='img-fluid ' src={dish.img} alt={dish.title} />
            </div>
          </FadeTransform>
          </div>
      </div>
      </Stagger>
      </>
      )
    }
    return (
      <>
      <Header/>
      <TransitionGroup>
        <CSSTransition key={this.props.location.key} classNames="page" timeout={400}>
          <Switch>
            <Route exact path='/book' component={ Book }/>
            <Route exact path='/menu' component={() =>
            <DisplayMenu menu = {this.props.menu} />}/>
            <Route path='/menu/:id' component={MealDetail}/>
            <Route path='/' component={Home}/>
            <Redirect to='/'/>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer/>
      </>
    );
  }
}
export default withRouter(connect(mapStateToProps)(Main));
