import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./Base.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity('product_basic_param')
export class ProductBasicParam extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @ApiProperty({ default: '402mi' })
  total_capacity: string

  @Column()
  @ApiProperty({ default: '130mph' })
  moment: string

  @Column()
  @ApiProperty({ default: '3.1sec' })
  acceleration: string
}