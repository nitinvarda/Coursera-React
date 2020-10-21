import * as ActionTypes from './ActionTypes';


const initialState = {
    isLoading: false,
    errMess: null,
    dishes: [],

}
export const Dishes = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.DISHES_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case ActionTypes.ADD_DISHES:
            return {
                ...state,
                dishes: action.payload,
                isLoading: false
            }
        case ActionTypes.DISHES_FAILED:
            return {
                ...state,
                errMess: action.payload

            }

        default:
            return state;
    }
}