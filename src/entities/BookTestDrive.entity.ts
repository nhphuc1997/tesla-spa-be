import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Base } from "./Base.entity.js";
import { Product } from "./Product.entity.js";

@Entity('book_test_drive')
export class BookTestDrive extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  userId: string

  @Column({ nullable: false })
  email: string

  @Column({ nullable: true })
  distanceRadius: string

  @Column({ nullable: true })
  postCode: string

  @Column({ nullable: true })
  pickedDate: string

  @Column({ nullable: true })
  contactNumber: string

  @Column({ nullable: true })
  firstName: string

  @Column({ nullable: true })
  lastName: string

  @ManyToOne(() => Product)
  @JoinColumn()
  product: Relation<Product>

  @Column()
  productId: Relation<Product>
}