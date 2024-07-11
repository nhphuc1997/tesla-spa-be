import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Product } from "./Product.entity.js";
import { File } from "./File.entity.js";

@Entity('image')
export class Image extends File {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  name: string

  @ManyToOne(() => Product, (product) => product.images)
  @JoinColumn()
  product: Relation<Product>

  @Column()
  productId: Relation<Product>
}