import express from 'express'
import { In } from 'typeorm'
import { Category } from '../entities/category'
import { Product } from '../entities/product'
import { User } from '../entities/User'

const routes = express()


routes.get('/', async (req,res)=>{
    const categories = await Category.find() 
    if(!categories){
        return res.json({msg:"No categories Found!"})
    }
    return res.json(categories)
})
routes.get('/:categoryId',async (req, res) =>{ //localhost:3000/userId 
    // const categorys = await Post.find()

    const { categoryId } = req.params
    const category = await Category.findOneBy({id: parseInt(categoryId)})
    
    
    if(!category){
        return res.json({res:"Category not found"})
    }
    return res.json(category)
    
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
    const category = Category.delete(id)
    
    return res.json(category)
})
// // AppDataSource.initialize()

export default routes   