import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Base } from "./Base.entity";
import { ApiProperty } from "@nestjs/swagger";
import { ProductBasicParam } from "./ProductBasicParam.entity";
import { ProductBasicSize } from "./ProductBasicSize.entity";
import { ProductBasicEngine } from "./ProductBasicEngine.entity";
import { Category } from "./Category.entity";
import { Color } from "./Color.entity";

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

  @ApiProperty({ default: 1 })
  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn()
  category: Relation<Category>

  @OneToMany(() => Color, (color) => color.product)
  @JoinColumn()
  colors: Relation<Color[]>

  @ApiProperty({ default: 1 })
  @OneToOne(() => ProductBasicParam)
  @JoinColumn()
  productBasicParam: Relation<ProductBasicParam>

  @ApiProperty({ default: 1 })
  @OneToOne(() => ProductBasicSize)
  @JoinColumn()
  productBasicSize: Relation<ProductBasicSize>

  @ApiProperty({ default: 1 })
  @OneToOne(() => ProductBasicEngine)
  @JoinColumn()
  productBasicEngine: Relation<ProductBasicEngine>
}