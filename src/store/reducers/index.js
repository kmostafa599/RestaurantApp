import {combineReducers} from 'redux'
import counterReducer from './counterReducer'


export const reducers = combineReducers({
    orderData: counterReducer,
})