
import axios from 'axios';
import {
    ADD_NEW_PRODUCT,
    ADD_SINGLE_PRODUCT_INFO,
    DELETE_SHOP_PRODUCT,
    FILTER_ORDERS,
    GET_ALL_ORDERS_RELATED_DATA,
    GET_FILTERED_SHOP_PRODUCTS,
    UPDATE_SHOP_PRODUCT
} from './admin.types';

const baseLocalHostURL = process.env.REACT_APP_BASE_URL
// const baseServerURL = process.env.REACT_APP_SERVER_BASE_URL
const baseServerURL = 'https://lazy-cyan-camel-sari.cyclic.app/'


export const getAllOrderRelatedData = () => async (dispatch) => {
    try {
        let { data } = await axios.get(`${baseServerURL}/admin/orders-details`, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        })
        /*
        response: allOrdersDetails = {
                pendingOrders: Array,
                deleveredOrders: Array,
                totalRevenue: Array
            }
        */
        dispatch({ type: GET_ALL_ORDERS_RELATED_DATA, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const getFilteredShopProducts = (q = '', page, sortByRating = '', filterByCategory = '', filterByQuantity = '') => async (dispatch) => {
    try {
        let { data } = await axios.get(`${baseServerURL}/admin?q=${q}&page=${page}&sortByRating=${sortByRating}&filterByCategory=${filterByCategory}&filterByQuantity=${filterByQuantity}`, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        })
        dispatch({ type: GET_FILTERED_SHOP_PRODUCTS, payload: data })
    } catch (error) {
        console.log(error);
    }

}

export const addNewProduct = (body) => async (dispatch) => {
    try {
        let { data } = await axios.post(`${baseServerURL}/admin/add-newproduct`, body, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        })
        dispatch({ type: ADD_NEW_PRODUCT, payload: data })
    } catch (error) {
        console.log(error);
    }

}

export const filterOrders = (paymentMethod = '', monthOfOrder = '', monthOfDelevery = '', status = '', amount = '', page) => async (dispatch) => {
    try {
        let { data } = await axios.get(`${baseServerURL}/admin/filterOrders?paymentMethod=${paymentMethod}&monthOfOrder=${monthOfOrder}&monthOfDelevery=${monthOfDelevery}&status=${status}&amount=${amount}&page=${page}`, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        })
        dispatch({ type: FILTER_ORDERS, payload: data })
    } catch (error) {
        console.log(error);
    }
}


export const showSingleProduct = (product) => (dispatch) => {
    dispatch({ type: ADD_SINGLE_PRODUCT_INFO, payload: product })
}

export const deleteShopProduct = (productId) => async (dispatch) => {
    try {
        await axios.delete(`${baseServerURL}/admin/delete-product/${productId}`, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        })
        dispatch({ type: DELETE_SHOP_PRODUCT })
        dispatch(getFilteredShopProducts())
    } catch (error) {
        console.log(error);
    }
}


export const updateShopProduct = (productId, body) => async (dispatch) => {
    try {
        await axios.patch(`${baseServerURL}/admin/update-product/${productId}`, body, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        })
        dispatch({ type: UPDATE_SHOP_PRODUCT })
        dispatch(getFilteredShopProducts())
    } catch (error) {
        console.log(error);
    }
}