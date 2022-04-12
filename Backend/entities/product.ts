import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, OneToMany, JoinTable, ManyToOne, JoinColumn } from "typeorm"
import { Category } from "./category"
import { Order } from "./order"
import { OrderItem } from "./order_item"
import { User } from "./User"

@Entity()
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({
        nullable: true,
    })
    contents: string

    @Column()
    count: number

    @Column({
        nullable:true
    })
    image: string
    @Column({
        nullable:true
    })
    cart: Boolean


    @ManyToOne(
        () => User,
        user => user.products,{
            nullable:true
        }
    )
    @JoinColumn({
        name: "user_id",

    })
    user: User
    @ManyToOne(
        ()=> Category,
        category => category.products,{
            nullable:true
        }
        
    )
    @JoinColumn({
        name: "category_id",

    })
    category:Category

    // @ManyToMany(
    //     ()=> Order,
    //     order => order.products,{
    //         nullable:true
    //     }
        
    // )
    
    // @JoinTable({
    //     name: "product_order",
    //     joinColumn: {
    //         name: "product",
    //         referencedColumnName: 'id'
    //     },
    //     inverseJoinColumn: {

    //         name: "order",
    //         referencedColumnName: 'id'
    //     }
    // })
    // orders: Order[]

    @OneToMany(
        ()=> OrderItem,
        order_item => order_item.products
    )
    @JoinColumn({
        name: "order_item",

    })
    order_items:OrderItem
}



