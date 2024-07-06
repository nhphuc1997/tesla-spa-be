import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./Base.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity('banner')
export class Banner extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @ApiProperty({ default: 'http://google.com' })
  url: string

  @Column()
  @ApiProperty({ default: 1 })
  orderNo: number

  @Column()
  @ApiProperty({ default: true })
  active: string
}