import axios from 'axios';

import * as types from './actionTypes';

const init = {
    authenticated: false,
    error: '',
};

export default (state = init, action) => {

    switch(action.type) {
        
        case types.HELLO_WORLD_END:
           return {...state, 'helloWorld' :action.payload};
       
        case types.AUTH_USER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('token-experation', action.payload.expire);
            axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;
            return {...state, authenticated: true, error: ''}; 

        case types.UNAUTH_USER:
            return {...state, authenticated: false};

        case types.AUTH_ERROR:
            return {...state, error: action.payload };

        default:
            return state;
    }
  
};