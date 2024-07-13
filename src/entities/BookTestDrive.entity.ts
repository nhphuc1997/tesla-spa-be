import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Base } from "./Base.entity.js";
import { Product } from "./Product.entity.js";

@Entity('book_test_drive')
export class BookTestDrive extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  userId: string

  @Column({ nullable: true })
  contactNumber: string

  @Column({ nullable: true })
  email: string

  @ManyToOne(() => Product)
  @JoinColumn()
  product: Relation<Product>

  @Column()
  productId: Relation<Product>
}