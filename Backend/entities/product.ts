import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, OneToMany, JoinTable, ManyToOne, JoinColumn } from "typeorm"
import { Category } from "./category"
import { Order } from "./order"
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

    @ManyToOne(
        ()=> Order,
        order => order.products,{
            nullable:true
        }
        
    )
    @JoinColumn({
        name: "order_id",

    })
    order:Order
    
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



