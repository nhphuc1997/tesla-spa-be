import {
  Injectable, NestInterceptor, ExecutionContext,
  CallHandler, HttpException, HttpStatus, Logger
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(_context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle()
      .pipe(
        catchError(err => throwError(() => {
          return new HttpException({
            data: null,
            statusCode: HttpStatus.BAD_REQUEST,
            message: err?.response?.message,
            error: err?.name
          },
            HttpStatus.OK
          )
        }),
        )
      )
  }
}
