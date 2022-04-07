import { ADD_ORDER, GET_ORDERS } from "../actions/actionTypes"


const  ordersReducer=(state = [], action)=>{
    switch (action.type){
        
        case GET_ORDERS:
            return action.payload    
        case ADD_ORDER:{
            return action.payload
        }
        default:
            return state
    }
}

export default ordersReducer