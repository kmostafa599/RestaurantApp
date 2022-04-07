import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, OneToMany, JoinTable, ManyToOne, JoinColumn } from "typeorm"
import { Product } from "./product"
import { User } from "./User"

@Entity()
export class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number



    @OneToMany(
        () => Product,
        product => product.order,{
            nullable:false
        }
    )
    products: Product[]

    
    
    // @JoinTable({
    //     name: "post_tag",
    //     joinColumn: {
    //         name: "post",
    //         referencedColumnName: 'id'
    //     },
    //     inverseJoinColumn: {

    //         name: "tag",
    //         referencedColumnName: 'id'
    //     }
    // })
    // tags: Tag[]
}



