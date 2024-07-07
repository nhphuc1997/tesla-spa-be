import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, Relation } from "typeorm";
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
  @ApiProperty({ default: '123456' })
  userId: string

  @Column()
  @ApiProperty({ default: '012345678' })
  phoneNumber: string

  @ApiProperty({ default: 1 })
  @ManyToOne(() => Product)
  @JoinTable()
  product: Relation<Product>

  @ApiProperty({ default: 1 })
  @ManyToOne(() => OptionColor)
  @JoinTable()
  optionColor: Relation<OptionColor>

  @ApiProperty({ default: 1 })
  @ManyToOne(() => OptionWheel)
  optionWheel: Relation<OptionWheel>

  @ApiProperty({ default: 1 })
  @ManyToOne(() => OptionInterator)
  optionInterator: Relation<OptionInterator>
}
