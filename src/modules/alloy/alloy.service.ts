import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Alloy } from 'src/entities/Alloy.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlloyService extends TypeOrmCrudService<Alloy> {
  constructor(@InjectRepository(Alloy) repo: Repository<Alloy>) {
    super(repo)
  }
}
