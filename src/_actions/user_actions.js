import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    DELETE_TO_USER,
    UPDATE_TO_USER
} from './types';
import { USER_SERVER } from '../components/Config.js';

export function registerUser(dataToSubmit) {
    const request = axios.post(`${USER_SERVER}/register`, dataToSubmit)
        .then(response => response.data);

    return {
        type: REGISTER_USER,
        payload: request
    }
}

export function loginUser(dataToSubmit) {
    const request = axios.post(`${USER_SERVER}/login`, dataToSubmit)
        .then(response => response.data);

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function auth() {
    const request = axios.get(`${USER_SERVER}/auth`)
        .then(response => response.data);

    return {
        type: AUTH_USER,
        payload: request
    }
}

export function logoutUser() {
    const request = axios.get(`${USER_SERVER}/logout`)
        .then(response => response.data);

    return {
        type: LOGOUT_USER,
        payload: request
    }
}


export function deleted(_id) {
    const request = axios.delete(`${USER_SERVER}/delete?productId=${_id}`)
        .then(response => response.data);

    return {
        type: DELETE_TO_USER,
        payload: request
    }
}

export function update(_id) {
    const request = axios.put(`${USER_SERVER}/update?productId=${_id}`)
        .then(response => response.data);

    return {
        type: UPDATE_TO_USER,
        payload: request
    }
}





