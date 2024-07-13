import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Technical } from 'src/entities/Technical.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TechnicalService extends TypeOrmCrudService<Technical> {
  constructor(@InjectRepository(Technical) repo: Repository<Technical>) {
    super(repo)
  }
}
