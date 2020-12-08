import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { loginReducer } from './reducers/userReducers'

const initialState = {
    
}


const reducer = combineReducers({
    user : loginReducer,
})

const middleware = [thunk]


const store = createStore(reducer, initialState , composeWithDevTools(applyMiddleware(...middleware)))

export default store