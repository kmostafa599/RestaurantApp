import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, OneToMany, JoinTable, ManyToOne } from "typeorm"
import { Product } from "./product"

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
    

    
    // @ManyToOne(()=>User,(user)=>user.post)
    @OneToMany(
        ()=> Product,
        post => post.user
    )
    posts:Product[]

    
}

   

