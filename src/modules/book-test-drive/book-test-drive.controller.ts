import { Controller } from '@nestjs/common';
import { BookTestDriveService } from './book-test-drive.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@dataui/crud';
import { BookTestDrive } from 'src/entities/BookTestDrive.entity';

@ApiTags('BOOK TEST DRIVE API')
@Crud({
  model: { type: BookTestDrive }
})
@Controller('backend/book-test-drive')
export class BookTestDriveController implements CrudController<BookTestDrive> {
  constructor(public readonly service: BookTestDriveService) { }
}
