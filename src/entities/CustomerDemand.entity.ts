import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./Base.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity('customer_demand')
export class CustomerDemand extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @ApiProperty({ default: 'Xe thể thao' })
  name: string

  @Column()
  @ApiProperty({ default: 'SPORT' })
  value: string
}