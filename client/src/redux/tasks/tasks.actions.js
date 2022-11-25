import { ADD_NEW_TASK, ERROR, GET_ONE_TASK, GET_TASKS, LOADING, SUCCESS } from "./tasks.types"
import axios from 'axios';

export const loading = () => ({ type: LOADING })
export const success = () => ({ type: SUCCESS })
export const error = (payload) => ({ type: ERROR, payload })

export const getAllTasks = () => async (dispatch) => {
    dispatch(loading())
    try {
        let res = await axios.get('http://localhost:8080/user/tasks/gettasks', {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        })
        dispatch({ type: GET_TASKS, payload: res.data })
        dispatch(success())
    } catch (error) {
        dispatch(error(error))
    }
}

export const addNewTask = (data) => async (dispatch) => {
    dispatch(loading())
    try {
        let res = await axios.post('http://localhost:8080/user/tasks/addtask', data, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        })
        dispatch({ type: ADD_NEW_TASK, payload: res.data })
        dispatch(success())
        dispatch(getAllTasks())
    } catch (error) {
        console.log(error)
        dispatch(error(error))
    }
}

export const getOneTask = (id) => async (dispatch) => {
    dispatch(loading())
    try {
        let res = await axios.get('http://localhost:8080/user/tasks/gettask/' + id, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        })
        dispatch({ type: GET_ONE_TASK, payload: res.data })
    } catch (error) {
        dispatch(error())
    }
}
export const updateTask = (id, data) => async (dispatch) => {
    dispatch(loading())
    try {
        await axios.patch(`http://localhost:8080/user/tasks/updatetask/${id}`, data, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        })
        // dispatch({ type: UPDATE_TASK })
        dispatch(getAllTasks())
    } catch (error) {
        dispatch(error())
    }
}
export const deleteTask = (id) => async (dispatch) => {
    dispatch(loading())
    try {
        await axios.delete('http://localhost:8080/user/tasks/deletetask/' + id, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        })
        // dispatch({ type: DELETE_TASK })
        dispatch(getAllTasks())
    } catch (error) {
        dispatch(error())
    }
}
