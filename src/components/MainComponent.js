import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { Navbar, NavbarBrand } from 'reactstrap';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import Footer from './FooterComponent'
import Home from './HomeComponent';
import DishdetailComponent from './DishdetailComponent';
import Contact from './ContactComponent';
import About from './AboutComponent'
import { DISHES } from '../shared/Dishes'
import { PROMOTIONS } from '../shared/promotions'
import { LEADERS } from '../shared/leaders'
import { COMMENTS } from '../shared/comments'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        }
    }

    onDishSelect(dishId) {
        this.setState({
            selectedDish: dishId,

        })

    }




    render() {
        const Homepage = () => {
            return (
                <Home dish={this.state.dishes.filter(dish => dish.featured)[0]}
                    promotion={this.state.promotions.filter(promo => promo.featured)[0]}
                    leader={this.state.leaders.filter(leader => leader.featured)[0]}
                />
            )
        }

        const DishWithId = ({ match }) => {

            return (
                <DishdetailComponent dish={this.state.dishes.filter(dish => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.state.comments.filter(comment => comment.dishId === parseInt(match.params.dishId, 10))}
                />
            )

        }
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/home" component={Homepage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                    <Route exact path="/contactus" component={Contact} />
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route path="/aboutus" component={() => <About leaders={this.state.leaders} />} />
                    <Redirect to="/home" />
                </Switch>


                <Footer />
            </div>

        )
    }

}

export default Main;
