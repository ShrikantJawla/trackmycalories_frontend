import { CATEGORY_WISE_PRODUCTS, GET_CATEGORIES_WITH_LENGTH_FOR_FILTER, GET_PRODUCTS_BY_QUERY, SINGLE_PRODUCT_DETAIL, SINGLE_PRODUCT_REVIEWS } from "./shop.types";


const initialState = {
    homePageProducts: {},
    singleProduct: {},
    singleProductReviews: [],
    productsWithLength: {},
    categoriesWithLength: [],
}
export const shopReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CATEGORY_WISE_PRODUCTS:
            return {
                ...state,
                homePageProducts: payload
            }
        case SINGLE_PRODUCT_DETAIL:
            return {
                ...state,
                singleProduct: payload
            }
        case SINGLE_PRODUCT_REVIEWS:
            return {
                ...state,
                singleProductReviews: payload
            }
        case GET_PRODUCTS_BY_QUERY:
            {
                return {
                    ...state,
                    productsWithLength: payload
                }
            }
        case GET_CATEGORIES_WITH_LENGTH_FOR_FILTER:
            {
                return {
                    ...state,
                    categoriesWithLength: payload
                }
            }
        default:
            return state;
    }
}