import { createConnection,  } from 'typeorm'
import {config} from 'dotenv'
import express,{Request, Response, json, urlencoded} from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import productRoutes from '../routes/products'
import categoryRoutes from '../routes/category'
import orderRoutes from '../routes/order'
// import { AppDataSource } from "./data-source"
import { Product } from "../entities/product"
import { User } from '../entities/User'
import { Category } from '../entities/category'
import { Order } from '../entities/order'
// import { AppDataSource } from './data.source'

config()

// findOneBy(id:{par})

const app = express()
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());
app.use(json());

app.use(urlencoded({ extended: false }));

app.get('/', (req:Request,res:Response)=>{
    res.send("test")
  
})

// app.post('/api/post/:userId',async (req, res) =>{ //localhost:3000/userId 
//     // return res.json(req.body)
//     const {userId} = req.params
//     const user_id = await User.findOneBy({id:parseInt(userId)})
//     const {
//         title,
//         votes,
        
//     } = req.body

//     const post = Post.create({
//         title:title,
//         votes:votes,
//         user: user_id
//     })
//     await post.save()
//     return res.json(post)
// })


app.post('/api/create_user',async (req, res) =>{ //localhost:3000/userId 
    
    const {
        name,
    } = req.body

    const user = User.create({
        name:name,
    })
    await user.save()
    return res.json(user)
})




app.use('/products', productRoutes)

app.use('/categories', categoryRoutes)

app.use('/orders', orderRoutes)
app.listen(process.env.PORT,async () => {
    console.log(`Application started on port 7070!`);
    try {
        await createConnection({
            type:'postgres',
            host:process.env.DB_HOSTNAME,
            port:+process.env.DB_PORT!,
            username:process.env.DB_USERNAME,
            password:process.env.DB_PASSWORD,
            entities:[Product,User,Category,Order],
            synchronize:true,
            logging:false
        })  
    console.log(`Connected to DB`);

     } catch (error) {
           console.log({error})
        }

}) 
console.log("hello")