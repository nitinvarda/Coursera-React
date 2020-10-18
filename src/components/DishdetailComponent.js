import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

class DishdetailComponent extends Component {
    constructor(props) {
        super(props);

    }

    renderDish(dish) {

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


    renderComments(comments) {

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



    render() {
        if (this.props.dish != null) {
            return (
                <div className="container">

                    <div className="row">
                        <div className="col-12 col-md-5">
                            {this.renderDish(this.props.dish)}

                        </div>
                        <div className=" col-12 col-md-5">
                            <h4>Comments</h4>
                            {this.renderComments(this.props.dish.comments)}
                        </div>

                    </div>
                </div>
            );
        }
        else {
            return <div></div>
        }
    }
}

export default DishdetailComponent;
