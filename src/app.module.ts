import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
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
    })
  ],
})
export class AppModule { }
