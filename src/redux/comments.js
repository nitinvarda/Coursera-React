
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
            var comment = action.payload;
            comment.id = state.comments.length;
            comment.date = new Date().toISOString();
            console.log("Comment :" + action.payload)
            return {
                ...state,
                comments: state.concat(comment)
            }
        default:
            return state;
    }
}