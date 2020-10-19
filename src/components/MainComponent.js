import React, { Component } from 'react';

import { Navbar, NavbarBrand } from 'reactstrap';
import { Dishes } from '../shared/Dishes'
import MenuComponent from './MenuComponent';

import DishdetailComponent from './DishdetailComponent';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: Dishes,
            selectedDish: null,
        }
    }

    onDishSelect(dishId) {
        this.setState({
            selectedDish: dishId,

        })

    }


    render() {

        return (
            <div className="App">
                <Navbar dark color="primary">
                    <div className='container'>
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>

                    </div>
                </Navbar>
                <MenuComponent dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishdetailComponent dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            </div>

        )
    }

}

export default Main;
