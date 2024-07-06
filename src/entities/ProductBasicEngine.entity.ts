import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./Base.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity('product_basic_engine')
export class ProductBasicEngine extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @ApiProperty({ default: 'A25A-FXS' })
  code: string

  @Column()
  @ApiProperty({ default: 'I4, 4 strokes' })
  type: string

  @Column()
  @ApiProperty({ default: '2487' })
  displacementVol: string

  @Column()
  @ApiProperty({ default: '(140kw) 188hp/6000rpm' })
  maxRound: string

  @Column()
  @ApiProperty({ default: '(140kw) 188hp/6000rpm' })
  maxMoment: string

  @Column()
  @ApiProperty({ default: 'EURO 6' })
  standH2O: string

  @Column()
  @ApiProperty({ default: 'CVT' })
  gear: string

  @Column()
  @ApiProperty({ default: 'AWD' })
  moveSystem: string

  @Column()
  @ApiProperty({ default: 'Eco/Normal/Sport' })
  driverMode: string
}