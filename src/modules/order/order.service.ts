import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/entities/Order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService extends TypeOrmCrudService<Order> {
  constructor(@InjectRepository(Order) repo: Repository<Order>) {
    super(repo)
  }
}
