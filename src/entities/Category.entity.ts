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

  @OneToMany(() => Material, material => material)
  @JoinColumn()
  material: Relation<Material>

  @OneToMany(() => Exterior, exterior => exterior)
  @JoinColumn()
  exterior: Relation<Exterior>

  @OneToMany(() => Interior, interior => interior)
  @JoinColumn()
  interior: Relation<Interior>

  @OneToMany(() => Alloy, alloy => alloy)
  @JoinColumn()
  alloy: Relation<Alloy>
}