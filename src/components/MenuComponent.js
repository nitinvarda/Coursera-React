import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Loading from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';


function RenderMenuItem({ dish, match }) {
    return (
        <Card >
            <Link to={`/menu/${dish.id}`}>
                <CardImg width="100%" object src={baseUrl + dish.image} alt={dish.name} />

                <CardImgOverlay body className="ml-5">
                    <CardTitle >{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardImgOverlay>
            </Link>
        </Card>
    );

}

const Menu = ({ dishes, onClick, }) => {
    // const menu = dishes.map(dish => {
    //     return (
    //         <div key={dish.id} className="col-12 col-md-5 mt-5">
    //             <RenderMenuItem dish={dish} />

    //         </div>
    //     )
    // })
    if (dishes.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />

                </div>

            </div>
        )
    }
    else if (dishes.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{dishes.errMess}</h4>

                </div>

            </div>
        )
    }
    else {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>

                </div>
                <div className="row">
                    {/* {menu} */}
                    {dishes.dishes.map(dish => (
                        <div key={dish.id} className="col-12 col-md-5 mt-5">
                            <RenderMenuItem dish={dish} />

                        </div>

                    ))}
                </div>
            </div>
        )
    }

}

export default Menu
