import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegistryDriven } from 'src/entities/RegistryDriven.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RegistryDrivenService extends TypeOrmCrudService<RegistryDriven> {
  constructor(@InjectRepository(RegistryDriven) repo: Repository<RegistryDriven>) {
    super(repo)
  }
}
