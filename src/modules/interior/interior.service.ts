import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Interior } from 'src/entities/Interior.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InteriorService extends TypeOrmCrudService<Interior> {
  constructor(@InjectRepository(Interior) repo: Repository<Interior>) {
    super(repo)
  }
}
