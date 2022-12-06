import { FILTER_ORDERS, GET_ALL_ORDERS_RELATED_DATA, GET_FILTERED_PURCHASED_PRODUCTS } from "./admin.types";


const initialState = {
    ordersDetails: {},
    filteredProducts: [],
    filteredOrders: [],
    singleProductToEdit: {},
}

export const adminReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_ORDERS_RELATED_DATA:
            return {
                ...state,
                ordersDetails: payload
            }
        case GET_FILTERED_PURCHASED_PRODUCTS:
            return {
                ...state,
                filteredProducts: payload
            }
        case FILTER_ORDERS:
            return {
                ...state,
                filteredOrders: payload
            }
        default:
            return state;
    }
}