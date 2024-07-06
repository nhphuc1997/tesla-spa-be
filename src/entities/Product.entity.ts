import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./Base.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity('product')
export class Product extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @ApiProperty({ default: 'honda-civic' })
  name: string

  @Column()
  @ApiProperty({ default: 'honda-civic' })
  shortDesciption: string

  @Column()
  @ApiProperty({ default: 'honda-civic' })
  textIntro: string

  @Column()
  @ApiProperty({ default: '5000' })
  price: string

  @Column()
  @ApiProperty({ default: 'NEW' })
  kind: string

  @Column()
  @ApiProperty({ default: '1' })
  view: string

  
}