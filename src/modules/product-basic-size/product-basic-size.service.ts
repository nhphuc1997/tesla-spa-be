import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductBasicSize } from 'src/entities/ProductBasicSize.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductBasicSizeService extends TypeOrmCrudService<ProductBasicSize> {
  constructor(@InjectRepository(ProductBasicSize) repo: Repository<ProductBasicSize>) {
    super(repo)
  }
}
