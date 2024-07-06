import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductBasicParam } from 'src/entities/ProductBasicParam.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductBasicParamService extends TypeOrmCrudService<ProductBasicParam> {
  constructor(@InjectRepository(ProductBasicParam) repo: Repository<ProductBasicParam>) {
    super(repo)
  }
}
