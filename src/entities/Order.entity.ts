import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Base } from "./Base.entity.js";
import { Product } from "./Product.entity.js";
import { Interior } from "./Interior.entity.js";
import { Exterior } from "./Exterior.entity.js";
import { Alloy } from "./Alloy.entity.js";

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

  @ManyToOne(() => Interior, { eager: true })
  @JoinColumn()
  interior: Relation<Interior>

  @ManyToOne(() => Exterior, { eager: true })
  exterior: Relation<Exterior>

  @ManyToOne(() => Alloy, { eager: true })
  alloy: Relation<Alloy>

  @Column()
  interiorId: Relation<Interior>

  @Column()
  exteriorId: Relation<Exterior>

  @Column()
  alloyId: Relation<Alloy>
}
