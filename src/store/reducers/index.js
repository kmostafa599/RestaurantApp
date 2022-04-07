import {combineReducers} from 'redux'
import categoriesReducer from './categoriesReducer'
import counterReducer from './counterReducer'
import ordersReducer from './ordersReducer'


export const reducers = combineReducers({
    products: counterReducer,
    categories: categoriesReducer,
    orders: ordersReducer,
})