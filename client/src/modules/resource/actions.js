import * as types from './actionTypes';

export const requestResourceData_ACTION = () => {
    return {
        type: types.FETCH_RESOURCE_REQUEST,
        payload: "",            
    }
}

export const requestResourceSuccessData_ACTION = (start = 1) => {
    return  {
        type: types.FETCH_RESOURCE_SUCCESS,
        payload: "",            
        }
    }