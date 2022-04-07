import { UPDATE_PRODUCT, GET_INITIAL_DATA, UPDATE_COUNT, DELETE_PRODUCT } from "../actions/actionTypes"

// const data = [
//     {
//         name:"seafood",
//         id:1,
//         price:"100$",
//         contents:"Shrimpm, Squid, Pineapple",
//         count:1,
//     },
//     {
//         name:"pizza",
//         id:1,
//         price:"100$",
//         contents:"Shrimpm, Squid, Pineapple",
//         count:0,
//     },
//     {
//         name:"burger",
//         id:1,
//         price:"100$",
//         contents:"Shrimpm, Squid, Pineapple",
//         count:2,
//     }
// ]
const  counterReducer=(state = [], action)=>{
    switch (action.type){
        case GET_INITIAL_DATA:
        case DELETE_PRODUCT:
            return action.payload

        case UPDATE_COUNT:
            console.log(state)
            const products = state.map(product =>{
                if(product.id === action.payload.id){
                    console.log({...product,count:product.count+1})
                    return {...product, count:product.count+ action.payload.count}
                }
                return product
            });

            return [...state,]
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