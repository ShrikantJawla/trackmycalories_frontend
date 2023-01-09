import { ADD_SINGLE_PRODUCT_INFO, FILTER_ORDERS, GET_ALL_ORDERS_RELATED_DATA, GET_FILTERED_SHOP_PRODUCTS } from "./admin.types";


const initialState = {
    ordersDetails: {},
    filteredProducts: [],
    filteredOrders: [],
    singleProductToDisplay: {},
    singleProductToEdit: {},
}

export const adminReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_ORDERS_RELATED_DATA:
            return {
                ...state,
                ordersDetails: payload
            }
        case GET_FILTERED_SHOP_PRODUCTS:
            return {
                ...state,
                filteredProducts: payload
            }
        case FILTER_ORDERS:
            return {
                ...state,
                filteredOrders: payload
            }
        case ADD_SINGLE_PRODUCT_INFO:
            return {
                ...state,
                singleProductToDisplay: payload
            }
        default:
            return state;
    }
}