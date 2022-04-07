import axios from 'axios'

const API = axios.create({baseURL:'http://localhost:7070/'})


export const getData = () => API.get('/products')
// export const addPost = (newPost) => API.post('/posts',newPost)
export const editCount = (id, editedCount) => API.put(`/products/${id}/count`,id)
export const deleteProduct = (id) => API.delete(`/products/${id}`,id)

// export const addVote = (id, vote) => API.post(`/posts/${id}/vote`,vote)
// export const addComment = (id, comment) => API.post(`/posts/${id}/comment`,comment)