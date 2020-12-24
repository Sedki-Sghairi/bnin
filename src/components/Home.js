import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody, CardImg, CardTitle, UncontrolledCarousel } from 'reactstrap';
import { Menu } from '../menu'
import { FaCocktail, FaWineGlassAlt, FaMugHot, FaBeer } from 'react-icons/fa';
import { FadeTransform } from 'react-animation-components';
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
  
const Title = ({ title }) => {
    return (
      <div className="section-title">
        <h4>{title}</h4>
        <div />
      </div>
    );
}

class Services extends Component {
	state = {
		drinks: [
			{
				icon: <FaCocktail />,
				title: 'our cocktails',
				info: 'lorem ipsum lecun sit alik constalis fab abeleik keif lacking asfwoj magine coutch'
			},
			{
				icon: <FaWineGlassAlt/>,
				title: 'Our Wine',
				info: 'lorem ipsum folar lecun sit alik constalis fab abeleik keif sido diug haick the mountain'
			},
			{
				icon: <FaMugHot />,
				title: 'Traditional Coffee',
				info: 'lorem ipsum folar lecun sit alik constalis fab abeleik keif lack aswak tunis'
			},
			{
				icon: <FaBeer />,
				title: 'Local beer',
				info: 'lorem ipsum folar lecun sit alik constalis fab abeleik keif lacking bainama dima labes'
			}
		]
	};
	render() {
		return (
			<section className="services">
				<Title title="Our Drinks" />
				<div className="services-center">
					{this.state.drinks.map((item, index) => {
						return (
							<article key={index} className="service">
								<span>{item.icon}</span>
								<h6>{item.title}</h6>
								<p>{item.info}</p>
							</article>
						);
					})}
				</div>
			</section>
		);
	}
}

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
              <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
              <Link to={`/menu/${dish.id}`}>
                <Card>
                  <CardImg top src={dish.img} alt={dish.title} />
                  <CardBody>
                    <CardTitle className='text-center card-title'>{dish.title}</CardTitle>
                  </CardBody>
                </Card>
              </Link>
              </FadeTransform>
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
        <Services/>
      </div>
    );
  }
  }


