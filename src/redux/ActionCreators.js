
import * as ActionTypes from './ActionTypes';

import { baseUrl } from '../shared/baseUrl';





// post comment
export const addComment = (comment) => ({

    type: ActionTypes.ADD_COMMENT,
    payload: comment
})
export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment

    }
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'

    })
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error('Error ' + response.status + ": " + response.statusText)
                error.response = response;
                throw error
            }
        },
            error => {
                var errmess = new Error(error.message)
                throw errmess
            })
        .then(response => response.json())
        .then(comment => {
            console.log(comment)
            dispatch(addComment(comment))
        })
        .catch(error => console.log("post comments" + error))

}

// post feedback

export const postFeedback = (firstname, lastname, telnum, email, agree, contactType, message) => (dispatch) => {
    const values = {
        firstname: firstname,
        lastname: lastname,
        telnum: telnum,
        email: email,
        agree: agree,
        contactType: contactType,
        message: message

    }



    values.date = new Date().toISOString()


    return fetch(baseUrl + 'feedback', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'

    })
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error('Error ' + response.status + ": " + response.statusText)
                error.response = response;
                throw error
            }
        },
            error => {
                var errmess = new Error(error.message)
                throw errmess
            })
        .then(response => response.json())
        .then(feedback => {

            alert("Thanks for the feedback !" + JSON.stringify(feedback));
            return feedback
        })
        .catch(error => console.log("post comments" + error))

}





// dishes

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));
    return fetch(baseUrl + 'dishes')
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error('Error ' + response.status + ": " + response.statusText)
                error.response = response;
                throw error
            }
        },
            error => {
                var errmess = new Error(error.message)
                throw errmess
            })
        .then(response => response.json())
        .then(dishes => {
            dispatch(addDishes(dishes))
        })
        .catch(error => dispatch(dishesFailed(error)))

}


export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING

})

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess

})

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes

})


// comments

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error('Error ' + response.status + ": " + response.statusText)
                error.response = response;
                throw error
            }
        },
            error => {
                var errmess = new Error(error.message)
                throw errmess
            })
        .then(response => response.json())
        .then(comments => {
            dispatch(addComments(comments))
        })
        .catch(error => dispatch(commentsFailed(error)))
}

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess

})

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments

})

// Promotions

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));
    return fetch(baseUrl + 'promotions')
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error('Error ' + response.status + ": " + response.statusText)
                error.response = response;
                throw error
            }
        },
            error => {
                var errmess = new Error(error.message)
                throw errmess
            })
        .then(response => response.json())
        .then(promos => {
            dispatch(addPromos(promos))
        })
        .catch(error => {
            dispatch(promosFailed(error))
        })

}


export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING

})

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess

})

export const addPromos = (dishes) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: dishes

})


// Leaders
export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading(true));
    return fetch(baseUrl + 'leaders')
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error('Error ' + response.status + ": " + response.statusText)
                error.response = response;
                throw error
            }
        },
            error => {
                var errmess = new Error(error.message)
                throw errmess
            })
        .then(response => response.json())
        .then(leaders => {
            dispatch(addLeaders(leaders))
        })
        .catch(error => {
            dispatch(leadersFailed(error))
        })

}


export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING

})

export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess

})

export const addLeaders = (leaders) => ({
    type: ActionTypes.LEADERS_SUCCESS,
    payload: leaders

})


