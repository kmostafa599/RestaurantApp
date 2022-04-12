import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, OneToMany, JoinTable, ManyToOne, JoinColumn } from "typeorm"
import { OrderItem } from "./order_item"
import { Product } from "./product"
import { User } from "./User"

@Entity()
export class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        nullable:true
    })
    name:string
    
    @Column()
    mobile: string

    @Column()
    address: string

    @Column()
    city: string

    @Column({
        nullable:true
    })
    finished: Boolean

    // @OneToMany(
    //     () => Product,
    //     product => product.orders,{
    //         nullable:false
    //     }
    // )
    // @JoinTable({
    //     name:"products"
    // })
    // products: Product[]

    @OneToMany(
        ()=> OrderItem,
        order_item => order_item.order
    )
    @JoinColumn({
        name: "order_item",

    })
    order_items:OrderItem[]

   
}



