import { Column, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./Base.entity";

export class Car extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  price: string
}