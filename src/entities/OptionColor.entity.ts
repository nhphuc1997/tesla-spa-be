import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Base } from "./Base.entity";
import { ApiProperty } from "@nestjs/swagger";
import { Category } from "./Category.entity";

@Entity('option_color')
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

  @ApiProperty({ default: 1 })
  @ManyToOne(() => Category, (category) => category.optionColor)
  @JoinColumn()
  category: Relation<Category>
}