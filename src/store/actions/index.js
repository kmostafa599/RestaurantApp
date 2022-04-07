import * as api from '../../config/api'
import { ADD_COMMENT, ADD_ORDER, ADD_POST, ADD_VOTE, DELETE_POST, DELETE_PRODUCT, EDIT_POST, GET_CATEGORIES, GET_INITIAL_DATA, GET_ORDERS, UPDATE_COUNT } from "./actionTypes"






//Action creators

export const getInitialData = () => async (dispatch) => {
    try {
        const response = await api.getData()
        // console.log(response)
        dispatch({ type: GET_INITIAL_DATA , payload: response.data })
    }
    catch (error) {
        console.log(error)
    }
}
export const getCategories = () => async (dispatch) => {
    try {
        const response = await api.getCategories()
        // console.log(response)
        dispatch({ type: GET_CATEGORIES , payload: response.data })
    }
    catch (error) {
        console.log(error)
    }
}
export const getOrders = () => async (dispatch) => {
    try {
        const response = await api.getOrders()
        console.log(response)
        dispatch({ type: GET_ORDERS , payload: response.data })
    }
    catch (error) {
        console.log(error)
    }
}
export const addOrder = (newOrder) => async (dispatch) => {
    console.log("Actions",newOrder)
    try {
        await api.addOrder(newOrder)
        const response = await api.getData()
        console.log(response)
        dispatch({ type: ADD_ORDER, payload: response.data})
    }

    catch (error) {
        console.log(error)
    }
}
// // export const updatePost = (id, updatedPost) => async (dispatch) => {
//     console.log('heloo',updatedPost)
//     try {
//         await api.editPost(id, updatedPost)
//         const response = await api.getData()
//         console.log(response)
//         dispatch({ type: EDIT_POST, payload: response.data.data })
//     }

//     catch (error) {
//         console.log(error)
//     }
// }


// export const addVote = (id, vote) => async (dispatch) => {
//     // console.log('heloo',updatedPost)
//     console.log(vote)
//     try {
//         await api.addVote(id, vote)
//         const response = await api.getData()
//         console.log(response)
//         dispatch({ type: ADD_VOTE , payload: response.data.data })
//     }

//     catch (error) {
//         console.log(error)
//     }
// }
// export const updateCount = (id,count) => async (dispatch) =>{
//     console.log(count)
//     try{
//         await api.editCount(id,count)
//         const response = await api.getData()
//         console.log(response)
//         dispatch({type:"UPDATE_COUNT",payload: response.products})
        
//     }
//     catch(error){
//         console.log(error)
//     }
// }

export const changeCount = (id,count) =>{
    return {
        type:UPDATE_COUNT,
        payload:{
            id,
            count
        }
    }
}
export const deleteProduct = (id) =>{
    return {
        type:DELETE_PRODUCT,
        payload:{
            id,
        }
    }
}
// export const addComment = (id, comment) => async (dispatch) => {
//     // console.log('heloo',updatedPost)
//     console.log(comment)
//     try {
//         await api.addComment(id, comment)
//         const response = await api.getData()
//         console.log(response)
//         dispatch({ type: ADD_COMMENT , payload: response.data.data })
//     }

//     catch (error) {
//         console.log(error)
//     }
// }



// export const deleteProduct = (id) => async (dispatch) => {
//     try {
//         await api.deleteProduct(id)
//         const response = await api.getData()
//         console.log(response)
//         dispatch({ type: DELETE_PRODUCT, payload: response.data })
//     }

//     catch (error) {
//         console.log(error)
//     }
// }
// const increment = (id) =>{
//     return{
//         type:"INCREMENT",
//         payload:{
            
//         }
//     }
    
// }
// const decrement = (id) =>{
//     return{
//         type:"DECREMENT",
//         id
//     }
    
// }