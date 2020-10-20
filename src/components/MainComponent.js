import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

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
import { connect } from 'react-redux';


class Main extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        const Homepage = () => {
            return (
                <Home dish={this.props.dishes.filter(dish => dish.featured)[0]}
                    promotion={this.props.promotions.filter(promo => promo.featured)[0]}
                    leader={this.props.leaders.filter(leader => leader.featured)[0]}
                />
            )
        }

        const DishWithId = ({ match }) => {

            return (
                <DishdetailComponent dish={this.props.dishes.filter(dish => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.props.comments.filter(comment => comment.dishId === parseInt(match.params.dishId, 10))}
                />
            )

        }
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/home" component={Homepage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
                    <Route exact path="/contactus" component={Contact} />
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
                    <Redirect to="/home" />
                </Switch>


                <Footer />
            </div>

        )
    }

}

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

export default withRouter(connect(mapStateToProps)(Main));
