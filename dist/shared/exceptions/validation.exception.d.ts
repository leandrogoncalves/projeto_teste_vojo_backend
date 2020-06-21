import { UnprocessableEntityException } from '@nestjs/common';
export declare class ValidationException extends UnprocessableEntityException {
    ValidationErrors: {};
    constructor(ValidationErrors: {});
}
