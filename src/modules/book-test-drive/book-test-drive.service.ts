import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookTestDrive } from 'src/entities/BookTestDrive.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookTestDriveService extends TypeOrmCrudService<BookTestDrive> {
  constructor(@InjectRepository(BookTestDrive) repo: Repository<BookTestDrive>) {
    super(repo)
  }
}
