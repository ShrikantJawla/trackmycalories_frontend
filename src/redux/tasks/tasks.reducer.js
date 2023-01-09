import { ERROR, GET_ONE_TASK, GET_TASKS, LOADING, SUCCESS } from "./tasks.types"

const initialState = {
    tasks: [],
    singleTask: {},
    loading: false,
    error: false,
    errorMessage: '',
}

export const tasksReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOADING: {
            return {
                ...state,
                loading: true,
            }
        }
        case SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
            }
        }
        case ERROR: {
            return {
                ...state,
                error: true,
            }
        }
        case GET_TASKS: {
            return {
                ...state,
                tasks: payload
            }
        }
        case GET_ONE_TASK: {
            return {
                ...state,
                singleTask: payload
            }
        }
        default: {
            return state
        }
    }
}