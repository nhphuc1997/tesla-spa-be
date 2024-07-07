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
import { ColorGroup } from './entities/ColorGroup.entity';
import { ColorGroupModule } from './modules/color-group/color-group.module';
import { Image } from './entities/Image.entity';
import { ImageModule } from './modules/image/image.module';
import { OptionColorModule } from './modules/option-color/option-color.module';
import { OptionWheelModule } from './modules/option-wheel/option-wheel.module';
import { OptionInteratorModule } from './modules/option-interator/option-interator.module';
import { CustomerDemand } from './entities/CustomerDemand.entity';
import { CustomerDemandModule } from './modules/customer-demand/customer-demand.module';
import { OrderModule } from './modules/order/order.module';

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
    CategoryModule,
    BannerModule,
    ProductModule,
    ProductBasicEngineModule,
    ProductBasicSizeModule,
    ProductBasicParamModule,
    ColorGroupModule,
    ImageModule,
    OptionColorModule,
    OptionWheelModule,
    OptionInteratorModule,
    CustomerDemandModule,
    OrderModule
  ],
})
export class AppModule { }
