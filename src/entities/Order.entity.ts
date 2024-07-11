import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Base } from "./Base.entity.js";
import { Product } from "./Product.entity.js";
import { OptionColor } from "./OptionColor.entity.js";
import { OptionWheel } from "./OptionWheel.entity.js";
import { OptionInterator } from "./OptionInterator.entity.js";


@Entity('order')
export class Order extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  orderId: string

  @Column()
  userId: string

  @Column()
  phoneNumber: string

  @ManyToOne(() => Product)
  @JoinTable()
  product: Relation<Product>

  @ManyToOne(() => OptionColor)
  @JoinTable()
  optionColor: Relation<OptionColor>

  @ManyToOne(() => OptionWheel)
  optionWheel: Relation<OptionWheel>

  @ManyToOne(() => OptionInterator)
  optionInterator: Relation<OptionInterator>
}
