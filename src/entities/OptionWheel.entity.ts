import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./Base.entity";
import { ApiProperty } from "@nestjs/swagger";
import { Category } from "./Category.entity";

@Entity('option_wheel')
export class OptionWheel extends Base {
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

  @ManyToOne(() => Category, (category) => category.optionWheel)
  @JoinColumn()
  category: Category
}