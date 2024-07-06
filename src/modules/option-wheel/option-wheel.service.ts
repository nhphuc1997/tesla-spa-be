import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OptionWheel } from 'src/entities/OptionWheel.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OptionWheelService extends TypeOrmCrudService<OptionWheel> {
  constructor(@InjectRepository(OptionWheel) repo: Repository<OptionWheel>) {
    super(repo)
  }
}
