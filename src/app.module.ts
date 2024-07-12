import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BannerModule } from './modules/banner/banner.module';
import { ProductModule } from './modules/product/product.module';
import { CategoryModule } from './modules/category/category.module';
import { OrderModule } from './modules/order/order.module';
import { ColorGroupModule } from './modules/color-group/color-group.module';
import { RegistryDrivenModule } from './modules/registry-driven/registry-driven.module';
import { OptionColorModule } from './modules/option-color/option-color.module';
import { OptionInteratorModule } from './modules/option-interator/option-interator.module';
import { OptionWheelModule } from './modules/option-wheel/option-wheel.module';
import { ProductBasicParamModule } from './modules/product-basic-param/product-basic-param.module';
import { ProductBasicSizeModule } from './modules/product-basic-size/product-basic-size.module';
import { ProductBasicEngineModule } from './modules/product-basic-engine/product-basic-engine.module';
import { Banner } from './entities/Banner.entity';
import { Category } from './entities/Category.entity';
import { OptionColor } from './entities/OptionColor.entity';
import { OptionInterator } from './entities/OptionInterator.entity';
import { OptionWheel } from './entities/OptionWheel.entity';
import { Order } from './entities/Order.entity';
import { Product } from './entities/Product.entity';
import { ProductBasicParam } from './entities/ProductBasicParam.entity';
import { ProductBasicSize } from './entities/ProductBasicSize.entity';
import { ProductBasicEngine } from './entities/ProductBasicEngine.entity';
import { ColorGroup } from './entities/ColorGroup.entity';
import { CustomerDemand } from './entities/CustomerDemand.entity';
import { Image } from './entities/Image.entity';

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
          ColorGroup,
          Image,
          CustomerDemand,
        ],
        autoLoadEntities: true,
        synchronize: true,
      })
    }),
    BannerModule,
    ProductModule,
    CategoryModule,
    OrderModule,
    ColorGroupModule,
    RegistryDrivenModule,
    OptionColorModule,
    OptionInteratorModule,
    OptionWheelModule,
    ProductBasicParamModule,
    ProductBasicSizeModule,
    ProductBasicEngineModule
  ],
})
export class AppModule { }
