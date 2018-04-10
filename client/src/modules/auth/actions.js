import axios from 'axios';
import * as types from './actionTypes';

export const signinUser = (values) => {
    return (dispatch) => {
        // Submit email/password to the server
        const { username, password } = values;
        // eslint-disable-next-line
        axios.post(config.URL.SIGNIN, { username, password })
        .then(response => {
            // If the request is good...
            // - Save the JWT token
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('token-experation', response.data.expire);            
            
            // - Update state to indicate user is authenticated
            dispatch({ type: types.AUTH_USER, payload: {token : response.data.token}});
           
            // - Redirect to the route '/feature'
        })
        .catch(() => {
            // If the request is bad...
            // - Show an error to the user
            // eslint-disable-next-line
            dispatch(authError("Wrong Username or Password"));        
        }); 
    }
}

export const signinUser_ACTION = (values) => {
    return {
        type: types.AUTH_USER,
        payload: values
    }
}
export const signoutUser = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('token-experation');
    return { type: types.UNAUTH_USER };
}

export const authError = (error) => {
    return {
        type: types.AUTH_ERROR,
        payload: error
    }
}

export const helloWorldAction = () => {
    
    return { type: types.HELLO_WORLD };
}