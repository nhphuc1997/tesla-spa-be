import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Base } from "./Base.entity";
import { ApiProperty } from "@nestjs/swagger";
import { Product } from "./Product.entity";
import { OptionColor } from "./OptionColor.entity";
import { OptionWheel } from "./OptionWheel.entity";
import { OptionInterator } from "./OptionInterator.entity";

@Entity('order')
export class Order extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @ApiProperty({ default: '123456' })
  orderId: string

  @Column()
  @ApiProperty({ default: 1 })
  productId: number

  @Column()
  @ApiProperty({ default: 1 })
  userId: number

  @Column()
  @ApiProperty({ default: '012345678' })
  phoneNumber: string

  @ApiProperty({ default: 1 })
  @ManyToMany(() => Product, (product) => product.orders)
  @JoinTable()
  products: Relation<Product[]>

  @ApiProperty({ default: 1 })
  @ManyToMany(() => OptionColor)
  @JoinTable()
  optionColors: Relation<OptionColor[]>

  @ApiProperty({ default: 1 })
  @ManyToMany(() => OptionWheel)
  @JoinTable()
  optionWheels: Relation<OptionWheel[]>

  @ApiProperty({ default: 1 })
  @ManyToMany(() => OptionInterator)
  @JoinTable()
  optionInterator: Relation<OptionInterator[]>
}