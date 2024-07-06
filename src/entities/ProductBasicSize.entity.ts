import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./Base.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity('product_basic_size')
export class ProductBasicSize extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @ApiProperty({ default: '1000' })
  width: string

  @Column()
  @ApiProperty({ default: '1000' })
  length: string

  @Column()
  @ApiProperty({ default: '1000' })
  height: string

  @Column()
  @ApiProperty({ default: '1000' })
  widthBasic: string
}