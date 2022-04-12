import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, OneToMany, JoinTable, ManyToOne, JoinColumn } from "typeorm"
import { Category } from "./category"
import { Order } from "./order"
import { Product } from "./product"
import { User } from "./User"

@Entity()
export class OrderItem extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number




    @ManyToOne(
        () => Order,
        order => order.order_items,{
            nullable:true
        }
    )
    @JoinColumn({
        name: "order_id",

    })
    order: Order

    @ManyToOne(
        () => Product,
        product => product.order_items
    )
    @JoinColumn({
        name:"product_id"
    })
    products: Product

    @Column({
        nullable:true
    })
    quantity:number






    
}



