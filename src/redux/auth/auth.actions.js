
import axios from "axios"

import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT, AUTH_SIGN_UP_ERROR, AUTH_SIGN_UP_LOADING, AUTH_SIGN_UP_SUCCESS, GET_ALL_USERS, GET_USER, UPDATE_PROFILE_ERROR, UPDATE_PROFILE_SUCCESS } from "./auth.types"


const server_url = process.env.REACT_APP_BASE_URL
const server_url2 = process.env.REACT_APP_BASE_URL2


const baseUrl = server_url

export const runServer = () => async (dispatch) => {
    try {
        await axios.get(server_url2)
        console.log('server is runnng');
    } catch (error) {
        console.log('Server error', error);
    }
}


export const LoginApi = (creds) => async (dispatch) => {
    dispatch({ type: AUTH_SIGN_IN_LOADING })
    try {
        let res = await axios.post(`${baseUrl}/user/auth/login`, creds)
        dispatch({
            type: AUTH_SIGN_IN_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({ type: AUTH_SIGN_IN_ERROR })
    }
}


export const SignupApi = (creds) => async (dispatch) => {
    dispatch({ type: AUTH_SIGN_UP_LOADING })
    try {
        let res = await axios.post(`${baseUrl}/user/auth/register`, creds)
        dispatch({
            type: AUTH_SIGN_UP_SUCCESS,
            payload: res.data
        })
    } catch (error) {

        dispatch({ type: AUTH_SIGN_UP_ERROR })
    }
}

export const LogOut = () => async (dispatch) => {
    dispatch({ type: AUTH_SIGN_OUT })
}


export const getUser = () => async (dispatch) => {
    try {
        let res = await axios.get(`${baseUrl}/user/auth/getuser`, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        })
        dispatch({ type: GET_USER, payload: res.data })
    } catch (error) {
        console.log(error);
    }
}

export const getAllUsers = (page) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${baseUrl}/user/auth/getAllUsers?page=${page}`)
        dispatch({ type: GET_ALL_USERS, payload: data })
    } catch (error) {
        console.log(error);
    }
}



export const updateProfile = (body) => async (dispatch) => {
    try {
        let res = await axios.patch(`${baseUrl}/user/auth/update-profile`, body, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        })
        // dispatch({ type: UPDATE_PROFILE });
        dispatch(getUser());
    } catch (error) {
        console.log(error);
    }
}

export const updateProfilePicture = (formData) => async (dispatch) => {
    try {
        let res = await axios.post(`${server_url2}/user/auth/update-avatar`, formData, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        })
        dispatch({ type: UPDATE_PROFILE_SUCCESS });
        dispatch(getUser());
    } catch (error) {
        dispatch({ type: UPDATE_PROFILE_ERROR });
        console.log(error);
    }
}