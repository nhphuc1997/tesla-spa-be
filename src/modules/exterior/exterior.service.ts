import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Exterior } from 'src/entities/Exterior.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExteriorService extends TypeOrmCrudService<Exterior> {
  constructor(@InjectRepository(Exterior) repo: Repository<Exterior>) {
    super(repo)
  }
}
