import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Base } from "./Base.entity.js";
import { Product } from "./Product.entity.js";

@Entity('registry_driven')
export class RegistryDriven extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  userId: string

  @Column({ nullable: true })
  phoneNumberFromEmail: string

  @Column({ nullable: true })
  phoneNumberFromForm: string

  @Column({ nullable: true })
  email: string

  @ManyToOne(() => Product)
  @JoinColumn()
  product: Relation<Product>

  @Column()
  productId: Relation<Product>
}