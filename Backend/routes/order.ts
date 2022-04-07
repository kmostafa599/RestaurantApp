import express from 'express'
import { In } from 'typeorm'
import { Order } from '../entities/order'
import { Product } from '../entities/product'
import { User } from '../entities/User'

const routes = express()


routes.get('/', async (req,res)=>{
    const oreders = await Order.find() 
    if(!oreders){
        return res.json({msg:"No oreders Found!"})
    }
    return res.json(oreders)
})
routes.get('/:orderId',async (req, res) =>{ //localhost:3000/userId 
    // const oreders = await Post.find()

    const { orderId } = req.params
    const order = await Order.findOneBy({id: parseInt(orderId)})
    
    
    if(!order){
        return res.json({res:"Order not found"})
    }
    return res.json(order)
    
})
routes.post('/create/order',async (req, res) =>{ //localhost:3000/userId 
    // return res.json(req.body)
    // const {userId} = req.params
    // const userBody = await User.findOneBy({id:parseInt(userId)})
    const {
        mobile,
        adress,
        city
    } = req.body
    const productsTable = await Product.find({
        
            where:{id: In(tags)}
        
    }) 
    
    
    const product = Product.create({
        mobile:mobile,
        adress: adress,
        city:city,
        products:productsTable,
    
    })
    await product.save()
    return res.json(product)
})

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
    const order = Order.delete(id)
    
    return res.json(order)
})
// // AppDataSource.initialize()

export default routes   