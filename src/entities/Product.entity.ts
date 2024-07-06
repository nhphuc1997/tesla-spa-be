import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./Base.entity";
import { ApiProperty } from "@nestjs/swagger";
import { ProductBasicParam } from "./ProductBasicParam.entity";
import { ProductBasicSize } from "./ProductBasicSize.entity";
import { ProductBasicEngine } from "./ProductBasicEngine.entity";
import { Category } from "./Category.entity";

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
  @OneToOne(() => Category)
  @JoinColumn()
  category: Category

  @ApiProperty({ default: 1 })
  @OneToOne(() => ProductBasicParam)
  @JoinColumn()
  productBasicParam: ProductBasicParam

  @ApiProperty({ default: 1 })
  @OneToOne(() => ProductBasicSize)
  @JoinColumn()
  productBasicSize: ProductBasicSize

  @ApiProperty({ default: 1 })
  @OneToOne(() => ProductBasicEngine)
  @JoinColumn()
  productBasicEngine: ProductBasicEngine
}