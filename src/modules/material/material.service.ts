import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Material } from 'src/entities/Material.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MaterialService extends TypeOrmCrudService<Material> {
  constructor(@InjectRepository(Material) repo: Repository<Material>) {
    super(repo)
  }
}
