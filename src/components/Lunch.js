import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'

export default function Breakfast(props) {
    const menu = props.menu.filter((dish)=> dish.category === 'lunch')
    return (
         menu.map((dish) => {
            return(
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
    )
}
