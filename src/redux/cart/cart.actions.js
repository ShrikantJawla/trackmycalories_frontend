
import axios from 'axios';
import { ADD_ITEMS_TO_CART, ERROR, GET_ALL_CART_PRODUCTS, LOADING, SUCCESS } from './cart.types';

const baseServerURL = process.env.REACT_APP_BASE_URL


const loading = () => ({ type: LOADING });
const success = () => ({ type: SUCCESS });
const error = (err) => ({ type: ERROR, payload: err });


export const getAllCartItems = () => async (dispatch) => {
    dispatch(loading());
    try {
        const { data } = await axios.get(`${baseServerURL}/shop/cart`, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        });
        dispatch({ type: GET_ALL_CART_PRODUCTS, payload: data });
        dispatch(success());
    } catch (err) {
        console.log(err.message)
        dispatch(error(err.message));
    }
}

export const addItemToCart = (body) => async (dispatch) => {
    console.log(body);
    dispatch(loading());
    try {
        await axios.post(`${baseServerURL}/shop/cart/add-item`, body, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        })
        dispatch({ type: ADD_ITEMS_TO_CART })
        dispatch(success());
    } catch (err) {
        console.log(err.message)
        dispatch(error(err.message));
    }
}
export const updateQuantityInCart = (cartItemId, typeOfQuery) => async (dispatch) => {
    console.log(cartItemId, typeOfQuery)
    dispatch(loading());
    try {
        await axios.patch(`${baseServerURL}/shop/cart/update-quantity/${cartItemId}?q=${typeOfQuery}`, {}, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        })
        dispatch(success());
        dispatch(getAllCartItems())
    } catch (err) {
        console.log(err.message)
        dispatch(error(err.message));
    }
}
export const deleteProductFromCart = (cartItemId) => async (dispatch) => {
    dispatch(loading());
    try {
        await axios.delete(`${baseServerURL}/shop/cart/delete-product/${cartItemId}`, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        })
        dispatch(success());
        dispatch(getAllCartItems())
    } catch (err) {
        console.log(err.message)
        dispatch(error(err.message));
    }
}
export const addItemInPuchaseList = (modeOfPaymentInBody) => async (dispatch) => {
    console.log(modeOfPaymentInBody);
    dispatch(loading());
    try {
        await axios.patch(`${baseServerURL}/shop/cart/purchase`, modeOfPaymentInBody, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        })
        dispatch(success());
        dispatch(getAllCartItems())
    } catch (err) {
        console.log(err.message)
        dispatch(error(err.message));
    }
}