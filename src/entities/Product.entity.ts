import {
  Column, Entity, JoinColumn,
  ManyToOne, OneToMany, PrimaryGeneratedColumn, Relation
} from "typeorm";
import { Base } from "./Base.entity";
import { ApiProperty } from "@nestjs/swagger";
import { ProductBasicParam } from "./ProductBasicParam.entity";
import { ProductBasicSize } from "./ProductBasicSize.entity";
import { ProductBasicEngine } from "./ProductBasicEngine.entity";
import { Category } from "./Category.entity";
import { ColorGroup } from "./ColorGroup.entity";
import { Image } from "./Image.entity";

@Entity('product')
export class Product extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @ApiProperty({ default: 'honda-civic' })
  name: string

  @Column()
  @ApiProperty({ default: 'honda-civic' })
  shortDesciption: string

  @Column()
  @ApiProperty({ default: 'honda-civic' })
  textIntro: string

  @Column()
  @ApiProperty({ default: '5000' })
  price: string

  @Column()
  @ApiProperty({ default: 'NEW' })
  kind: string

  @Column()
  @ApiProperty({ default: '1' })
  view: string

  @Column()
  @ApiProperty({ default: 'Hj-1' })
  color: string

  @Column()
  @ApiProperty({ default: 5 })
  seat: number

  @Column({ nullable: true })
  @ApiProperty({ default: null })
  thumbnail: string

  @ApiProperty({ default: 1 })
  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn()
  category: Relation<Category>

  @ApiProperty({ default: 1 })
  @ManyToOne(() => ColorGroup)
  @JoinColumn()
  colorGroup: Relation<ColorGroup>

  @ApiProperty({ default: 1 })
  @ManyToOne(() => ProductBasicParam)
  @JoinColumn()
  productBasicParam: Relation<ProductBasicParam>

  @ApiProperty({ default: 1 })
  @ManyToOne(() => ProductBasicSize)
  @JoinColumn()
  productBasicSize: Relation<ProductBasicSize>

  @ApiProperty({ default: 1 })
  @ManyToOne(() => ProductBasicEngine)
  @JoinColumn()
  productBasicEngine: Relation<ProductBasicEngine>

  @OneToMany(() => Image, (image) => image.product)
  @JoinColumn()
  images: Relation<Image[]>
}