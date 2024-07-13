import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Category } from "./Category.entity.js";
import { Base } from "./Base.entity.js";

@Entity('technical')
export class Technical extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  name: string

  @Column({ nullable: true })
  maxOutput: string

  @Column({ nullable: true })
  topSpeech: string

  @Column({ nullable: false })
  acceleration: string

  @Column({ nullable: false })
  unladenWeight: string

  @Column({ nullable: false })
  grossWeight: string

  @Column({ nullable: false })
  roofLoad: string

  @Column({ nullable: false })
  unbraked: string

  @Column({ nullable: false })
  at12Gradient: string

  @Column({ nullable: false })
  at8Gradient: string

  @Column({ nullable: false })
  luggageCompartment: string

  @Column({ nullable: false })
  transmission: string

  @Column()
  categoryId: Relation<Category>

  @ManyToOne(() => Category,)
  @JoinColumn()
  category: Relation<Category>
}