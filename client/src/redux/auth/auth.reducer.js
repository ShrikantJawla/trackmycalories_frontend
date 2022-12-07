
import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT, AUTH_SIGN_UP_LOADING, AUTH_SIGN_UP_SUCCESS, AUTH_SIGN_UP_ERROR, GET_USER, UPDATE_PROFILE_PICTURE, UPDATE_PROFILE_ERROR, UPDATE_PROFILE_SUCCESS } from "./auth.types";

const userToken = localStorage.getItem('checkmycalorieToken') || ''
const userRole = localStorage.getItem('checkMyCalorieRole') || ''
export const authInitalState = {
  signupLoading: false,
  loginLoading: false,
  signupError: false,
  loginError: false,
  updateProfileError: false,
  token: userToken,
  isAuth: userToken === '' ? false : true,
  isAdmin: userRole === 'admin' ? true : false,
  userInfo: {},
};

export const authReducer = (state = authInitalState, { type, payload }) => {

  switch (type) {
    case AUTH_SIGN_IN_LOADING: {
      return {
        ...state,
        loginLoading: true
      }
    }

    case AUTH_SIGN_IN_ERROR: {
      return {
        ...state,
        loginLoading: false,
        loginError: true
      }
    }

    case AUTH_SIGN_IN_SUCCESS: {
      localStorage.setItem('checkmycalorieToken', payload.token)
      localStorage.setItem('checkMyCalorieRole', payload.user.role)
      return {
        ...state,
        loginLoading: false,
        token: payload.token,
        isAuth: true,
        isAdmin: payload.user.role === 'admin' ? true : false,
        loginError: false
      }
    }
    case AUTH_SIGN_UP_LOADING: {
      return {
        ...state,
        signupLoading: true
      }
    }
    case AUTH_SIGN_UP_SUCCESS: {
      return {
        ...state,
        signupLoading: false,
        token: payload.token,
        isAuth: false,
        signupError: false
      }
    }
    case AUTH_SIGN_UP_ERROR: {
      return {
        ...state,
        signupLoading: false,
        signupError: true
      }
    }
    case AUTH_SIGN_OUT: {
      localStorage.removeItem('checkmycalorieToken')
      localStorage.removeItem('checkMyCalorieRole')
      return {
        ...state,
        loading: false,
        token: "",
        isAuth: false,
        isAdmin: false,
        signupError: false
      }
    }
    case GET_USER: {
      return {
        ...state,
        userInfo: payload
      }
    }
    case UPDATE_PROFILE_ERROR: {
      return {
        ...state,
        updateProfileError: true,
      }
    }
    case UPDATE_PROFILE_SUCCESS: {
      return {
        ...state,
        updateProfileError: false,
      }
    }
    default: {
      return state;
    }

  }
};


