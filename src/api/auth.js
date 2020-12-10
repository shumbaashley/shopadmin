import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'


const loadUser = async () => {
    try {
        const {data} = await axios.get('http://localhost:8000/api/users/me')
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const loginUser = async (username, password)  => {
    try {
        const config = {
            headers : {
                "Content-Type" : "application/json"
            }
        }
        const {data} = await axios.post('http://localhost:8000/api/auth/token/', {username, password}, config)

        setAuthToken(data.access)

        localStorage.setItem('user-token', JSON.stringify(data.access))

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
        
        const {data} = await axios.post('http://localhost:8000/api/users/login', {first_name, lastname, username, email, password}, config)
        
        setAuthToken(data.access)
        
        localStorage.setItem('user-token', JSON.stringify(data.access))
    
    } catch (error) {
        console.log(error)
    }
}


export const logout = () => {
    setAuthToken()
    localStorage.removeItem('user-token')
}