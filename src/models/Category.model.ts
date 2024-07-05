import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./Base.model";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Category extends Base {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  @ApiProperty({default: 'honda'})
  name: string

  @Column()
  @ApiProperty({default: 'honda'})
  value: string
}