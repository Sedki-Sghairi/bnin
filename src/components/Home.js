import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody, CardImg, CardText, CardTitle, UncontrolledCarousel } from 'reactstrap';
import { Menu } from '../menu'

const items = [
    {
      src: 'images/1.jpg',
      altText: 'Slide 1',
      caption: 'We take our customers feedback very seriously, and we only offer what they label "delicious"',
      header: 'Delicious Is Not just Our Brand Name',
      key: '1'
    },
    {
      src: 'images/2.jpg',
      altText: 'All Our Food is made by  Fresh Local Ingredients',
      caption: 'All Our Food is made by  Fresh Local Ingredients',
      header: 'We support our local community',
      key: '2'
    },
    {
      src: 'images/3.jpg',
      caption: 'Give yourself a treat by trying our signature breakfast',
      header: 'Our Chef Special',
      key: '3'
    }
  ];
  
export default class Home extends Component{
 
    constructor() {
      super()
      this.state = {
        menu: Menu
      }
    }
    render(){
    const ShowFeatured = (props) => {
      return (
        <div className="container">
          <div className="row">
          {props.dish.map((dish) => {
            return (
              <div className="col-12 col-md-4 mt-1 neg-mar" key={dish.id}>
              <Link to={`/menu/${dish.id}`}>
                <Card>
                  <CardImg top src={dish.img} alt={dish.title} />
                  <CardBody>
                    <CardTitle className='text-center card-title'>{dish.title}</CardTitle>
                  </CardBody>
                </Card>
              </Link>
              </div>
            );
          })}
          </div>
        </div>
      );
    };
    return (
      <div className="container-fluid">
        <div className="d-none d-md-block">
        <ShowFeatured dish={this.state.menu.filter((meal) => meal.featured === true)} />
        </div>
        <UncontrolledCarousel items={items} />
      </div>
    );
  }
  }


