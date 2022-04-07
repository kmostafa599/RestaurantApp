import { UPDATE_PRODUCT, GET_INITIAL_DATA, UPDATE_COUNT, DELETE_PRODUCT, GET_CATEGORIES } from "../actions/actionTypes"


const  counterReducer=(state = [], action)=>{
    switch (action.type){
        case GET_INITIAL_DATA:
            return action.payload  
        case DELETE_PRODUCT:
            // console.log(state)
            const items = state.map(item =>{
                if(item.id === action.payload.id){
                    console.log({...item,count:0})
                    return {...item, count:0}
                }
                return item
            });

            return items
        case UPDATE_COUNT:
            // console.log(state)
            const products = state.map(product =>{
                if(product.id === action.payload.id){
                    console.log({...product,count:product.count+1})
                    return {...product, count:product.count+ action.payload.count}
                }
                return product
            });

            return products
            // const products = state.map(product=>{
            //     if(product.id === action.payload.id){
            //        return {...product,count:product.count+action.payload.count}
            //     }return product
            // })
            // return products
        default:
            return state
    }
}

export default counterReducer