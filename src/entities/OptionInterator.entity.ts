import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./Base.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity('option_interator')
export class OptionInterator extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @ApiProperty({ default: '#123123' })
  description: string

  @Column()
  @ApiProperty({ default: 'http://google.com' })
  imageUrl: string

  @Column()
  @ApiProperty({ default: '3000' })
  price: string
}