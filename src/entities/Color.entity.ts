import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./Base.entity";
import { ApiProperty } from "@nestjs/swagger";
import { Product } from "./Product.entity";

@Entity('color')
export class Color extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @ApiProperty({ default: '#123123' })
  color: string

  @ManyToOne(() => Product, (product) => product.colors)
  @JoinColumn()
  product: Product
}