import { GET_ALL_CART_PRODUCTS } from "./cart.types";

const initialState = {
    allCartItems: [],
}

export const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_CART_PRODUCTS:
            {
                return {
                    ...state,
                    allCartItems: payload,
                }
            }

        default:
            return state;
    }
}