import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Base } from "./Base.entity";
import { ApiProperty } from "@nestjs/swagger";
import { Category } from "./Category.entity";

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

  @ApiProperty({ default: 1 })
  @ManyToOne(() => Category, (category) => category.optionWheel)
  @JoinColumn()
  category: Relation<Category>
}