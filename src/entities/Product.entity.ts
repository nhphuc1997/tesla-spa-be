import {
  Column, Entity, JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne, OneToMany, PrimaryGeneratedColumn, Relation
} from "typeorm";
import { Base } from "./Base.entity.js";
import { Category } from "./Category.entity.js";
import { ColorGroup } from "./ColorGroup.entity.js";
import { ProductBasicParam } from "./ProductBasicParam.entity.js";
import { ProductBasicSize } from "./ProductBasicSize.entity.js";
import { ProductBasicEngine } from "./ProductBasicEngine.entity.js";
import { Image } from "./Image.entity.js";

@Entity('product')
export class Product extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  name: string

  @Column()
  shortDesciption: string

  @Column()
  textIntro: string

  @Column({ nullable: true, default: 0 })
  price: number

  @Column({ default: 'NEW' })
  kind: string

  @Column({ nullable: false })
  color: string

  @Column({ default: 4 })
  seat: number

  @Column({ nullable: true })
  thumbnail: string

  @ManyToOne(() => Category, (category) => category.products, { eager: true })
  @JoinColumn()
  category: Relation<Category>

  @ManyToOne(() => ColorGroup)
  @JoinColumn()
  colorGroup: Relation<ColorGroup>

  @ManyToOne(() => ProductBasicParam)
  @JoinColumn()
  productBasicParam: Relation<ProductBasicParam>

  @ManyToOne(() => ProductBasicSize)
  @JoinColumn()
  productBasicSize: Relation<ProductBasicSize>

  @ManyToOne(() => ProductBasicEngine)
  @JoinColumn({})
  productBasicEngine: Relation<ProductBasicEngine>

  @OneToMany(() => Image, (image) => image.product)
  @JoinColumn()
  images: Relation<Image[]>
}