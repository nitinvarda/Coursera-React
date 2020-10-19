import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';





function RenderMenuItem({ dish, onClick }) {
    return (
        <Card onClick={() => onClick(dish.id)}>

            <CardImg width="100%" object src={dish.image} alt={dish.name} />

            <CardImgOverlay body className="ml-5">
                <CardTitle >{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardImgOverlay>

        </Card>
    );

}

const Menu = ({ dishes, onClick }) => {
    return (
        <div className="container">
            <div className="row">

                {dishes.map(dish => (
                    <div key={dish.id} className="col-12 col-md-5 mt-5">
                        <RenderMenuItem dish={dish} onClick={onClick} />

                    </div>

                ))}
            </div>
        </div>
    )

}

export default Menu
