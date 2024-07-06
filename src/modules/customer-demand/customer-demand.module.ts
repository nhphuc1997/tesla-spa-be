import { Module } from '@nestjs/common';
import { CustomerDemandService } from './customer-demand.service';
import { CustomerDemandController } from './customer-demand.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerDemand } from 'src/entities/CustomerDemand.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CustomerDemand])
  ],
  controllers: [CustomerDemandController],
  providers: [CustomerDemandService],
})
export class CustomerDemandModule { }
