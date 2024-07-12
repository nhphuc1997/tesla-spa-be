import {
  Column, Entity, JoinColumn,
  ManyToOne, OneToMany, PrimaryGeneratedColumn, Relation
} from "typeorm";
import { Category } from "./Category.entity.js";
import { ColorGroup } from "./ColorGroup.entity.js";
import { ProductBasicParam } from "./ProductBasicParam.entity.js";
import { ProductBasicSize } from "./ProductBasicSize.entity.js";
import { ProductBasicEngine } from "./ProductBasicEngine.entity.js";
import { Image } from "./Image.entity.js";
import { File } from "./File.entity.js";

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
  textIntro: string

  @Column({ nullable: true, default: 0 })
  price: number

  @Column({ nullable: true, default: 'NEW' })
  kind: string

  @Column({ nullable: true })
  color: string

  @Column({ nullable: true, default: 4 })
  seat: number

  @Column({ nullable: true })
  manufactureYear: number

  @ManyToOne(() => Category, (category) => category.products, { eager: true })
  @JoinColumn()
  category: Relation<Category>

  @Column()
  categoryId: Relation<Category>

  @ManyToOne(() => ColorGroup)
  @JoinColumn()
  colorGroup: Relation<ColorGroup>

  @Column()
  colorGroupId: Relation<ColorGroup>

  @ManyToOne(() => ProductBasicParam)
  @JoinColumn()
  productBasicParam: Relation<ProductBasicParam>

  @Column()
  productBasicParamId: Relation<ProductBasicParam>

  @ManyToOne(() => ProductBasicSize)
  @JoinColumn()
  productBasicSize: Relation<ProductBasicSize>

  @Column()
  productBasicSizeId: Relation<ProductBasicSize>

  @ManyToOne(() => ProductBasicEngine)
  @JoinColumn({})
  productBasicEngine: Relation<ProductBasicEngine>

  @Column({})
  productBasicEngineId: Relation<ProductBasicEngine>

  @OneToMany(() => Image, (image) => image.product)
  @JoinColumn()
  images: Relation<Image[]>
}