import {
  Column, Entity, JoinColumn,
  ManyToOne, OneToMany, PrimaryGeneratedColumn, Relation
} from "typeorm";
import { Category } from "./Category.entity.js";
import { ColorGroup } from "./ColorGroup.entity.js";
import { File } from "./File.entity.js";
import { Technical } from "./Technical.entity.js";
import { ProductImage } from "./ProductImage.entity.js";

@Entity('product')
export class Product extends File {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  name: string

  @Column({ nullable: true })
  shortDescription: string

  @Column({ nullable: true, type: 'text' })
  description: string

  @Column({ nullable: true })
  price: number

  @Column({ nullable: true, default: 'NEW' })
  kind: string

  @Column({ nullable: true })
  color: string

  @Column({ nullable: true, default: 4 })
  seat: number

  @Column({ nullable: true })
  manufactureYear: number

  @ManyToOne(() => Category)
  @JoinColumn()
  category: Relation<Category>

  @ManyToOne(() => ColorGroup)
  @JoinColumn()
  colorGroup: Relation<ColorGroup>

  @ManyToOne(() => Technical)
  @JoinColumn()
  technical: Relation<Technical>

  @OneToMany(() => ProductImage, productImage => productImage.product)
  @JoinColumn()
  images: Relation<ProductImage[]>

  @Column()
  categoryId: Relation<Category>

  @Column()
  colorGroupId: Relation<ColorGroup>

  @Column()
  technicalId: Relation<Technical>
}