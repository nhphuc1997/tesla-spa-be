import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./Base.entity";
import { ApiProperty } from "@nestjs/swagger";
import { Product } from "./Product.entity";

@Entity('category')
export class Category extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column('text')
  @ApiProperty({ default: 'honda' })
  name: string

  @Column('text')
  @ApiProperty({ default: 'honda' })
  value: string

  @OneToMany(() => Product, (product) => product.category)
  @JoinColumn()
  products: Product[]
}