import * as feedTypes from './feeds.types'


let initState = {
    loading: false,
    allPosts: [],
    singlePost: {},
    error: ''
}

export const feedReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case feedTypes.LOADING:
            return {
                ...state,
                loading: true
            }
        case feedTypes.SUCCESS:
            return {
                ...state,
                loading: false,
                error: ''
            }
        case feedTypes.ERROR:
            return {
                ...state,
                error: payload.error
            }
        case feedTypes.GET_ALL_FEEDS:
            return {
                ...state,
                allPosts: payload
            }
        case feedTypes.GET_SINGLE_FEED:
            return {
                ...state,
                singlePost: payload
            }
        default:
            return state;
    }
}