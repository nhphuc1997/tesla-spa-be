import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./Base.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity('product_basic_size')
export class ProductBasicSize extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @ApiProperty({ default: 'CITY G	| CITY L | CITY RS' })
  name: string

  @Column()
  @ApiProperty({ default: '1467' })
  width: string

  @Column()
  @ApiProperty({ default: '1748' })
  length: string

  @Column()
  @ApiProperty({ default: '4580' })
  height: string

  @Column()
  @ApiProperty({ default: '2600' })
  widthBasic: string
}