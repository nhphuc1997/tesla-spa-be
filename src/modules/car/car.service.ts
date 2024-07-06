import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from 'src/entities/Car.entiry';
import { Repository } from 'typeorm';

@Injectable()
export class CarService extends TypeOrmCrudService<Car> {
  constructor(@InjectRepository(Car) repo: Repository<Car>) {
    super(repo)
  }
}
