import axios from "axios";
import { getUser } from "../auth/auth.actions";
import { FOLLOW_REQ, UNFOLLOW_REQ } from "./connectAndFollow.types";


const server_url = process.env.REACT_APP_BASE_URL



const baseUrl = server_url


export const makeFollowRequest = (body) => async (dispatch) => {
    try {
        await axios.post(`${baseUrl}/follow-connect/follow`, body, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        })
        dispatch({ type: FOLLOW_REQ })
        dispatch(getUser())
    } catch (error) {
        console.log(error);
    }
}

export const makeUnFollowRequest = (body) => async (dispatch) => {
    try {
        await axios.post(`${baseUrl}/follow-connect/unFollow`, body, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        })
        dispatch({ type: UNFOLLOW_REQ })
        dispatch(getUser())
    } catch (error) {
        console.log(error);
    }
}



export const disconnectUserProfile = (body) => async (dispatch) => {
    try {
        await axios.post(`${baseUrl}/follow-connect/disconnect`, body, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        })
        dispatch(getUser())
    } catch (error) {
        console.log(error);
    }
}


export const connectUserProfile = (body) => async (dispatch) => {
    try {
        await axios.post(`${baseUrl}/follow-connect/connect`, body, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        })
        dispatch(getUser())
    } catch (error) {
        console.log(error);
    }
}


export const acceptUserProfile = (body) => async (dispatch) => {
    try {
        await axios.post(`${baseUrl}/follow-connect/accept`, body, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        })
        dispatch(getUser())
    } catch (error) {
        console.log(error);
    }
}

export const declineUserProfile = (body) => async (dispatch) => {
    try {
        await axios.post(`${baseUrl}/follow-connect/decline`, body, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        })
        dispatch(getUser())
    } catch (error) {
        console.log(error);
    }
}