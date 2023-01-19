import axios from 'axios';
import { getUser } from '../auth/auth.actions';
import { CATEGORY_WISE_PRODUCTS, GET_CATEGORIES_WITH_LENGTH_FOR_FILTER, GET_PRODUCTS_BY_QUERY, SINGLE_PRODUCT_DETAIL, SINGLE_PRODUCT_REVIEWS } from './shop.types';


const baseServerURL = process.env.REACT_APP_BASE_URL

export const categoryWiseProductDisplay = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${baseServerURL}${process.env.REACT_APP_CATEGORY_WISE_PRODUCT_DISPLAY}`);
        dispatch({ type: CATEGORY_WISE_PRODUCTS, payload: data });
    } catch (error) {
        console.log(error)
    }
}


export const getSingleShopProductReviews = (id, q) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${baseServerURL}${process.env.REACT_APP_SINGLE_PRODUCT_REVIEWS_BY_ID}/${id}?page=${q}`, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        })
        dispatch({ type: SINGLE_PRODUCT_REVIEWS, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const getSingleShopProduct = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${baseServerURL}${process.env.REACT_APP_SINGLE_PRODUCT_BY_ID}/${id}`)
        dispatch({ type: SINGLE_PRODUCT_DETAIL, payload: data })
    } catch (error) {
        console.log(error);
    }
}


export const addProductReview = (data, productId) => async (dispatch) => {
    try {
        await axios.post(`${baseServerURL}/shop/product/reviews/add-review`, data, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        });
        dispatch(getUser())
        dispatch(getSingleShopProductReviews(productId));
    } catch (error) {
        console.log(error);
    }
}
export const addProductLikesOrDislike = (typeOfQuery, reviewId, productId) => async (dispatch) => {
    let url;
    try {
        if (typeOfQuery === 'like') {
            url = `${baseServerURL}/shop/product/reviews/update-likes/${reviewId}`
        } else {
            url = `${baseServerURL}/shop/product/reviews/update-disLikes/${reviewId}`
        }
        await axios.patch(url, {}, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        })
        dispatch(getSingleShopProductReviews(productId));
    } catch (error) {
        console.log(error)
    }
}

export const getShopProductsByQuery = (allCategory, page, sort) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${baseServerURL}/shop/products?category=${allCategory}&page=${page}&sort=${sort}`)
        dispatch({ type: GET_PRODUCTS_BY_QUERY, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const getCategoriesWithLengthForFilter = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${baseServerURL}/shop/products/categoriesAndLength`)
        dispatch({ type: GET_CATEGORIES_WITH_LENGTH_FOR_FILTER, payload: data })
    } catch (error) {
        console.log(error);
    }
}