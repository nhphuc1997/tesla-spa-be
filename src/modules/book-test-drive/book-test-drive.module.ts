import { Module } from '@nestjs/common';
import { BookTestDriveService } from './book-test-drive.service';
import { BookTestDriveController } from './book-test-drive.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookTestDrive } from 'src/entities/BookTestDrive.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([BookTestDrive])
  ],
  controllers: [BookTestDriveController],
  providers: [BookTestDriveService],
})
export class BookTestDriveModule { }
