import express from 'express'
import { In } from 'typeorm'
import { Order } from '../entities/order'
import { OrderItem } from '../entities/order_item'
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
        name,
        mobile,
        address,
        city,
        items
    } = req.body
    const productsTable = await Product.find({
        
            where:{id: In(items.ids)}
        
    }) 
    
    
    const order = Order.create({
        name:name,
        mobile:mobile,
        address:address,
        city:city,
        order_items:productsTable,
    })
    const orderItems = OrderItem.create({
        name:name,
        mobile:mobile,
        address:address,
        city:city,
        order_items:productsTable,
    })
    await order.save()
    return res.json(order)
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