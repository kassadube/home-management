import * as types from './actionTypes';

const init = {
    data:{},
    error: '',
    isFetching:false
};

export default (state = init, action) => {

    switch(action.type) {
        case types.FETCH_RESOURCE_REQUEST:
            return {...state, 'isFetching': true };
        case types.FETCH_RESOURCE_SUCCESS:
            return { 
                ...state,
                data: action.payload, // should be immutable object, from the action.
                isFetching: false, 
                error: '' 
            };
        case types.FETCH_RESOURCE_FAILURE:
            return { 
                ...state,
                isFetching: false, 
                error: action.payload 
            };
    }
    return state;
};