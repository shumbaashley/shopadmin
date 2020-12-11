import axios from 'axios'
import {apiURL} from './index'




export const loginUser = async (username, password)  => {
    try {
        const config = {
            headers : {
                "Content-Type" : "application/json"
            }
        }
        const {data} = await axios.post(`${apiURL}/users/token/`, {username, password}, config)


        localStorage.setItem('user-token', JSON.stringify(data.access))
        return data
    } catch (error) {
        console.log(error)
    }
}

export const registerUser = async (first_name, lastname, username, email, password)  => {
    try {
        const config = {
            headers : {
                "Content-Type" : "application/json"
            }
        }
        
        const {data} = await axios.post(`${apiURL}/users/register`, {first_name, lastname, username, email, password}, config)
        
        console.log(data)
        return data

    } catch (error) {
        console.log(error)
    }
}


export const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = '/';
}