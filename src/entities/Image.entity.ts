import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Base } from "./Base.entity";
import { Product } from "./Product.entity";

@Entity('image')
export class Image extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => Product, (product) => product.images)
  @JoinColumn()
  product: Relation<Product>
}