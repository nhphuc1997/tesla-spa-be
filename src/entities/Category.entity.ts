import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Base } from "./Base.entity.js";
import { Material } from "./Material.entity.js";
import { Exterior } from "./Exterior.entity.js";
import { Interior } from "./Interior.entity.js";
import { Alloy } from "./Alloy.entity.js";

@Entity('category')
export class Category extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(() => Material, material => material.category)
  @JoinColumn()
  material: Relation<Material>

  @OneToMany(() => Exterior, exterior => exterior.category)
  @JoinColumn()
  exterior: Relation<Exterior>

  @OneToMany(() => Interior, interior => interior.category)
  @JoinColumn()
  interior: Relation<Interior>

  @OneToMany(() => Alloy, alloy => alloy.category)
  @JoinColumn()
  alloy: Relation<Alloy>
}