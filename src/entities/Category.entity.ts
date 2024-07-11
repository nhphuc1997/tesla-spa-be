import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Base } from "./Base.entity.js";
import { Product } from "./Product.entity.js";
import { OptionColor } from "./OptionColor.entity.js";
import { OptionWheel } from "./OptionWheel.entity.js";
import { OptionInterator } from "./OptionInterator.entity.js";

@Entity('category')
export class Category extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

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