import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductBasicEngine } from 'src/entities/ProductBasicEngine.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductBasicEngineService extends TypeOrmCrudService<ProductBasicEngine> {
  constructor(@InjectRepository(ProductBasicEngine) repo: Repository<ProductBasicEngine>) {
    super(repo)
  }
}
