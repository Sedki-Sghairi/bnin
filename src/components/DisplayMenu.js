import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay,
    CardTitle, 
    Breadcrumb,
    BreadcrumbItem} from 'reactstrap';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';
import Shakes from './Shakes';



export default class DisplayMenu extends Component {
    constructor(props){
        super(props)
        this.state = {
            dish : null
        }
        
    }
    render() {
        const allMenu = this.props.menu.map((dish) =>{
            return (
                <div key={dish.id} className="col-12 col-md-4">
                <Link to={`/menu/${dish.id}`}>
                    <Card>
                        <CardImg width="100%" src={dish.img} alt={dish.title} />
                    <CardImgOverlay>
                        <CardTitle className="text-white bg-secondary text-center p-1 rounded">{dish.title}</CardTitle>
                    </CardImgOverlay>
                </Card>
                </Link>
                </div>
            )
        })
        return (
          <div className="container">
                <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active> Menu</BreadcrumbItem>
                </Breadcrumb>
                </div>
                <h1 className="text-primary text-center mb-3"> Our Menu Selection</h1>
                <div className="row">
                    <h1 className="col-12  handwritten text-center">Breakfast</h1>
                </div>
                <div className="row m-3">
                 <Breakfast menu={this.props.menu}/>
                </div>
                <div className="row">
                    <h1 className="col-12  handwritten text-center">Lunch</h1>
                </div>
                <div className="row m-3">
                 <Lunch menu={this.props.menu}/>
                </div>
                <div className="row">
                    <h1 className="col-12  handwritten text-center">Dinner</h1>
                </div>
                <div className="row m-3">
                 <Dinner menu={this.props.menu}/>
                </div>
                <div className="row">
                    <h1 className="col-12 handwritten text-center">Our Shakes</h1>
                </div>
                <div className="row m-3">
                 <Shakes menu={this.props.menu}/>
                </div>
            </div>
        )
    }
}
