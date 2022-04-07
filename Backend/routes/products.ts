import express from 'express'
import { In } from 'typeorm'
import { Product } from '../entities/product'
import { User } from '../entities/User'

const routes = express()


routes.get('/', async (req,res)=>{
    const products = await Product.find() 
    if(!products){
        return res.json({msg:"No products Found!"})
    }
    return res.json(products)
})
routes.get('/:productId',async (req, res) =>{ //localhost:3000/userId 
    // const products = await Post.find()

    const { productId } = req.params
    const product = await Product.findOneBy({id: parseInt(productId)})
    
    
    if(!product){
        return res.json({res:"Post not found"})
    }
    return res.json(product)
    
})
// routes.post('/create/:userId',async (req, res) =>{ //localhost:3000/userId 
//     // return res.json(req.body)
//     const {userId} = req.params
//     const userBody = await User.findOneBy({id:parseInt(userId)})
//     const {
//         title,
//         votes,
//         tags,
//         comments
//     } = req.body
//     const tagsTable = await Tag.find({
        
//             where:{id: In(tags)}
        
//     }) 
//     const commentTable = await Comment.find({
        
//         where:{id: In(comments)}
    
// }) 
    
//     const post = Post.create({
//         title:title,
//         user: userBody,
//         tags:tagsTable,
//         comments:commentTable
    
//     })
//     await post.save()
//     return res.json(post)
// })

// routes.put('/update/:postId/:userId',async (req, res) =>{
//     const {postId} = req.params
//     const postBody = await Post.findOneBy({id:parseInt(postId)})
//     const post = Post.merge(postBody, req.body)
//     await post.save()
//     return res.json(post)
// })
routes.delete('/delete/:id',async (req, res) =>{
    const {id} = req.params
    console.log()
    // const postBody = await Post.findOneBy({id:parseInt(id)})
    const product = Product.delete(id)
    
    return res.json(product)
})
// // AppDataSource.initialize()

export default routes   