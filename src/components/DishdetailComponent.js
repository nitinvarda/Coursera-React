import React, { Component } from 'react';
import {
    Card, CardImg, CardBody,
    CardText, CardTitle,
    Breadcrumb, BreadcrumbItem,
    Row, Col,
    Label,
    Button,
    Modal, ModalHeader, ModalBody,
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom'
import Loading from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderDish({ dish }) {

    if (dish != null) {
        return (

            <Card>
                <CardImg top src={baseUrl + dish.image} alt={dish.name} />
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

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);


        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit(values) {


        this.props.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.name, values.message)
    }

    render() {
        return (
            <Modal isOpen={this.props.isModalOpen} toggle={this.props.toggleModal}>
                <ModalHeader>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="rating" md={12} >Rating</Label>
                            <Col >
                                <Control.select model=".rating" name="rating"
                                    className="form-control">
                                    <option>select rating</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>

                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="name" md={12} >Your Name</Label>
                            <Col >
                                <Control.text model=".name" id="name" name="name"
                                    placeholder="Your Name"
                                    className="form-control"
                                    validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }}
                                />
                                <Errors className="text-danger" model=".name" show="touched" messages={{
                                    required: 'Required', minLength: "Must be greater than 2 characters",
                                    maxLength: "Must be 15 character or less"
                                }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="message" md={12}>Comment</Label>
                            <Col md={12}>
                                <Control.textarea model=".message" id="message" name="message"
                                    rows="6"
                                    className="form-control" />
                            </Col>
                        </Row>

                        <Button type="submit" value="submit" color="primary" >Submit</Button>
                    </LocalForm>
                </ModalBody>
            </Modal>

        )
    }
}


class RenderComments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,

        }
        this.toggleModal = this.toggleModal.bind(this)
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    render() {



        if (this.props.comments != null) {
            return (
                <div>
                    {
                        this.props.comments.map(comment => {

                            return (


                                <ul className="list-unstyled">
                                    <li>{comment.comment}</li>
                                    <p>-- {comment.author} , {comment.date.substring(0, 10)}</p>
                                </ul>

                            )
                        })
                    }
                    <CommentForm isModalOpen={this.state.isModalOpen} toggleModal={this.toggleModal} dishId={this.props.dishId} addComment={this.props.addComment} />
                    <Button outline color="secondary" value="submit comment" onClick={this.toggleModal}  ><i class="fa fa-pencil "></i> Submit Comment</Button>

                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }
}




const Dishdetail = ({ dish, comments, addComment, isLoading, errMess }) => {
    if (isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />

                </div>

            </div>
        )
    }
    else if (errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{errMess}</h4>

                </div>

            </div>
        )
    }
    else if (dish != null && comments != null) {

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active> {dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{dish.name}</h3>
                        <hr />
                    </div>

                </div>

                <div className="row">
                    <div className="col-12 col-md-5">
                        <RenderDish dish={dish} />

                    </div>
                    <div className=" col-12 col-md-5">
                        <h4>Comments</h4>
                        <RenderComments comments={comments} addComment={addComment} dishId={dish.id} />
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
