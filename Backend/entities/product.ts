import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, OneToMany, JoinTable, ManyToOne, JoinColumn } from "typeorm"
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


    @ManyToOne(
        () => User,
        user => user.posts,{
            nullable:false
        }
    )
    @JoinColumn({
        name: "user_id",

    })
    user: User

    
    
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



