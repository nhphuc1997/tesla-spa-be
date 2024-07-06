import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./Base.entity";
import { ApiProperty } from "@nestjs/swagger";

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
}