import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./Base.entity.js";

@Entity('product_basic_param')
export class ProductBasicParam extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  name: string

  @Column({ nullable: true })
  total_capacity: string

  @Column({ nullable: true })
  moment: string

  @Column({ nullable: true })
  acceleration: string
}