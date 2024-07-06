import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./Base.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity('option')
export class Option extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @ApiProperty({ default: '18"" Photon Wheels Included All-Season Tires Range (EPA est.) : 341mi.' })
  description: string

  @Column()
  @ApiProperty({ default: true })
  imageUrl: string

  @Column()
  @ApiProperty({ default: '12000' })
  price: string
}