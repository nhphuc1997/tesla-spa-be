import { Module } from '@nestjs/common';
import { ProductBasicParamService } from './product-basic-param.service';
import { ProductBasicParamController } from './product-basic-param.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductBasicParam } from 'src/entities/ProductBasicParam.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductBasicParam])
  ],
  controllers: [ProductBasicParamController],
  providers: [ProductBasicParamService],
})
export class ProductBasicParamModule {}
