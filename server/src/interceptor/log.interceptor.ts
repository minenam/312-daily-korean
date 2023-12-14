import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { LogService } from '../util/log.service';

@Injectable()
export class LogInterceptor implements NestInterceptor {
  constructor(private readonly logger: LogService) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const handler = context.getHandler().name;
    const { method, path } = context.switchToHttp().getRequest();
    this.logger.verbose(handler, `${method} ${path}`);
    return next.handle();
  }
}
