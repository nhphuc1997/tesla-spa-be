import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./Base.entity";

@Entity('car')
export class Car extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  price: string
}