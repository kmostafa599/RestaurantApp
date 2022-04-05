import { UPDATE_PRODUCT, GET_INITIAL_DATA } from "../actions/actionTypes"

const data = [
    {
        name:"seafood",
        id:1,
        price:"100$",
        contents:"Shrimpm, Squid, Pineapple",
        count:0,
    }
]
const  counterReducer=(state = data, action)=>{
const product = state.filter(a=>a.id === action.id)
    switch (action.type){
        case "INCREMENT":
            return {...product,}
        case "DECREMENT":
            return action.payload
        default:
            return state
    }
}

export default counterReducer