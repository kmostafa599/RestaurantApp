import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, OneToMany, JoinTable, ManyToOne, JoinColumn } from "typeorm"
import { Product } from "./product"
import { User } from "./User"

@Entity()
export class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    mobile: string

    @Column()
    address: string

    @Column()
    city: string

    @Column()
    finished: Boolean

    @OneToMany(
        () => Product,
        product => product.orders,{
            nullable:false
        }
    )
    @JoinTable({
        name:"products"
    })
    products: Product[]
}



