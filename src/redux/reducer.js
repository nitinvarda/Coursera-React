import { DISHES } from '../shared/Dishes'
import { PROMOTIONS } from '../shared/promotions'
import { LEADERS } from '../shared/leaders'
import { COMMENTS } from '../shared/comments'


export const initialState = {
    dishes: DISHES,
    selectedDish: null,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
}


export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}