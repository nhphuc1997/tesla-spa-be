import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./Base.entity.js";

@Entity('customer_demand')
export class CustomerDemand extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  value: string
}