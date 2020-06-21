import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { ValidationException } from '@/shared/exceptions/validation.exception';
export declare class ValidationFilter implements ExceptionFilter {
    catch(exception: ValidationException, host: ArgumentsHost): any;
}
