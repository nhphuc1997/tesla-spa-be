import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { File } from "./File.entity.js";
import { Category } from "./Category.entity.js";

@Entity('option_wheel')
export class OptionWheel extends File {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  description: string

  @Column({ nullable: true, default: 0 })
  price: string

  @Column({ nullable: false })
  name: string

  @ManyToOne(() => Category, (category) => category.optionColor)
  @JoinColumn()
  category: Relation<Category>

  @Column()
  categoryId: Relation<Category>
}