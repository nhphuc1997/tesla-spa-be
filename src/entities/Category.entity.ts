import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./Base.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity('category')
export class Category extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column('text')
  @ApiProperty({ default: 'honda' })
  name: string

  @Column('text')
  @ApiProperty({ default: 'honda' })
  value: string
}