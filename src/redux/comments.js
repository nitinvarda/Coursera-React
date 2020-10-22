
import * as ActionTypes from './ActionTypes';


const initialState = {
    errMess: null,
    comments: [],
    isLoading: false
}

export const Comments = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {
                ...state,
                comments: action.payload,
                isLoading: false
            }
        case ActionTypes.COMMENTS_FAILED:
            return {
                ...state,

                errMess: action.payload

            }
        case ActionTypes.ADD_COMMENT:

            return {
                ...state,
                comments: state.concat(action.payload)
            }
        default:
            return state;
    }
}