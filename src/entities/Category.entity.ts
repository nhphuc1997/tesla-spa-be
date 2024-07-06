import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Base } from "./Base.entity";
import { ApiProperty } from "@nestjs/swagger";
import { Product } from "./Product.entity";
import { OptionColor } from "./OptionColor.entity";
import { OptionWheel } from "./OptionWheel.entity";
import { OptionInterator } from "./OptionInterator.entity";

@Entity('category')
export class Category extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @ApiProperty({ default: 'honda' })
  name: string

  @Column()
  @ApiProperty({ default: 'honda' })
  value: string

  @OneToMany(() => Product, (product) => product.category)
  @JoinColumn()
  products: Relation<Product>

  @OneToMany(() => OptionColor, (color) => color.category)
  @JoinColumn()
  optionColor: Relation<OptionColor[]>

  @OneToMany(() => OptionWheel, (wheel) => wheel.category)
  @JoinColumn()
  optionWheel: Relation<OptionWheel[]>

  @OneToMany(() => OptionInterator, (interator) => interator.category)
  @JoinColumn()
  optionInterator: Relation<OptionInterator[]>
}