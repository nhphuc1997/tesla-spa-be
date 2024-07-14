import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BannerModule } from './modules/banner/banner.module';
import { ProductModule } from './modules/product/product.module';
import { CategoryModule } from './modules/category/category.module';
import { OrderModule } from './modules/order/order.module';
import { ColorGroupModule } from './modules/color-group/color-group.module';
import { Alloy } from './entities/Alloy.entity';
import { Banner } from './entities/Banner.entity';
import { BookTestDrive } from './entities/BookTestDrive.entity';
import { Category } from './entities/Category.entity';
import { ColorGroup } from './entities/ColorGroup.entity';
import { Exterior } from './entities/Exterior.entity';
import { Interior } from './entities/Interior.entity';
import { Material } from './entities/Material.entity';
import { Order } from './entities/Order.entity';
import { Product } from './entities/Product.entity';
import { ProductImage } from './entities/ProductImage.entity';
import { Technical } from './entities/Technical.entity';
import { AlloyModule } from './modules/alloy/alloy.module';
import { BookTestDriveModule } from './modules/book-test-drive/book-test-drive.module';
import { ExteriorModule } from './modules/exterior/exterior.module';
import { InteriorModule } from './modules/interior/interior.module';
import { MaterialModule } from './modules/material/material.module';
import { ProductImageModule } from './modules/product-image/product-image.module';
import { TechnicalModule } from './modules/technical/technical.module';

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
        entities: [],
        autoLoadEntities: true,
        synchronize: true,
      })
    }),
    BannerModule,
    ProductModule,
    CategoryModule,
    OrderModule,
    ColorGroupModule,
    AlloyModule,
    BookTestDriveModule,
    ExteriorModule,
    InteriorModule,
    MaterialModule,
    ProductImageModule,
    TechnicalModule,
  ],
})
export class AppModule { }
