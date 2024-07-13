import { Controller } from '@nestjs/common';
import { BookTestDriveService } from './book-test-drive.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('BOOK TEST DRIVE API')
@Controller('book-test-drive')
export class BookTestDriveController {
  constructor(private readonly bookTestDriveService: BookTestDriveService) { }
}
