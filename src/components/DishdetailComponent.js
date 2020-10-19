import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';




function RenderDish({ dish }) {

    if (dish != null) {
        return (

            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>

        )
    }

    else {
        return (
            <div></div>
        )
    }
}


function RenderComments({ comments }) {

    if (comments != null) {
        return (
            <div>
                {
                    comments.map(comment => {

                        return (


                            <ul className="list-unstyled">
                                <li>{comment.comment}</li>
                                <p>-- {comment.author} , {comment.date.substring(0, 10)}</p>
                            </ul>

                        )
                    })
                }

            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}



const Dishdetail = ({ dish }) => {
    if (dish != null) {
        return (
            <div className="container">

                <div className="row">
                    <div className="col-12 col-md-5">
                        <RenderDish dish={dish} />

                    </div>
                    <div className=" col-12 col-md-5">
                        <h4>Comments</h4>
                        <RenderComments comments={dish.comments} />
                    </div>

                </div>
            </div>
        );
    }
    else {
        return <div></div>
    }
}


export default Dishdetail;
