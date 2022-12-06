
import axios from 'axios';
import { ADD_NEW_PRODUCT, FILTER_ORDERS, GET_ALL_ORDERS_RELATED_DATA, GET_FILTERED_PURCHASED_PRODUCTS } from './admin.types';

export const getAllOrderRelatedData = () => async (dispatch) => {
    try {
        let { data } = await axios.get('http://localhost:8080/admin/orders-details', {
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

export const getFilteredPurchasedProducts = () => async (dispatch) => {
    try {
        let { data } = await axios.get('http://localhost:8080/admin/', {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        })
        dispatch({ type: GET_FILTERED_PURCHASED_PRODUCTS, payload: data })
    } catch (error) {
        console.log(error);
    }

}

export const addNewProduct = (body) => async (dispatch) => {
    try {
        let { data } = await axios.post('http://localhost:8080/admin/add-newproduct', body, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        })
        dispatch({ type: ADD_NEW_PRODUCT, payload: data })
    } catch (error) {
        console.log(error);
    }

}

export const filteredProducts = () => async (dispatch) => {
    try {
        let { data } = await axios.get('http://localhost:8080/admin/filterOrders', {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        })
        dispatch({ type: FILTER_ORDERS, payload: data })
    } catch (error) {
        console.log(error);
    }

}