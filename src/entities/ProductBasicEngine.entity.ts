import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./Base.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity('product_basic_engine')
export class ProductBasicEngine extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @ApiProperty({ default: 'CITY G	| CITY L | CITY RS' })
  name: string

  @Column()
  @ApiProperty({ default: '1.5L i-VTEC DOHC 4 xi lanh thẳng hàng, 16 van' })
  code: string

  @Column()
  @ApiProperty({ default: 'I4, 4 strokes' })
  type: string

  @Column()
  @ApiProperty({ default: '1498' })
  displacementVol: string

  @Column()
  @ApiProperty({ default: '119 (89 kW)/6.600' })
  maxRound: string

  @Column()
  @ApiProperty({ default: '145/4.300' })
  maxMoment: string

  @Column()
  @ApiProperty({ default: 'EURO 4,7' })
  standH2O: string

  @Column()
  @ApiProperty({ default: 'Kiểu MacPherson' })
  gear: string

  @Column()
  @ApiProperty({ default: 'AWD' })
  moveSystem: string

  @Column()
  @ApiProperty({ default: 'Eco/Normal/Sport' })
  driverMode: string
}