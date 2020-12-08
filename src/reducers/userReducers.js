const { USER_LOGIN_FAIL, USER_LOGIN_SUCCESS, USER_LOGIN_REQUEST, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAIL } = require("../constants/userConstants");

export const loginReducer = (state={}, action) => {
    switch (action.payload) {
        case USER_LOGIN_REQUEST:
            return {
                loading : true
            }
        case USER_LOGIN_SUCCESS:
            return {
                loading : false,
                userInfo : action.payload
            }
        case USER_LOGIN_FAIL:
            return {
                loading : false,
                error : action.payload
            }
        default:
            return state;
    }
} 


export const signupReducer = (state={}, action) => {
    switch (action.payload) {
        case USER_SIGNUP_REQUEST:
            return {
                loading : true
            }
        case USER_SIGNUP_SUCCESS:
            return {
                loading : false,
                userInfo : action.payload
            }
        case USER_SIGNUP_FAIL:
            return {
                loading : false,
                error : action.payload
            }
        default:
            return state;
    }
} 