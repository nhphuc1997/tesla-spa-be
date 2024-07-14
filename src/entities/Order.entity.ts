import { Column, Entity, Generated, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Relation } from "typeorm";
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
  @Generated('uuid')
  orderId: string

  @Column()
  userId: string

  @Column({ nullable: false })
  contactNumber: string

  @Column({ nullable: false })
  email: string

  @ManyToOne(() => Interior, { eager: true })
  @JoinColumn()
  interior: Relation<Interior>

  @ManyToOne(() => Exterior, { eager: true })
  @JoinColumn()
  exterior: Relation<Exterior>

  @ManyToOne(() => Alloy, { eager: true })
  @JoinColumn()
  alloy: Relation<Alloy>

  @ManyToOne(() => Product, { eager: true })
  @JoinColumn()
  product: Relation<Product>

  @Column()
  interiorId: Relation<Interior>

  @Column()
  exteriorId: Relation<Exterior>

  @Column()
  alloyId: Relation<Alloy>

  @Column()
  productId: Relation<Product>
}
