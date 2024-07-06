import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./Base.entity";
import { ApiProperty } from "@nestjs/swagger";
import { Product } from "./Product.entity";

@Entity('color')
export class ColorGroup extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @ApiProperty({ default: '#1h9' })
  name: string

  @OneToMany(() => Product, (product) => product.colorGroup)
  @JoinColumn()
  products: Product[]
}