import { NAME } from './constants';

export const isAuthenticated = state => state[NAME]['authenticated'];
export const getErrorMessage = state => state[NAME]['error'];