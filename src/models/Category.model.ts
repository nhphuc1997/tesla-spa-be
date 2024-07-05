import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./Base.model";

@Entity()
export class Category extends Base {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  value: string
}