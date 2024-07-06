import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Base } from "./Base.entity";
import { Product } from "./Product.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity('image')
export class Image extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @ApiProperty({ default: 'http://google.com' })
  url: string

  @ApiProperty({ default: 1 })
  @ManyToOne(() => Product, (product) => product.images)
  @JoinColumn()
  product: Relation<Product>
}