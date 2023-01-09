import * as feedTypes from './feeds.types'
import axios from 'axios';

const localHost = 'http://localhost:8080'

const baseUrl = localHost;


export const loading = () => ({ type: feedTypes.LOADING })
export const success = () => ({ type: feedTypes.SUCCESS })
export const error = (error) => ({ type: feedTypes.ERROR, payload: error })

export const getAllFeeds = () => async (dispatch) => {
    try {
        dispatch(loading());
        const res = await axios.get(`${baseUrl}/feeds/getAllPosts`, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        });
        dispatch({ type: feedTypes.GET_ALL_FEEDS, payload: res.data.posts })
        dispatch(success())
    } catch (error) {
        console.log(error);
        dispatch(error(error.message))
    }
}

export const getSingleFeed = (id) => async (dispatch) => {
    try {
        const { data: { feed } } = await axios.get(`${baseUrl}/feeds/getSingleFeed/${id}`, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        });
        dispatch({ type: feedTypes.GET_SINGLE_FEED, payload: feed })
    } catch (error) {
        console.log(error);
        dispatch(error(error.message))
    }
}


export const makeAPost = (formData) => async (dispatch) => {
    try {
        dispatch(loading());
        await axios.post(`${baseUrl}/feeds/postFeed`, formData, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        });
        dispatch({ type: feedTypes.MAKE_A_NEW_POST })
        dispatch(getAllFeeds())
        dispatch(success())
    } catch (error) {
        console.log(error);
        dispatch(error(error.message))
    }
}

export const deleteAPost = (feedId) => async (dispatch) => {
    try {
        dispatch(loading());
        await axios.delete(`${baseUrl}/feeds/deleteFeed/` + feedId, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        });
        dispatch({ type: feedTypes.DELETE_A_POST })
        dispatch(getAllFeeds())
        dispatch(success())
    } catch (error) {
        console.log(error);
        dispatch(error(error.message))
    }
}

export const editAPost = (feedId, newFeedText) => async (dispatch) => {
    try {
        dispatch(loading());
        await axios.patch(`${baseUrl}/feeds/editFeed/` + feedId, { newFeedText }, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        });
        dispatch({ type: feedTypes.EDIT_A_POST })
        dispatch(getAllFeeds())
        dispatch(success())
    } catch (error) {
        console.log(error);
        dispatch(error(error.message))
    }
}

export const likeAPost = (feedId) => async (dispatch) => {
    try {
        dispatch(loading());
        await axios.post(`${baseUrl}/feeds/likePost/` + feedId, {}, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        });
        dispatch({ type: feedTypes.LIKE_POST })
        dispatch(getAllFeeds())
        dispatch(success())
    } catch (error) {
        console.log(error);
        dispatch(error(error.message))
    }
}

export const addAComment = (feedId, commentInBody) => async (dispatch) => {
    try {
        dispatch(loading());
        await axios.post(`${baseUrl}/feeds/addComment/` + feedId, commentInBody, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        });
        dispatch({ type: feedTypes.ADD_COMMENT })
        dispatch(getAllFeeds())
        dispatch(success())
    } catch (error) {
        console.log(error);
        dispatch(error(error.message))
    }
}

export const addAReply = (feedId, commentId, reply) => async (dispatch) => {
    try {
        dispatch(loading());
        await axios.post(`${baseUrl}/feeds/addReply?commentId=${commentId}&feedId=${feedId}`, { reply }, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        });
        dispatch({ type: feedTypes.ADD_COMMENT })
        dispatch(getAllFeeds())
        dispatch(success())
    } catch (error) {
        console.log(error);
        dispatch(error(error.message))
    }
}

