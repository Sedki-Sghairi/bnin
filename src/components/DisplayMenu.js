import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


export default class DisplayMenu extends Component {
    constructor(props){
        super(props)
        this.state = {
            dish : null
        }
        
    }
    showDish(yummy) {
        this.setState({
            dish : yummy
        })
    }
    render() {
        const allMenu = this.props.menu.map((dish) =>{
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card 
                  onClick={() => this.showDish(dish)}>
                  <CardImg width="100%" src={dish.img} alt={dish.title} />
                  <CardImgOverlay>
                      <CardTitle className="text-white">{dish.title}</CardTitle>
                  </CardImgOverlay>
                </Card>
                </div>
            )
        })
        return (
          <div className="container">
              <div className="row">
                  {allMenu}
              </div>
          </div>
        )
    }
}
