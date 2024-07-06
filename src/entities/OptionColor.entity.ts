import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./Base.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity('option')
export class OptionColor extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @ApiProperty({ default: '#41232' })
  description: string

  @Column()
  @ApiProperty({ default: 'http://google.com' })
  imageUrl: string

  @Column()
  @ApiProperty({ default: '2222' })
  price: string
}