import { NAME } from './constants';

export const getData = state => state.getIn([NAME,'data']);
export const getErrorMessage = (state) => state.getIn([NAME, 'error']);
export const isFetching = state => state.getIn([NAME, 'isFetching']);