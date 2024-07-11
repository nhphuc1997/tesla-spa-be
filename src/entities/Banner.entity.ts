import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { File } from "./File.entity.js";

@Entity('banner')
export class Banner extends File {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  orderNo: number

  @Column({ nullable: true, default: 1 })
  active: boolean
}