import axios from 'axios'
const { USER_LOGIN_FAIL, USER_LOGIN_SUCCESS, USER_LOGIN_REQUEST, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAIL } = require("../constants/userConstants");

export const loginUser = (email, password) => async dispatch => {
    try {

        dispatch({
            type : USER_LOGIN_REQUEST
        })

        const config = {
            headers : {
                "Content-Type" : "application/json"
            }
        }

        const {data} = await axios.post('http://localhost:5000/api/auth/login', {email, password}, config)

        dispatch({
            type : USER_LOGIN_SUCCESS,
            payload : data
        })

        localStorage.setItem('user', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type : USER_LOGIN_FAIL,
            payload : error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const registerUser = (firstname, lastname, username, email, password) => async dispatch => {
    try {

        dispatch({
            type : USER_SIGNUP_REQUEST
        })

        const config = {
            headers : {
                "Content-Type" : "application/json"
            }
        }

        const {data} = await axios.post('http://localhost:5000/api/auth/register', {firstname, lastname, username, email, password}, config)

        dispatch({
            type : USER_SIGNUP_SUCCESS,
            payload : data
        })

        localStorage.setItem('user', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type : USER_SIGNUP_FAIL,
            payload : error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}