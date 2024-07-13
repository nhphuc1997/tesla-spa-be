import { Controller } from '@nestjs/common';
import { BookTestDriveService } from './book-test-drive.service';

@Controller('book-test-drive')
export class BookTestDriveController {
  constructor(private readonly bookTestDriveService: BookTestDriveService) {}
}
