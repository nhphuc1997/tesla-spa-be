import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OptionColor } from 'src/entities/OptionColor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OptionColorService extends TypeOrmCrudService<OptionColor> {
  constructor(@InjectRepository(OptionColor) repo: Repository<OptionColor>) {
    super(repo)
  }
}
