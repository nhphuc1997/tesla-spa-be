import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/Category.entity';
import { CategoryModule } from './modules/category/category.module';
import { BannerModule } from './modules/banner/banner.module';
import { Banner } from './entities/Banner.entity';
import { ProductModule } from './modules/product/product.module';
import { OptionColor } from './entities/OptionColor.entity';
import { OptionInterator } from './entities/OptionInterator.entity';
import { OptionWheel } from './entities/OptionWheel.entity';
import { Order } from './entities/Order.entity';
import { ProductBasicParam } from './entities/ProductBasicParam.entity';
import { ProductBasicSize } from './entities/ProductBasicSize.entity';
import { ProductBasicEngine } from './entities/ProductBasicEngine.entity';
import { ProductBasicEngineModule } from './modules/product-basic-engine/product-basic-engine.module';
import { ProductBasicSizeModule } from './modules/product-basic-size/product-basic-size.module';
import { ProductBasicParamModule } from './modules/product-basic-param/product-basic-param.module';
import { Product } from './entities/Product.entity';
import { Color } from './entities/Color.entity';
import { ColorModule } from './modules/color/color.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get('APP_DB_HOST'),
        port: +config.get('APP_DB_PORT'),
        username: config.get('APP_DB_USERNAME'),
        password: config.get('APP_DB_PASSWORD'),
        database: config.get('APP_DB_DATABASE'),
        entities: [
          Banner,
          Category,
          OptionColor,
          OptionInterator,
          OptionWheel,
          Order,
          Product,
          ProductBasicParam,
          ProductBasicSize,
          ProductBasicEngine,
          Color
        ],
        autoLoadEntities: true,
        synchronize: true,
      })
    }),
    CategoryModule,
    BannerModule,
    ProductModule,
    ProductBasicEngineModule,
    ProductBasicSizeModule,
    ProductBasicParamModule,
    ColorModule
  ],
})
export class AppModule {}
