import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, 
    Breadcrumb,
    BreadcrumbItem} from 'reactstrap';


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
                        <CardTitle className="text-white">{dish.title}</CardTitle>
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
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active> Menu</BreadcrumbItem>
                </Breadcrumb>
                </div>
                <h1 className="text-primary text-center mb-3"> Our Menu Selection</h1>
                <div className="row">
                  {allMenu}
                </div>
          </div>
        )
    }
}
