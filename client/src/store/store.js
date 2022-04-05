import {createStore} from  'redux'
import rootReducer from './rootReducer'
import { applyMiddleware } from 'redux'
import { autoAuth } from './user/action'
import thunk from 'redux-thunk'


const store = createStore(rootReducer,applyMiddleware(thunk))

const logintoken = localStorage.getItem('logintoken')

if(logintoken){
    store.dispatch(autoAuth())
}

export default store