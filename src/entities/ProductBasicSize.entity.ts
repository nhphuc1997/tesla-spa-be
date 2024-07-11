import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./Base.entity.js";

@Entity('product_basic_size')
export class ProductBasicSize extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  name: string

  @Column({ nullable: true })
  width: string

  @Column({ nullable: true })
  length: string

  @Column({ nullable: true })
  height: string

  @Column({ nullable: true })
  widthBasic: string
}