import {combineReducers} from 'redux'
import categoriesReducer from './categoriesReducer'
import productReducer from './counterReducer'
import ordersReducer from './ordersReducer'


export const reducers = combineReducers({
    products: productReducer,
    categories: categoriesReducer,
    orders: ordersReducer,
})