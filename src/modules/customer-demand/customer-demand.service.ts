import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerDemand } from 'src/entities/CustomerDemand.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerDemandService extends TypeOrmCrudService<CustomerDemand> {
  constructor(@InjectRepository(CustomerDemand) repo: Repository<CustomerDemand>) {
    super(repo)
  }
}
