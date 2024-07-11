import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./Base.entity.js";

@Entity('product_basic_engine')
export class ProductBasicEngine extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  name: string

  @Column({ nullable: true })
  code: string

  @Column({ nullable: true })
  type: string

  @Column({ nullable: true })
  displacementVol: string

  @Column({ nullable: true })
  maxRound: string

  @Column({ nullable: true })
  maxMoment: string

  @Column({ nullable: true })
  standH2O: string

  @Column({ nullable: true })
  gear: string

  @Column({ nullable: true })
  moveSystem: string

  @Column({ nullable: true })
  driverMode: string
}