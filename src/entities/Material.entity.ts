import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Relation } from "typeorm";
import { File } from "./File.entity.js";
import { Category } from "./Category.entity.js";

@Entity('material')
export class Material extends File {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  name: string

  @Column({ nullable: true })
  description: string

  @Column({ nullable: true })
  price: string

  @Column()
  categoryId: Relation<Category>

  @ManyToOne(() => Category,)
  @JoinColumn()
  category: Relation<Category>
}