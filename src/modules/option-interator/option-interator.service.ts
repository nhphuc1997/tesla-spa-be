import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OptionInterator } from 'src/entities/OptionInterator.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OptionInteratorService extends TypeOrmCrudService<OptionInterator> {
  constructor(@InjectRepository(OptionInterator) repo: Repository<OptionInterator>) {
    super(repo)
  }
}
