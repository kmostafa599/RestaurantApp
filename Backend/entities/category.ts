import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, OneToMany, JoinTable, ManyToOne, JoinColumn } from "typeorm"
import { Product } from "./product"
import { User } from "./User"

@Entity()
export class Category extends BaseEntity {
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


    @OneToMany(
        () => Product,
        product => product.category,{
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



